import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://zengsihang.github.io",
  integrations: [sitemap()],
  build: {
    format: "directory"
  },
  vite: {
    server: {
      host: true
    }
  }
});
