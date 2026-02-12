/**
 * Image processing utilities
 * Consolidated image URL processing functions
 */

import type { ImageMetadata } from "astro";
import { IMAGE_CONFIG } from "@/constants";

// Load all images from src/assets/works eagerly
const allImages = import.meta.glob<{ default: ImageMetadata }>(
  "/src/assets/works/**/*.{jpeg,jpg,png,gif,webp,avif}",
  { eager: true },
);

/**
 * Resolves an image path to an Astro ImageMetadata object
 * @param imagePath - The path to the image (e.g., @assets/works/...)
 * @returns The ImageMetadata object or undefined if not found
 */
export function resolveImage(
  imagePath: string | undefined,
): ImageMetadata | undefined {
  if (!imagePath) return undefined;

  // Handle @assets alias
  const normalizedPath = imagePath.replace(
    /^@assets\/works\//,
    "/src/assets/works/",
  );

  const imageModule = allImages[normalizedPath];

  if (imageModule) {
    return imageModule.default;
  }

  console.warn(`Image not found: ${imagePath} (checked: ${normalizedPath})`);
  return undefined;
}

/**
 * Converts @assets paths to proper public URLs for Astro
 * @deprecated Use resolveImage and <Image /> component instead
 * @param imageUrl - The image URL that may start with @assets/
 * @returns Processed URL that can be used in img src attributes
 */
export function processImageUrl(imageUrl: string): string {
  if (!imageUrl) return "";

  // If we can resolve it to an asset, we should ideally use it, but this function returns a string.
  // For now, if it's an asset path, we might need to return the src from the metadata if possible,
  // but <Image /> handles this better.
  // If this is used in legacy <img> tags, it expects a string.

  // If it's @assets, we can try to resolve it and get the .src
  if (imageUrl.startsWith("@assets/")) {
    const meta = resolveImage(imageUrl);
    if (meta) return meta.src;

    // Fallback for missing assets (maybe they are in public?)
    return imageUrl.replace("@assets/", "/");
  }

  // Handle @ prefix (legacy support)
  if (imageUrl.startsWith("@")) {
    const p = imageUrl.substring(1);
    return p.startsWith("/") ? p : `/${p}`;
  }

  // If it's already a proper path, return as is
  if (imageUrl.startsWith("/")) {
    return imageUrl;
  }

  // Handle absolute URLs
  if (imageUrl.startsWith("http")) {
    return imageUrl;
  }

  // For relative paths, assume they're in the public directory
  return "/" + imageUrl;
}

/**
 * Processes an array of image URLs
 * @param imageUrls - Array of image URLs
 * @returns Array of processed URLs
 */
export function processImageUrls(imageUrls: string[]): string[] {
  if (!imageUrls?.length) return [];
  return imageUrls.map((url) => processImageUrl(url));
}

/**
 * Gets the first valid image URL from an array
 * @param imageUrls - Array of image URLs
 * @returns First valid image URL or empty string
 */
export function getFirstImageUrl(imageUrls: string[]): string {
  if (!imageUrls?.length) return "";
  return processImageUrl(imageUrls[0]);
}

/**
 * Checks if a work has multiple images
 * @param imageUrls - Array of image URLs
 * @returns Boolean indicating if there are multiple images
 */
export function hasMultipleImages(imageUrls: string[]): boolean {
  return imageUrls?.length > 1;
}

/**
 * Gets all image URLs except the first one (for thumbnails)
 * @param imageUrls - Array of image URLs
 * @returns Array of additional image URLs
 */
export function getAdditionalImageUrls(imageUrls: string[]): string[] {
  if (!imageUrls || imageUrls.length <= 1) return [];
  return processImageUrls(imageUrls.slice(1));
}

/**
 * Validates if an image URL is likely to be valid
 * @param imageUrl - The image URL to validate
 * @returns Boolean indicating if the URL looks valid
 */
export function isValidImageUrl(imageUrl: string): boolean {
  if (!imageUrl) return false;

  const hasImageExtension = IMAGE_CONFIG.formats.some((ext) =>
    imageUrl.toLowerCase().includes(ext),
  );

  return hasImageExtension || imageUrl.startsWith("data:image/");
}

/**
 * Creates a placeholder image URL for development/testing
 * @param width - Width of the placeholder
 * @param height - Height of the placeholder
 * @param text - Text to display in the placeholder
 * @returns A placeholder image URL
 */
export function createPlaceholderImageUrl(
  width: number = IMAGE_CONFIG.defaultWidth,
  height: number = IMAGE_CONFIG.defaultHeight,
  text: string = "Image",
): string {
  const svg = `<svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
    <rect width="100%" height="100%" fill="${IMAGE_CONFIG.placeholderColor}"/>
    <text x="50%" y="50%" text-anchor="middle" dy="0.3em" fill="#6b7280" font-family="Arial, sans-serif" font-size="16">${text}</text>
  </svg>`;

  return `data:image/svg+xml;base64,${btoa(svg)}`;
}

/**
 * Extracts the first image from a category or collection
 * @param category - The category object with works or collections
 * @returns The first image URL found or empty string
 */
export function getFirstImageFromCategory(category: {
  works?: { imageUrls?: string[] }[];
  collections?: { works?: { imageUrls?: string[] }[] }[];
}): string {
  // Check direct works
  if (category.works?.[0]?.imageUrls?.[0]) {
    return processImageUrl(category.works[0].imageUrls[0]);
  }

  // Check collections
  if (category.collections?.[0]?.works?.[0]?.imageUrls?.[0]) {
    return processImageUrl(category.collections[0].works[0].imageUrls[0]);
  }

  return "";
}

/**
 * Extracts the first image metadata from a category or collection
 * (New helper for components using <Image />)
 */
export function getFirstImageMetaFromCategory(category: {
  works?: { imageUrls?: string[] }[];
  collections?: { works?: { imageUrls?: string[] }[] }[];
}): ImageMetadata | undefined {
  let path = "";
  if (category.works?.[0]?.imageUrls?.[0]) {
    path = category.works[0].imageUrls[0];
  } else if (category.collections?.[0]?.works?.[0]?.imageUrls?.[0]) {
    path = category.collections[0].works[0].imageUrls[0];
  }

  return resolveImage(path);
}
