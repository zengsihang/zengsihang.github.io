export interface Env {
  DB?: D1Database;
  VISITOR_SALT?: string;
}

type RangeKey = "30d" | "90d" | "all";

const corsHeaders = {
  "access-control-allow-origin": "*",
  "access-control-allow-methods": "GET,POST,OPTIONS",
  "access-control-allow-headers": "content-type"
};

const json = (data: unknown, status = 200) =>
  new Response(JSON.stringify(data), {
    status,
    headers: {
      "content-type": "application/json; charset=utf-8",
      ...corsHeaders
    }
  });

const badConfig = () =>
  json(
    {
      error: "Visitor database is not configured yet."
    },
    503
  );

const roundCoordinate = (value: unknown) => Math.round(Number.parseFloat(String(value)) * 100) / 100;

const dateFilterSql = (range: RangeKey) => {
  if (range === "all") {
    return "";
  }
  return range === "90d" ? "WHERE visited_at >= datetime('now', '-90 day')" : "WHERE visited_at >= datetime('now', '-30 day')";
};

const sha256 = async (value: string) => {
  const hashBuffer = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(value));
  return Array.from(new Uint8Array(hashBuffer))
    .map((byte) => byte.toString(16).padStart(2, "0"))
    .join("");
};

const normalizeRange = (range: string | null): RangeKey => {
  if (range === "90d" || range === "all") {
    return range;
  }
  return "30d";
};

export default {
  async fetch(request, env) {
    if (request.method === "OPTIONS") {
      return new Response(null, { headers: corsHeaders });
    }

    const url = new URL(request.url);

    if (!env.DB) {
      return badConfig();
    }

    if (request.method === "POST" && url.pathname === "/api/visit") {
      const cf = request.cf;
      const country = cf?.country || "Unknown";
      const latitude = roundCoordinate(cf?.latitude);
      const longitude = roundCoordinate(cf?.longitude);

      if (!Number.isFinite(latitude) || !Number.isFinite(longitude)) {
        return json({ ok: false, reason: "Missing geo coordinates." }, 202);
      }

      const bucketDate = new Date().toISOString().slice(0, 10);
      const ip = request.headers.get("cf-connecting-ip") || "unknown-ip";
      const userAgent = request.headers.get("user-agent") || "unknown-agent";
      const visitorHash = await sha256(`${env.VISITOR_SALT || "development"}:${ip}:${userAgent}:${bucketDate}`);

      await env.DB.prepare(
        `
          INSERT OR IGNORE INTO visits (visitor_hash, country, city, latitude, longitude, bucket_date)
          VALUES (?1, ?2, ?3, ?4, ?5, ?6)
        `
      )
        .bind(
          visitorHash,
          country,
          cf?.city || null,
          latitude,
          longitude,
          bucketDate
        )
        .run();

      return json({ ok: true });
    }

    if (request.method === "GET" && url.pathname === "/api/visits") {
      const range = normalizeRange(url.searchParams.get("range"));
      const results = await env.DB.prepare(
        `
          SELECT
            country,
            city,
            latitude,
            longitude,
            COUNT(*) AS count,
            MAX(visited_at) AS lastSeen
          FROM visits
          ${dateFilterSql(range)}
          GROUP BY country, city, latitude, longitude
          ORDER BY count DESC, lastSeen DESC
          LIMIT 300
        `
      ).all<{
        country: string;
        city: string | null;
        latitude: number;
        longitude: number;
        count: number;
        lastSeen: string;
      }>();

      return json({
        visits: (results.results || []).map((row) => ({
          country: row.country,
          city: row.city || undefined,
          latitude: Number(row.latitude),
          longitude: Number(row.longitude),
          count: Number(row.count),
          lastSeen: row.lastSeen
        }))
      });
    }

    return json({ error: "Not found." }, 404);
  }
} satisfies ExportedHandler<Env>;
