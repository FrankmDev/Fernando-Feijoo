/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      spacing: {
        xs: "var(--space-xs)", // 4px
        sm: "var(--space-sm)", // 8px
        md: "var(--space-md)", // 16px
        lg: "var(--space-lg)", // 24px
        xl: "var(--space-xl)", // 32px
        "2xl": "var(--space-2xl)", // 48px
        "3xl": "var(--space-3xl)", // 64px
      },
    },
  },
  plugins: [],
};
