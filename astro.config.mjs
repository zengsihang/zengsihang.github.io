import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://zengsihang.github.io",
  integrations: [sitemap()],
  // Old multi-page routes now live on the single home page.
  redirects: {
    "/cv": "/",
    "/publications": "/#publications"
  },
  build: {
    format: "directory"
  },
  vite: {
    server: {
      host: true
    }
  }
});
