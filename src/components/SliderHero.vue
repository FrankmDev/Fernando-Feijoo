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
    class="relative w-full"
    :plugins="[plugin]"
    @mouseenter="plugin.stop"
    @mouseleave="[plugin.reset(), plugin.play()]"
  >
    <CarouselContent>
      <CarouselItem v-for="slide in slides" :key="slide.id">
        <div class="p-1">
          <Card>
            <CardContent class="flex items-center justify-center">
              <img
                :src="slide.src"
                :alt="slide.alt"
                :loading="slide.id === 1 ? 'eager' : 'lazy'"
                :fetchpriority="slide.id === 1 ? 'high' : 'auto'"
                decoding="async"
                sizes="100vw"
                class="w-full h-auto object-cover"
              />
            </CardContent>
          </Card>
        </div>
      </CarouselItem>
    </CarouselContent>
  </Carousel>
</template>
