// @ts-check
import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import vue from "@astrojs/vue";

// https://astro.build/config
export default defineConfig({
  site: "https://fernando-feijoo.com",
  output: "static",
  integrations: [tailwind({ applyBaseStyles: false }), vue()],
  vite: {
    ssr: {
      noExternal: ["zod", "radix-vue", "@vueuse/core"],
    },
    optimizeDeps: {
      include: ["zod", "radix-vue", "@vueuse/core"],
    },
  },
  build: {},
  server: {
    port: 4321,
    host: true,
    headers: {
      "Cache-Control":
        "no-store, no-cache, must-revalidate, proxy-revalidate, max-age=0",
    },
  },
});
