// Utility functions for processing image URLs in the Fernando Feijoo project

/**
 * Converts @assets paths to proper public URLs for Astro
 * @param imageUrl - The image URL that may start with @assets/
 * @returns Processed URL that can be used in img src attributes
 */
export function processImageUrl(imageUrl: string): string {
  if (!imageUrl) return "";

  // Handle @assets/ paths - convert to public directory structure
  if (imageUrl.startsWith("@assets/")) {
    // Convert @assets/works/... to /works/...
    return imageUrl.replace("@assets/", "/");
  }

  // Handle @ prefix (legacy support)
  if (imageUrl.startsWith("@")) {
    return imageUrl.substring(1);
  }

  // If it's already a proper path, return as is
  if (imageUrl.startsWith("/") || imageUrl.startsWith("http")) {
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
  if (!imageUrls || imageUrls.length === 0) return [];
  return imageUrls.map((url) => processImageUrl(url));
}

/**
 * Gets the first valid image URL from an array
 * @param imageUrls - Array of image URLs
 * @returns First valid image URL or empty string
 */
export function getFirstImageUrl(imageUrls: string[]): string {
  const processedUrls = processImageUrls(imageUrls);
  return processedUrls.length > 0 ? processedUrls[0] : "";
}

/**
 * Checks if a work has multiple images
 * @param imageUrls - Array of image URLs
 * @returns Boolean indicating if there are multiple images
 */
export function hasMultipleImages(imageUrls: string[]): boolean {
  return imageUrls && imageUrls.length > 1;
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
 * Creates a fallback image URL for works without images
 * @param title - Title of the work
 * @returns Placeholder image URL or data URL
 */
export function getFallbackImageUrl(): string {
  // Return empty string to show CSS placeholder instead
  return "";
}

/**
 * Validates if an image URL is likely to be valid
 * @param imageUrl - The image URL to validate
 * @returns Boolean indicating if the URL looks valid
 */
export function isValidImageUrl(imageUrl: string): boolean {
  if (!imageUrl) return false;

  // Check for common image extensions
  const imageExtensions = [
    ".jpg",
    ".jpeg",
    ".png",
    ".gif",
    ".webp",
    ".avif",
    ".svg",
  ];
  const hasImageExtension = imageExtensions.some((ext) =>
    imageUrl.toLowerCase().includes(ext),
  );

  return hasImageExtension;
}

/**
 * Creates a placeholder image URL for development/testing
 * @param width - Width of the placeholder
 * @param height - Height of the placeholder
 * @param text - Text to display in the placeholder
 * @returns A placeholder image URL
 */
export function createPlaceholderImageUrl(
  width: number = 400,
  height: number = 300,
  text: string = "Image",
): string {
  // Create a simple SVG placeholder
  const svg = `<svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
    <rect width="100%" height="100%" fill="#f3f4f6"/>
    <text x="50%" y="50%" text-anchor="middle" dy="0.3em" fill="#6b7280" font-family="Arial, sans-serif" font-size="16">${text}</text>
  </svg>`;

  return `data:image/svg+xml;base64,${btoa(svg)}`;
}
