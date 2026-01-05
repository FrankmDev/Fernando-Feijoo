<script setup lang="ts">
import { ref, onMounted, onUnmounted, computed } from "vue";

interface Slide {
  src: string;
  alt: string;
}

const slides: Slide[] = [
  {
    src: "/profile/studio.avif",
    alt: "Fernando Feijoo in his studio workspace",
  },
  {
    src: "/profile/columbian.avif",
    alt: "Fernando Feijoo working with Columbian printing press",
  },
  {
    src: "/profile/printing.avif",
    alt: "Fernando Feijoo during the printing process",
  },
  {
    src: "/profile/working.avif",
    alt: "Fernando Feijoo working on an art piece",
  },
];

const currentIndex = ref(0);
const isTransitioning = ref(false);
const isPaused = ref(false);
const prefersReducedMotion = ref(false);

let autoplayInterval: ReturnType<typeof setInterval> | null = null;

const nextSlide = () => {
  if (isTransitioning.value) return;
  isTransitioning.value = true;
  currentIndex.value = (currentIndex.value + 1) % slides.length;
  setTimeout(() => {
    isTransitioning.value = false;
  }, 800);
};

const prevSlide = () => {
  if (isTransitioning.value) return;
  isTransitioning.value = true;
  currentIndex.value = (currentIndex.value - 1 + slides.length) % slides.length;
  setTimeout(() => {
    isTransitioning.value = false;
  }, 800);
};

const startAutoplay = () => {
  if (autoplayInterval || prefersReducedMotion.value) return;
  autoplayInterval = setInterval(() => {
    if (!isPaused.value) nextSlide();
  }, 4000);
};

const stopAutoplay = () => {
  if (autoplayInterval) {
    clearInterval(autoplayInterval);
    autoplayInterval = null;
  }
};

const pause = () => {
  isPaused.value = true;
};

const resume = () => {
  isPaused.value = false;
};

onMounted(() => {
  prefersReducedMotion.value = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;
  startAutoplay();
});

onUnmounted(() => {
  stopAutoplay();
});

const progressStyle = computed(() => ({
  transform: `scaleX(${(currentIndex.value + 1) / slides.length})`,
}));
</script>

<template>
  <div
    class="slider"
    @mouseenter="pause"
    @mouseleave="resume"
    @focusin="pause"
    @focusout="resume"
    role="region"
    aria-label="Image gallery"
    aria-roledescription="carousel"
  >
    <!-- Main Image Container -->
    <div class="slider-viewport">
      <div
        v-for="(slide, index) in slides"
        :key="index"
        class="slide"
        :class="{ active: index === currentIndex }"
        role="group"
        :aria-roledescription="'slide'"
        :aria-label="`${index + 1} of ${slides.length}`"
        :aria-hidden="index !== currentIndex"
      >
        <img
          :src="slide.src"
          :alt="slide.alt"
          class="slide-image"
          :loading="index === 0 ? 'eager' : 'lazy'"
          decoding="async"
          :fetchpriority="index === 0 ? 'high' : 'auto'"
          width="500"
          height="500"
        />
      </div>

      <!-- Navigation Arrows -->
      <button
        class="nav-btn nav-prev"
        @click="prevSlide"
        aria-label="Previous image"
        :disabled="isTransitioning"
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M12 4l-6 6 6 6"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </button>

      <button
        class="nav-btn nav-next"
        @click="nextSlide"
        aria-label="Next image"
        :disabled="isTransitioning"
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M8 4l6 6-6 6"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </button>
    </div>

    <!-- Progress Bar -->
    <div class="progress-bar">
      <div class="progress-fill" :style="progressStyle" />
    </div>
  </div>
</template>

<style scoped>
.slider {
  position: relative;
  width: 100%;
  max-width: 500px;
}

.slider-viewport {
  position: relative;
  aspect-ratio: 1;
  overflow: hidden;
  background: #f5f5f5;
}

/* Slides */
.slide {
  position: absolute;
  inset: 0;
  opacity: 0;
  transition: opacity 0.8s ease;
  will-change: opacity;
}

.slide.active {
  opacity: 1;
  z-index: 1;
}

.slide-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* Navigation Buttons */
.nav-btn {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 10;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0.9);
  border: none;
  cursor: pointer;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.slider:hover .nav-btn,
.slider:focus-within .nav-btn {
  opacity: 1;
}

.nav-btn:hover {
  background: #fff;
}

.nav-btn:focus-visible {
  outline: 2px solid #000;
  outline-offset: 2px;
  opacity: 1;
}

.nav-btn:disabled {
  cursor: not-allowed;
  opacity: 0.3;
}

.nav-prev {
  left: 1rem;
}

.nav-next {
  right: 1rem;
}

/* Progress Bar */
.progress-bar {
  width: 100%;
  height: 2px;
  background: #eee;
  margin-top: 1.5rem;
}

.progress-fill {
  height: 100%;
  background: #000;
  transform-origin: left;
  transition: transform 0.5s ease;
}

/* Reduced motion */
@media (prefers-reduced-motion: reduce) {
  .slide {
    transition: opacity 0.1s ease;
  }

  .nav-btn,
  .progress-fill {
    transition: none;
  }
}

/* Print */
@media print {
  .nav-btn,
  .progress-bar {
    display: none;
  }

  .slide {
    position: static;
    opacity: 1;
  }

  .slide:not(:first-child) {
    display: none;
  }
}
</style>
