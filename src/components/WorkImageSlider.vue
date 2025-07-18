<script setup lang="ts">
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { processImageUrls } from "@/utils/imageUtils";
import { ref, computed } from "vue";

interface Props {
  imageUrls: string[];
  title: string;
  autoplay?: boolean;
  showControls?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  autoplay: false,
  showControls: true,
});

// Process image URLs
const processedImages = computed(() => processImageUrls(props.imageUrls));
const hasImages = computed(() => processedImages.value.length > 0);
const isMultiple = computed(() => processedImages.value.length > 1);

// Current image index for carousel
const currentIndex = ref(0);

// Setup autoplay plugin
const plugin = Autoplay({
  delay: 3000,
  stopOnMouseEnter: true,
  stopOnInteraction: false,
});

// Image error handler
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

// Emit events
const emit = defineEmits<{
  selectImage: [index: number];
}>();

const selectImage = (index: number) => {
  currentIndex.value = index;
  emit("selectImage", index);
};
</script>

<template>
  <div class="w-full">
    <!-- Always show carousel (for single or multiple images) -->
    <div v-if="hasImages" class="aspect-[3/4] relative">
      <Carousel
        class="w-full h-full"
        :plugins="autoplay ? [plugin] : []"
        @mouseenter="autoplay && plugin.stop"
        @mouseleave="autoplay && [plugin.reset(), plugin.play()]"
      >
        <CarouselContent class="h-full">
          <CarouselItem
            v-for="(imageUrl, index) in processedImages"
            :key="index"
            class="h-full"
          >
            <div class="h-full relative">
              <Card class="h-full">
                <CardContent class="p-0 h-full relative">
                  <img
                    :src="imageUrl"
                    :alt="`${title} - Image ${index + 1}`"
                    class="w-full h-full object-cover rounded-lg"
                    loading="lazy"
                    @error="handleImageError"
                    @load="handleImageLoad"
                  />
                  <!-- Fallback for individual carousel images -->
                  <div
                    class="absolute inset-0 bg-gray-200 flex items-center justify-center rounded-lg"
                    style="display: none"
                  >
                    <div class="text-center">
                      <div class="text-gray-400 text-4xl mb-2">🖼️</div>
                      <p class="text-gray-500 text-sm">{{ title }}</p>
                      <p class="text-gray-400 text-xs mt-1">
                        Image {{ index + 1 }}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        </CarouselContent>

        <!-- Navigation arrows (only show if showControls is true and multiple images) -->
        <CarouselPrevious
          v-if="showControls && isMultiple"
          class="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white border-0 shadow-lg z-10"
        />
        <CarouselNext
          v-if="showControls && isMultiple"
          class="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white border-0 shadow-lg z-10"
        />
      </Carousel>

      <!-- Image counter (only show if multiple images) -->
      <div
        v-if="isMultiple"
        class="absolute bottom-4 left-4 bg-black/70 text-white px-3 py-1 rounded text-sm font-medium z-10"
      >
        {{ processedImages.length }} images
      </div>
    </div>

    <!-- No images fallback -->
    <div v-else class="aspect-[3/4] relative">
      <div
        class="w-full h-full bg-gray-200 flex items-center justify-center rounded-lg"
      >
        <div class="text-center">
          <div class="text-gray-400 text-6xl mb-4">🖼️</div>
          <h3 class="text-xl font-semibold text-gray-600">{{ title }}</h3>
          <p class="text-gray-500 mt-2">Images coming soon</p>
        </div>
      </div>
    </div>

    <!-- Thumbnail strip for multiple images -->
    <div
      v-if="isMultiple && showControls"
      class="mt-4 flex gap-2 overflow-x-auto pb-2"
    >
      <button
        v-for="(imageUrl, index) in processedImages.slice(0, 8)"
        :key="index"
        class="flex-shrink-0 w-16 h-16 bg-gray-200 rounded overflow-hidden hover:ring-2 hover:ring-gray-400 transition-all relative"
        :class="{ 'ring-2 ring-blue-500': index === currentIndex }"
        @click="selectImage(index)"
      >
        <img
          :src="imageUrl"
          :alt="`${title} thumbnail ${index + 1}`"
          class="w-full h-full object-cover"
          loading="lazy"
          @error="handleImageError"
          @load="handleImageLoad"
        />
        <div
          class="absolute inset-0 bg-gray-300 flex items-center justify-center text-gray-500 text-xs"
          style="display: none"
        >
          {{ index + 1 }}
        </div>
      </button>

      <!-- Show more indicator if there are more than 8 images -->
      <div
        v-if="processedImages.length > 8"
        class="flex-shrink-0 w-16 h-16 bg-gray-100 rounded flex items-center justify-center text-gray-500 text-xs font-medium"
      >
        +{{ processedImages.length - 8 }}
      </div>
    </div>
  </div>
</template>

<style scoped>
.carousel-item {
  flex: 0 0 100%;
}

/* Custom scrollbar for thumbnail strip */
.overflow-x-auto::-webkit-scrollbar {
  height: 4px;
}

.overflow-x-auto::-webkit-scrollbar-track {
  background: #f1f1f1;
  border-radius: 2px;
}

.overflow-x-auto::-webkit-scrollbar-thumb {
  background: #888;
  border-radius: 2px;
}

.overflow-x-auto::-webkit-scrollbar-thumb:hover {
  background: #555;
}

/* Ensure proper aspect ratio */
.aspect-\[3\/4\] {
  aspect-ratio: 3 / 4;
}
</style>
