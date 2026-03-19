# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Fernando Feijoo's artist portfolio website — a static site built with **Astro 5** showcasing printmaking, ceramics, drawings, artist books, and mixed media. The site uses View Transitions for client-side navigation and Astro's built-in image optimization.

## Commands

```bash
npm run dev        # Dev server with host + no-cache flags
npm run build      # astro check (TypeScript) + astro build → ./dist/
npm run preview    # Preview production build locally
```

No test suite. TypeScript validation runs as part of the build step (`astro check`).

## Architecture

### Data Flow

All artwork content lives in **`src/data/works.ts`** as a single `works` array with this hierarchy:

```
Category (e.g., "Prints") → Collections[] → Works[] (with imageUrls, metadata)
```

Pages consume this data directly — there is no CMS or API. Dynamic routes (`[slug].astro`, `[collection].astro`) derive their params from `getStaticPaths()` using this data.

### Path Aliases

Defined in `tsconfig.json`. Use these instead of relative paths:

- `@/*` → `src/*`
- `@components/*`, `@layouts/*`, `@pages/*`, `@sections/*`
- `@data/*`, `@utils/*`, `@types/*`, `@constants`

### Key Files

| File | Role |
|------|------|
| `src/data/works.ts` | Single source of truth for all artwork content |
| `src/constants/index.ts` | Site config, nav items, social links, animation constants, breakpoints |
| `src/types/index.ts` | All TypeScript interfaces (Work, Collection, Category, SeoMeta, etc.) |
| `src/layouts/Layout.astro` | Master layout — SEO meta, JSON-LD, View Transitions, Header/Footer |
| `src/styles/general.css` | Tailwind base + design system (fluid spacing, typography, animation vars) |
| `src/utils/images.ts` | Image resolution helpers for mapping `@assets` paths to Astro ImageMetadata |
| `src/scripts/scroll-reveal.ts` | Intersection Observer scroll animations, re-triggered on view transitions |
| `src/scripts/ImageModal.ts` | Full-screen gallery modal with keyboard nav and image preloading |

### Image Handling

Astro's `<Image />` component is used throughout with AVIF as the primary format. Images in `src/assets/` are statically imported; `src/utils/images.ts` contains helpers (`resolveImage`, `processImageUrl`, etc.) to map string asset paths to `ImageMetadata` objects at build time.

### Animations

- Scroll reveals: add `.reveal`, `.reveal-fade`, `.reveal-left`, `.reveal-right`, or `.reveal-scale` classes — handled by `scroll-reveal.ts`
- Animation constants (duration, easing, stagger) are in `src/constants/index.ts` under `ANIMATION`
- Respects `prefers-reduced-motion`

### Deployment

- Static output (no adapter) — the site is purely static
- `vercel.json` sets long-lived cache headers for `/_astro/` build artifacts, no-cache for content
