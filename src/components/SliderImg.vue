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
  delay: 2000,
  stopOnMouseEnter: true,
  stopOnInteraction: false,
});
</script>

<template>
  <Carousel
    class="relative w-full max-w-[500px]"
    :plugins="[plugin]"
    @mouseenter="plugin.stop"
    @mouseleave="[plugin.reset(), plugin.play()]"
  >
    <CarouselContent>
      <CarouselItem>
        <div class="p-1">
          <Card>
            <CardContent
              class="flex aspect-square items-center justify-center p-0 overflow-hidden"
            >
              <img
                src="/profile/studio.avif"
                alt="Fernando Feijoo in his studio workspace"
                class="w-full h-full object-cover"
                loading="lazy"
                decoding="async"
              />
            </CardContent>
          </Card>
        </div>
      </CarouselItem>
      <CarouselItem>
        <div class="p-1">
          <Card>
            <CardContent
              class="flex aspect-square items-center justify-center p-0 overflow-hidden"
            >
              <img
                src="/profile/columbian.avif"
                alt="Fernando Feijoo working with Columbian printing press"
                class="w-full h-full object-cover"
                loading="lazy"
                decoding="async"
              />
            </CardContent>
          </Card>
        </div>
      </CarouselItem>
      <CarouselItem>
        <div class="p-1">
          <Card>
            <CardContent
              class="flex aspect-square items-center justify-center p-0 overflow-hidden"
            >
              <img
                src="/profile/printing.avif"
                alt="Fernando Feijoo during the printing process"
                class="w-full h-full object-cover"
                loading="lazy"
                decoding="async"
              />
            </CardContent>
          </Card>
        </div>
      </CarouselItem>
      <CarouselItem>
        <div class="p-1">
          <Card>
            <CardContent
              class="flex aspect-square items-center justify-center p-0 overflow-hidden"
            >
              <img
                src="/profile/working.avif"
                alt="Fernando Feijoo working on an art piece"
                class="w-full h-full object-cover"
                loading="lazy"
                decoding="async"
              />
            </CardContent>
          </Card>
        </div>
      </CarouselItem>
    </CarouselContent>
  </Carousel>
</template>
