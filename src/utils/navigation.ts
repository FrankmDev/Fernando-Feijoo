/**
 * Navigation utility functions
 */

/**
 * Normalizes a pathname by removing trailing slashes (except for root)
 * @param path - The pathname to normalize
 * @returns Normalized pathname
 */
export function normalizePath(path: string): string {
  return path === "/" ? "/" : path.replace(/\/$/, "");
}

/**
 * Checks if a given href matches the current path
 * @param href - The link href to check
 * @param currentPath - The current pathname
 * @returns True if the href is the current page
 */
export function isCurrentPage(href: string, currentPath: string): boolean {
  const normalizedCurrent = normalizePath(currentPath);

  if (href === "/") {
    return normalizedCurrent === "/";
  }

  return (
    normalizedCurrent === href || normalizedCurrent.startsWith(href + "/")
  );
}

/**
 * Gets the current path from Astro.url or window.location
 * @returns The current pathname
 */
export function getCurrentPath(): string {
  if (typeof window !== "undefined") {
    return window.location.pathname;
  }
  return "/";
}
