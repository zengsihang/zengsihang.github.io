import { drag, type D3DragEvent } from "d3-drag";
import { geoGraticule10, geoOrthographic, geoPath, type GeoProjection } from "d3-geo";
import { select } from "d3-selection";
import { feature } from "topojson-client";
import worldAtlas from "world-atlas/countries-110m.json";

import type { VisitAggregate } from "@/types";

const apiBase = (import.meta.env.PUBLIC_VISITOR_API_BASE || "").replace(/\/$/, "");
const sessionKey = "sihang-zeng-visitor-logged-v1";
const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const world = feature(
  worldAtlas as never,
  (worldAtlas as { objects: { countries: unknown } }).objects.countries as never
) as unknown as { features: unknown[] };

const normalizeRange = (value: string | null) => (value === "90d" || value === "all" ? value : "30d");

const updateHotspots = (container: HTMLElement, visits: VisitAggregate[]) => {
  const hotspotRoot = container.querySelector<HTMLElement>("[data-hotspots]");
  if (!hotspotRoot) {
    return;
  }

  hotspotRoot.innerHTML = "";
  if (!visits.length) {
    hotspotRoot.innerHTML =
      '<div class="visitor-hotspot"><strong>Waiting for live data</strong><span>Deploy the Cloudflare Worker and set <code>PUBLIC_VISITOR_API_BASE</code> to activate the atlas.</span></div>';
    return;
  }

  visits.slice(0, 4).forEach((visit) => {
    const item = document.createElement("div");
    item.className = "visitor-hotspot";
    item.innerHTML = `<strong>${visit.city ? `${visit.city}, ` : ""}${visit.country}</strong><span>${visit.count} visit${visit.count === 1 ? "" : "s"}</span>`;
    hotspotRoot.appendChild(item);
  });
};

const updateSummary = (container: HTMLElement, visits: VisitAggregate[], status: string) => {
  const totalVisits = visits.reduce((sum, visit) => sum + visit.count, 0);
  const countryCount = new Set(visits.map((visit) => visit.country)).size;
  const totalVisitsNode = container.querySelector<HTMLElement>("[data-total-visits]");
  const totalCountriesNode = container.querySelector<HTMLElement>("[data-total-countries]");
  const statusNode = container.querySelector<HTMLElement>("[data-status]");

  if (totalVisitsNode) {
    totalVisitsNode.textContent = totalVisits ? totalVisits.toLocaleString() : "0";
  }
  if (totalCountriesNode) {
    totalCountriesNode.textContent = countryCount ? countryCount.toString() : "0";
  }
  if (statusNode) {
    statusNode.textContent = status;
  }

  updateHotspots(container, visits);
};

const projectPoint = (projection: GeoProjection, visit: VisitAggregate) => {
  const projected = projection([visit.longitude, visit.latitude]);
  if (!projected) {
    return null;
  }
  return {
    x: projected[0],
    y: projected[1]
  };
};

const logVisit = async () => {
  if (!apiBase || sessionStorage.getItem(sessionKey)) {
    return;
  }

  try {
    const response = await fetch(`${apiBase}/api/visit`, {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify({
        source: "website"
      })
    });

    if (response.ok) {
      sessionStorage.setItem(sessionKey, "1");
    }
  } catch {
    return;
  }
};

const fetchVisits = async (range: string) => {
  if (!apiBase) {
    return [];
  }

  const response = await fetch(`${apiBase}/api/visits?range=${range}`);
  if (!response.ok) {
    throw new Error(`Visitor API returned ${response.status}`);
  }

  const payload = (await response.json()) as { visits?: VisitAggregate[] };
  return payload.visits ?? [];
};

const setupMap = (container: HTMLElement) => {
  const svgNode = container.querySelector<SVGSVGElement>("svg");
  if (!svgNode) {
    return;
  }

  const section = container.closest(".visitor-panel") as HTMLElement | null;
  if (!section) {
    return;
  }

  const svg = select(svgNode);
  const width = 640;
  const height = 640;
  const projection = geoOrthographic()
    .translate([width / 2, height / 2])
    .scale(Math.min(width, height) * 0.34)
    .clipAngle(90)
    .precision(0.3)
    .rotate([-18, -12]);
  const path = geoPath(projection);
  const root = svg.append("g");
  const spherePath = root.append("path").attr("class", "map-sphere");
  const graticulePath = root.append("path").attr("class", "map-graticule");
  const countries = root.append("g");
  const visitsLayer = root.append("g");
  let visits: VisitAggregate[] = [];
  let currentRange = "30d";
  let rotation = -18;
  let autoRotate = !prefersReducedMotion;
  let animationFrame = 0;

  const render = () => {
    spherePath.attr("d", path({ type: "Sphere" }) || "");
    graticulePath.attr("d", path(geoGraticule10()) || "");

    countries
      .selectAll<SVGPathElement, unknown>("path")
      .data(world.features)
      .join("path")
      .attr("class", "map-country")
      .attr("d", (datum: unknown) => path(datum as never) || "");

    visitsLayer
      .selectAll<SVGCircleElement, VisitAggregate>("circle")
      .data(visits)
      .join("circle")
      .attr("class", "map-visit")
      .attr("r", (datum: VisitAggregate) => 5 + Math.min(Math.sqrt(datum.count) * 1.9, 12))
      .attr("cx", (datum: VisitAggregate) => projectPoint(projection, datum)?.x ?? -999)
      .attr("cy", (datum: VisitAggregate) => projectPoint(projection, datum)?.y ?? -999)
      .attr("opacity", (datum: VisitAggregate) => (projectPoint(projection, datum) ? 0.95 : 0));
  };

  const tick = () => {
    if (autoRotate) {
      rotation -= 0.12;
      projection.rotate([rotation, -12]);
      render();
    }
    animationFrame = window.requestAnimationFrame(tick);
  };

  const setButtons = () => {
    section.querySelectorAll<HTMLButtonElement>("[data-range]").forEach((button) => {
      button.classList.toggle("is-active", button.dataset.range === currentRange);
    });
  };

  const refreshData = async () => {
    updateSummary(section, visits, "Loading visitor aggregates...");
    try {
      visits = await fetchVisits(currentRange);
      const status = visits.length
        ? `Showing anonymized visitor aggregates for the last ${currentRange === "all" ? "available period" : currentRange}.`
        : "No live data available yet. The globe is ready for first visits.";
      updateSummary(section, visits, status);
      render();
    } catch {
      visits = [];
      updateSummary(
        section,
        visits,
        apiBase
          ? "Visitor API unavailable right now. Showing the empty-state atlas instead."
          : "Set PUBLIC_VISITOR_API_BASE to activate live visitor tracking."
      );
      render();
    }
  };

  svg.call(
    drag<SVGSVGElement, unknown>()
      .on("start", () => {
        autoRotate = false;
      })
      .on("drag", (event: D3DragEvent<SVGSVGElement, unknown, unknown>) => {
        rotation += event.dx * 0.35;
        const tilt = Math.max(-35, Math.min(30, -12 - event.dy * 0.18));
        projection.rotate([rotation, tilt]);
        render();
      })
  );

  setButtons();
  render();
  if (autoRotate) {
    animationFrame = window.requestAnimationFrame(tick);
  }

  section.querySelectorAll<HTMLButtonElement>("[data-range]").forEach((button) => {
    button.addEventListener("click", async () => {
      currentRange = normalizeRange(button.dataset.range || null);
      setButtons();
      await refreshData();
    });
  });

  void logVisit().then(refreshData);

  window.addEventListener(
    "pagehide",
    () => {
      if (animationFrame) {
        window.cancelAnimationFrame(animationFrame);
      }
    },
    { once: true }
  );
};

const boot = () => {
  document.querySelectorAll<HTMLElement>("[data-visitor-map]").forEach((mapRoot) => {
    if (!mapRoot.dataset.ready) {
      mapRoot.dataset.ready = "true";
      setupMap(mapRoot);
    }
  });
};

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", boot, { once: true });
} else {
  boot();
}

document.addEventListener("astro:after-swap", boot);
document.addEventListener("astro:page-load", boot);
