/**
 * Shared constants for the Fernando Feijoo portfolio website
 * Centralized configuration for navigation, social links, and site metadata
 */

import type { NavItem, SocialLink, SiteConfig } from "@/types";

/**
 * Site-wide configuration
 */
export const SITE_CONFIG: SiteConfig = {
  name: "Fernando Feijoo",
  title: "Fernando Feijoo | Artist & Printmaker",
  description:
    "Fernando Feijoo is a multi-disciplinary artist and printmaker exploring printmaking, drawing, painting, artist books and ceramics.",
  url: "https://fernando-feijoo.com",
  author: "Fernando Feijoo",
  email: "info@fernandofeijoo.com",
  keywords: [
    "Fernando Feijoo",
    "artist",
    "printmaker",
    "ceramics",
    "drawings",
    "mixed media",
    "artist books",
    "contemporary art",
    "linocut",
    "letterpress",
  ],
};

/**
 * Main navigation items
 */
export const NAV_ITEMS: NavItem[] = [
  { href: "/", text: "Home" },
  { href: "/works", text: "Works" },
  { href: "/profile", text: "Profile" },
  { href: "/contact", text: "Contact" },
] as const;

/**
 * Social media links
 */
export const SOCIAL_LINKS: SocialLink[] = [
  {
    href: "https://www.instagram.com/fernandofeijoo/",
    label: "Instagram",
    icon: "instagram",
  },
  {
    href: "https://x.com/fernando_feijoo",
    label: "X",
    icon: "x",
  },
  {
    href: "https://vimeo.com/573857181",
    label: "Vimeo",
    icon: "vimeo",
  },
] as const;

/**
 * Animation timing constants
 */
export const ANIMATION = {
  duration: {
    fast: "0.2s",
    normal: "0.3s",
    slow: "0.5s",
    slower: "0.8s",
  },
  easing: {
    default: "ease",
    expo: "cubic-bezier(0.16, 1, 0.3, 1)",
    smooth: "cubic-bezier(0.4, 0, 0.2, 1)",
    bounce: "cubic-bezier(0.34, 1.56, 0.64, 1)",
  },
  stagger: {
    default: 0.08,
    fast: 0.05,
    slow: 0.12,
  },
} as const;

/**
 * Breakpoint values (in pixels) - matches Tailwind defaults
 */
export const BREAKPOINTS = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  "2xl": 1400,
} as const;

/**
 * Image configuration
 */
export const IMAGE_CONFIG = {
  formats: [".jpg", ".jpeg", ".png", ".gif", ".webp", ".avif", ".svg"],
  defaultWidth: 400,
  defaultHeight: 400,
  placeholderColor: "#f3f4f6",
} as const;
