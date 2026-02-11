/**
 * Shared TypeScript types and interfaces
 */

/**
 * Navigation item structure
 */
export interface NavItem {
  href: string;
  text: string;
}

/**
 * Social media link structure
 */
export interface SocialLink {
  href: string;
  label: string;
  icon: string;
}

/**
 * Site configuration structure
 */
export interface SiteConfig {
  name: string;
  title: string;
  description: string;
  url: string;
  author: string;
  email: string;
  keywords: string[];
}

/**
 * Breadcrumb item structure
 */
export interface BreadcrumbItem {
  label: string;
  href?: string;
}

/**
 * Work/artwork metadata
 */
export interface Work {
  slug: string;
  title: string;
  description: string;
  medium: string;
  dimensions?: string;
  edition?: number;
  price?: string;
  imageUrls: string[];
}

/**
 * Collection of works
 */
export interface Collection {
  slug: string;
  title: string;
  description?: string;
  works: Work[];
}

/**
 * Category of works (e.g., Prints, Ceramics)
 */
export interface Category {
  slug: string;
  title: string;
  collections?: Collection[];
  works?: Work[];
}

/**
 * SEO metadata for pages
 */
export interface SeoMeta {
  title: string;
  description?: string;
  image?: string;
  canonicalURL?: string;
  noindex?: boolean;
}

/**
 * Structured data for JSON-LD
 */
export interface StructuredData {
  "@context": string;
  "@type": string;
  [key: string]: unknown;
}

/**
 * Work card component props
 */
export interface WorkCardProps {
  href: string;
  title: string;
  subtitle?: string;
  imageUrl?: string;
  imageAlt?: string;
  isAboveFold?: boolean;
}

/**
 * Image modal state
 */
export interface ImageModalState {
  isOpen: boolean;
  currentIndex: number;
  images: string[];
}

/**
 * View transition animation config
 */
export interface ViewTransitionConfig {
  name?: string;
  duration?: string;
  easing?: string;
}
