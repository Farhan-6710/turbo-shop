"use client";

import React, { useCallback, useEffect } from "react";
import PopularProductsCarousel from "./PopularProductsCarousel";
import useEmblaCarousel from "embla-carousel-react";
import PopularProductsNavigation from "./PopularProductsNavigation";

const PopularProductsSection = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
    skipSnaps: false,
    dragFree: false,
  });

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  // Autoplay functionality
  useEffect(() => {
    if (!emblaApi) return;
    const autoplay = setInterval(() => emblaApi.scrollNext(), 3000);
    return () => clearInterval(autoplay);
  }, [emblaApi]);

  return (
    <section className="bg-whiteTwo dark:bg-blackTwo mx-auto py-10 sm:py-16 pt-12 px-4">
      <div className="container mx-auto flex justify-between items-center px-2">
        <h2 className="text-blackTwo dark:text-white text-4xl uppercase font-bold">
          Popular Products
        </h2>
        <div className="hidden sm:flex">
          <PopularProductsNavigation  scrollPrev={scrollPrev} scrollNext={scrollNext} />
        </div>
      </div>
      <div>
        <PopularProductsCarousel emblaRef={emblaRef} />
      </div>
      <div className="flex sm:hidden justify-center items-center pt-6">
        <PopularProductsNavigation scrollPrev={scrollPrev} scrollNext={scrollNext} />
      </div>
    </section>
  );
};

export default PopularProductsSection;
