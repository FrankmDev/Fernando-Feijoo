<script setup lang="ts">
import { processImageUrls } from "@/utils/imageUtils";

interface Props {
  imageUrls: string[];
  title: string;
  startFromIndex?: number;
}

const props = withDefaults(defineProps<Props>(), {
  startFromIndex: 1,
});

// Process image URLs and get additional images (skip the first one)
const additionalImages = processImageUrls(props.imageUrls.slice(props.startFromIndex));
const hasAdditionalImages = additionalImages.length > 0;

// Calculate grid columns based on number of images
const getGridCols = (count: number) => {
  if (count === 1) return "grid-cols-1";
  if (count === 2) return "grid-cols-2";
  if (count === 3) return "grid-cols-3";
  if (count === 4) return "grid-cols-4";
  if (count === 5) return "grid-cols-5";
  if (count === 6) return "grid-cols-6";
  // For more than 6, use 6 columns and wrap
  return "grid-cols-6";
};

// Image loading handlers
const handleImageError = (event: Event) => {
  const img = event.target as HTMLImageElement;
  img.style.display = "none";
  const placeholder = img.nextElementSibling as HTMLElement;
  if (placeholder) {
    placeholder.style.display = "flex";
  }
};

const handleImageLoad = (event: Event) => {
  const img = event.target as HTMLImageElement;
  img.style.display = "block";
  const placeholder = img.nextElementSibling as HTMLElement;
  if (placeholder) {
    placeholder.style.display = "none";
  }
};
</script>

<template>
  <div v-if="hasAdditionalImages" class="mt-12">
    <h3 class="text-xl font-semibold mb-6 text-gray-900">Additional Images</h3>

    <div
      class="grid gap-4"
      :class="getGridCols(additionalImages.length)"
    >
      <div
        v-for="(imageUrl, index) in additionalImages"
        :key="index"
        class="relative aspect-[4/3] bg-gray-100 rounded-lg overflow-hidden group cursor-pointer hover:shadow-lg transition-shadow duration-300"
        @click="$emit('selectImage', index + props.startFromIndex)"
      >
        <img
          :src="imageUrl"
          :alt="`${title} - Image ${index + props.startFromIndex + 1}`"
          class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          loading="lazy"
          @error="handleImageError"
          @load="handleImageLoad"
        />

        <!-- Fallback placeholder -->
        <div
          class="absolute inset-0 bg-gray-200 flex items-center justify-center"
          style="display: none"
        >
          <div class="text-center">
            <div class="text-gray-400 text-2xl mb-2">🖼️</div>
            <p class="text-xs text-gray-500">Image {{ index + props.startFromIndex + 1 }}</p>
          </div>
        </div>

        <!-- Hover overlay -->
        <div class="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-opacity duration-300 flex items-center justify-center">
          <div class="text-white text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            View Full Size
          </div>
        </div>

        <!-- Image number indicator -->
        <div class="absolute top-2 right-2 bg-black bg-opacity-70 text-white text-xs px-2 py-1 rounded">
          {{ index + props.startFromIndex + 1 }}
        </div>
      </div>
    </div>

    <!-- Image count info -->
    <div class="mt-4 text-sm text-gray-500 text-center">
      {{ additionalImages.length }} additional image{{ additionalImages.length > 1 ? 's' : '' }}
    </div>
  </div>
</template>

<style scoped>
/* Custom grid classes for more than 6 columns */
.grid-cols-7 {
  grid-template-columns: repeat(7, minmax(0, 1fr));
}

.grid-cols-8 {
  grid-template-columns: repeat(8, minmax(0, 1fr));
}

.grid-cols-9 {
  grid-template-columns: repeat(9, minmax(0, 1fr));
}

.grid-cols-10 {
  grid-template-columns: repeat(10, minmax(0, 1fr));
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .grid-cols-3,
  .grid-cols-4,
  .grid-cols-5,
  .grid-cols-6,
  .grid-cols-7,
  .grid-cols-8,
  .grid-cols-9,
  .grid-cols-10 {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (max-width: 480px) {
  .grid-cols-2,
  .grid-cols-3,
  .grid-cols-4,
  .grid-cols-5,
  .grid-cols-6,
  .grid-cols-7,
  .grid-cols-8,
  .grid-cols-9,
  .grid-cols-10 {
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }
}
</style>
