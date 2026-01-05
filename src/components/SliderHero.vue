<script setup lang="ts">
import { ref, onMounted, onUnmounted, computed, watch } from "vue";

interface Slide {
  id: number;
  src: string;
  alt: string;
  title?: string;
}

const slides: Slide[] = [
  {
    id: 1,
    src: "/heroSlider/TheFall.avif",
    alt: "The Fall artwork by Fernando Feijoo",
    title: "The Fall",
  },
  {
    id: 2,
    src: "/heroSlider/2.avif",
    alt: "Artwork by Fernando Feijoo",
    title: "Citizens & Wastrels",
  },
  {
    id: 3,
    src: "/heroSlider/3.avif",
    alt: "Monsters artwork by Fernando Feijoo",
    title: "Monsters",
  },
];

const currentIndex = ref(0);
const isTransitioning = ref(false);
const progress = ref(0);

const AUTOPLAY_DELAY = 6000;
const TRANSITION_DURATION = 800;

let autoplayInterval: ReturnType<typeof setInterval> | null = null;
let progressStart = 0;

const nextSlide = () => {
  if (isTransitioning.value) return;
  isTransitioning.value = true;
  currentIndex.value = (currentIndex.value + 1) % slides.length;
  progress.value = 0;
  progressStart = Date.now();
  setTimeout(() => {
    isTransitioning.value = false;
  }, TRANSITION_DURATION);
};

const prevSlide = () => {
  if (isTransitioning.value) return;
  isTransitioning.value = true;
  currentIndex.value = (currentIndex.value - 1 + slides.length) % slides.length;
  progress.value = 0;
  progressStart = Date.now();
  setTimeout(() => {
    isTransitioning.value = false;
  }, TRANSITION_DURATION);
};

const goToSlide = (index: number) => {
  if (isTransitioning.value || index === currentIndex.value) return;
  isTransitioning.value = true;
  currentIndex.value = index;
  progress.value = 0;
  progressStart = Date.now();
  setTimeout(() => {
    isTransitioning.value = false;
  }, TRANSITION_DURATION);
};

const startAutoplay = () => {
  if (autoplayInterval) return;
  progressStart = Date.now();

  autoplayInterval = setInterval(() => {
    const elapsed = Date.now() - progressStart;
    progress.value = Math.min((elapsed / AUTOPLAY_DELAY) * 100, 100);

    if (elapsed >= AUTOPLAY_DELAY) {
      nextSlide();
    }
  }, 50);
};

const stopAutoplay = () => {
  if (autoplayInterval) {
    clearInterval(autoplayInterval);
    autoplayInterval = null;
  }
};

// Keyboard navigation
const handleKeydown = (e: KeyboardEvent) => {
  if (e.key === "ArrowLeft") prevSlide();
  if (e.key === "ArrowRight") nextSlide();
};

// Touch/swipe support
let touchStartX = 0;

const handleTouchStart = (e: TouchEvent) => {
  touchStartX = e.changedTouches[0].screenX;
};

const handleTouchEnd = (e: TouchEvent) => {
  const touchEndX = e.changedTouches[0].screenX;
  const diff = touchStartX - touchEndX;
  if (Math.abs(diff) > 50) {
    if (diff > 0) nextSlide();
    else prevSlide();
  }
};

onMounted(() => {
  startAutoplay();
  window.addEventListener("keydown", handleKeydown);
});

onUnmounted(() => {
  stopAutoplay();
  window.removeEventListener("keydown", handleKeydown);
});

const slideCounter = computed(() => ({
  current: String(currentIndex.value + 1).padStart(2, "0"),
  total: String(slides.length).padStart(2, "0"),
}));
</script>

<template>
  <div
    class="hero-slider"
    @touchstart.passive="handleTouchStart"
    @touchend.passive="handleTouchEnd"
    role="region"
    aria-roledescription="carousel"
    aria-label="Featured artworks"
  >
    <!-- Slides -->
    <div class="slides-container">
      <div
        v-for="(slide, index) in slides"
        :key="slide.id"
        class="slide"
        :class="{ active: index === currentIndex }"
        role="group"
        :aria-roledescription="'slide'"
        :aria-label="`${index + 1} of ${slides.length}: ${slide.title || slide.alt}`"
        :aria-hidden="index !== currentIndex"
      >
        <img
          :src="slide.src"
          :alt="slide.alt"
          class="slide-image"
          :loading="index === 0 ? 'eager' : 'lazy'"
          :fetchpriority="index === 0 ? 'high' : 'auto'"
          decoding="async"
          draggable="false"
        />
      </div>
    </div>

    <!-- Gradient Overlay -->
    <div class="gradient-overlay"></div>

    <!-- Navigation Arrows -->
    <button
      class="nav-arrow nav-prev"
      @click="prevSlide"
      aria-label="Previous slide"
      :disabled="isTransitioning"
    >
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <path
          d="M15 18l-6-6 6-6"
          stroke="currentColor"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </button>

    <button
      class="nav-arrow nav-next"
      @click="nextSlide"
      aria-label="Next slide"
      :disabled="isTransitioning"
    >
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <path
          d="M9 18l6-6-6-6"
          stroke="currentColor"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </button>

    <!-- Bottom Controls -->
    <div class="controls">
      <!-- Counter -->
      <div class="counter" aria-live="polite">
        <span class="counter-current">{{ slideCounter.current }}</span>
        <span class="counter-divider">—</span>
        <span class="counter-total">{{ slideCounter.total }}</span>
      </div>

      <!-- Progress Indicators -->
      <div class="indicators">
        <button
          v-for="(slide, index) in slides"
          :key="slide.id"
          class="indicator"
          :class="{ active: index === currentIndex }"
          @click="goToSlide(index)"
          :aria-label="`Go to slide ${index + 1}: ${slide.title}`"
          :aria-current="index === currentIndex ? 'true' : undefined"
        >
          <span class="indicator-bg"></span>
          <span
            v-if="index === currentIndex"
            class="indicator-progress"
            :style="{ width: `${progress}%` }"
          ></span>
        </button>
      </div>

      <!-- Slide Title -->
      <div class="slide-title">
        <span class="title-text">{{ slides[currentIndex].title }}</span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.hero-slider {
  position: relative;
  width: 100%;
  height: 65vh;
  min-height: 450px;
  max-height: 850px;
  overflow: hidden;
  background: #0a0a0a;
}

/* Slides */
.slides-container {
  position: relative;
  width: 100%;
  height: 100%;
}

.slide {
  position: absolute;
  inset: 0;
  opacity: 0;
  visibility: hidden;
  transition:
    opacity 0.8s ease,
    visibility 0.8s ease;
}

.slide.active {
  opacity: 1;
  visibility: visible;
  z-index: 1;
}

.slide-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  user-select: none;
}

.slide.active .slide-image {
  animation: subtle-zoom 7s ease-out forwards;
}

@keyframes subtle-zoom {
  from {
    transform: scale(1);
  }
  to {
    transform: scale(1.04);
  }
}

/* Gradient Overlay */
.gradient-overlay {
  position: absolute;
  inset: 0;
  z-index: 2;
  pointer-events: none;
  background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.15) 0%,
      transparent 30%
    ),
    linear-gradient(to top, rgba(0, 0, 0, 0.6) 0%, transparent 40%);
}

/* Navigation Arrows */
.nav-arrow {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 10;
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 50%;
  color: rgba(255, 255, 255, 0.9);
  cursor: pointer;
  opacity: 0;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.hero-slider:hover .nav-arrow {
  opacity: 1;
}

.nav-arrow:hover {
  background: rgba(255, 255, 255, 0.15);
  border-color: rgba(255, 255, 255, 0.2);
  transform: translateY(-50%) scale(1.08);
}

.nav-arrow:active {
  transform: translateY(-50%) scale(0.95);
}

.nav-arrow:disabled {
  opacity: 0.2;
  cursor: not-allowed;
}

.nav-prev {
  left: 1.25rem;
}

.nav-next {
  right: 1.25rem;
}

/* Controls */
.controls {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.5rem;
  gap: 1rem;
}

/* Counter */
.counter {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-variant-numeric: tabular-nums;
  color: rgba(255, 255, 255, 0.9);
  min-width: 70px;
}

.counter-current {
  font-size: 1rem;
  font-weight: 500;
  letter-spacing: 0.02em;
}

.counter-divider {
  font-size: 0.75rem;
  opacity: 0.4;
}

.counter-total {
  font-size: 0.8125rem;
  opacity: 0.5;
}

/* Indicators */
.indicators {
  display: flex;
  gap: 0.375rem;
  flex: 1;
  justify-content: center;
  max-width: 200px;
}

.indicator {
  position: relative;
  height: 3px;
  flex: 1;
  max-width: 50px;
  background: transparent;
  border: none;
  padding: 8px 0;
  cursor: pointer;
  overflow: hidden;
}

.indicator-bg {
  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  height: 3px;
  background: rgba(255, 255, 255, 0.25);
  border-radius: 2px;
  transition: background 0.3s ease;
}

.indicator:hover .indicator-bg {
  background: rgba(255, 255, 255, 0.4);
}

.indicator.active .indicator-bg {
  background: rgba(255, 255, 255, 0.3);
}

.indicator-progress {
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  height: 3px;
  background: #fff;
  border-radius: 2px;
  transition: width 0.05s linear;
}

/* Slide Title */
.slide-title {
  min-width: 70px;
  text-align: right;
}

.title-text {
  font-size: 0.75rem;
  font-weight: 500;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.7);
}

/* Responsive */
@media (min-width: 640px) {
  .hero-slider {
    height: 72vh;
  }

  .controls {
    padding: 2rem;
  }

  .indicators {
    max-width: 240px;
  }
}

@media (min-width: 768px) {
  .hero-slider {
    height: 78vh;
  }

  .nav-arrow {
    width: 52px;
    height: 52px;
  }

  .nav-prev {
    left: 2rem;
  }

  .nav-next {
    right: 2rem;
  }

  .controls {
    padding: 2rem 3rem;
  }

  .counter-current {
    font-size: 1.125rem;
  }

  .title-text {
    font-size: 0.8125rem;
  }
}

@media (min-width: 1024px) {
  .hero-slider {
    height: 85vh;
  }

  .indicators {
    max-width: 280px;
    gap: 0.5rem;
  }

  .indicator {
    max-width: 60px;
  }
}

/* Reduced motion */
@media (prefers-reduced-motion: reduce) {
  .slide {
    transition: opacity 0.3s ease;
  }

  .slide.active .slide-image {
    animation: none;
  }

  .nav-arrow {
    transition:
      opacity 0.2s ease,
      background 0.2s ease;
  }

  .indicator-progress {
    transition: none;
  }
}

/* Touch devices */
@media (hover: none) {
  .nav-arrow {
    opacity: 0.9;
    width: 44px;
    height: 44px;
  }

  .nav-prev {
    left: 0.75rem;
  }

  .nav-next {
    right: 0.75rem;
  }
}
</style>
