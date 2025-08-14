/// <reference path="../.astro/types.d.ts" />

declare global {
  interface Window {
    openImageModal?: (images: any, startIndex?: number) => void;
    imageModal?: any;
  }
}

export {};
