// @ts-check
import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import vue from "@astrojs/vue";
import node from "@astrojs/node";

// https://astro.build/config
export default defineConfig({
  site: "https://fernando-feijoo.com",
  output: "static",
  adapter: node({
    mode: "standalone",
  }),
  integrations: [tailwind({ applyBaseStyles: false }), vue()],
  vite: {
    ssr: {
      noExternal: ["zod", "radix-vue", "@vueuse/core"],
    },
    optimizeDeps: {
      include: ["zod", "radix-vue", "@vueuse/core"],
    },
  },
});
