// @ts-check
import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import vue from "@astrojs/vue";
import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  output: "hybrid",
  adapter: vercel({
    webAnalytics: { enabled: true },
  }),
  integrations: [tailwind({ applyBaseStyles: false }), vue()],
  vite: {
    define: {
      "process.env.NODE_ENV": JSON.stringify(
        process.env.NODE_ENV || "development",
      ),
    },
    optimizeDeps: {
      exclude: ["@rollup/rollup-linux-x64-gnu"],
    },
    build: {
      rollupOptions: {
        external: ["@rollup/rollup-linux-x64-gnu"],
      },
    },
  },
  server: {
    port: 4321,
    host: true,
  },
});
