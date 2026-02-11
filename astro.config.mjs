// @ts-check
import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: "https://fernando-feijoo.com",
  output: "static",
  integrations: [tailwind({ applyBaseStyles: false })],
  build: {
    inlineStylesheets: "auto",
  },
  compressHTML: true,
  server: {
    port: 4321,
    host: true,
    headers: {
      "Cache-Control":
        "no-store, no-cache, must-revalidate, proxy-revalidate, max-age=0",
    },
  },
});
