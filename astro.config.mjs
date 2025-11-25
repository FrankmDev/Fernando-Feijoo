// @ts-check
import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import vue from "@astrojs/vue";
import vercel from "@astrojs/vercel";

// https://astro.build/config
export default defineConfig({
  site: "https://fernando-feijoo.com",
  output: "server",
  adapter: vercel(),
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
