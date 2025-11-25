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

const plugin = Autoplay({
  delay: 4000,
  stopOnMouseEnter: true,
  stopOnInteraction: false,
});

const slides = [
  { id: 1, src: "/heroSlider/TheFall.avif", alt: "The Fall artwork" },
  { id: 2, src: "/heroSlider/2.avif", alt: "The ing on artwork" },
  { id: 3, src: "/heroSlider/3.avif", alt: "Monsters artwork" },
];
</script>

<template>
  <Carousel
    class="relative w-full h-[50vh] md:h-auto"
    :plugins="[plugin]"
    :opts="{
      loop: true,
    }"
    @mouseenter="plugin.stop"
    @mouseleave="[plugin.reset(), plugin.play()]"
  >
    <CarouselContent class="h-full md:h-auto -ml-4">
      <CarouselItem
        v-for="slide in slides"
        :key="slide.id"
        class="h-full md:h-auto pl-4"
      >
        <div class="p-1 h-full md:h-auto">
          <Card class="h-full md:h-auto">
            <CardContent
              class="flex items-center justify-center h-full md:h-auto p-6 pt-0"
            >
              <img
                :src="slide.src"
                :alt="slide.alt"
                :loading="slide.id === 1 ? 'eager' : 'lazy'"
                :fetchpriority="slide.id === 1 ? 'high' : 'auto'"
                decoding="async"
                sizes="100vw"
                draggable="false"
                class="w-full h-full object-cover select-none animate-ken-burns"
              />
            </CardContent>
          </Card>
        </div>
      </CarouselItem>
    </CarouselContent>
  </Carousel>
</template>

<style scoped>
@keyframes ken-burns {
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(1.15);
  }
}

.animate-ken-burns {
  animation: ken-burns 20s ease-out infinite alternate;
}
</style>
