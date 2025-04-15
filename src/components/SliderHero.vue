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
</script>

<template>
  <Carousel
    class="relative w-full"
    :plugins="[plugin]"
    @mouseenter="plugin.stop"
    @mouseleave="[plugin.reset(), plugin.play(), console.log('Running')]"
  >
    <CarouselContent>
      <CarouselItem :key="index">
        <div class="p-1">
          <Card>
            <CardContent class="flex items-center justify-center">
              <img src="/heroSlider/TheFall.avif" />
            </CardContent>
          </Card>
        </div>
      </CarouselItem>

      <CarouselItem :key="index">
        <div class="p-1">
          <Card>
            <CardContent class="flex items-center justify-center">
              <img src="/heroSlider/2.avif" />
            </CardContent>
          </Card>
        </div>
      </CarouselItem>

      <CarouselItem :key="index">
        <div class="p-1">
          <Card>
            <CardContent class="flex items-center justify-center">
              <img src="/heroSlider/3.avif" />
            </CardContent>
          </Card>
        </div>
      </CarouselItem>
    </CarouselContent>
  </Carousel>
</template>
