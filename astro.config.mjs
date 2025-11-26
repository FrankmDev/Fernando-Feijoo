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
  build: {
    format: "file",
  },
});
