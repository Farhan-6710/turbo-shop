"use client";

import React, { useCallback, useEffect, useState } from "react";
import PopularProductsCarousel from "./PopularProductsCarousel";
import useEmblaCarousel from "embla-carousel-react";
import PopularProductsNavigation from "./PopularProductsNavigation";

const PopularProductsSection = () => {
  // Mount state to track if the component is mounted
  const [isMounted, setIsMounted] = useState(false);
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

  useEffect(() => {
    // Set isMounted to true once the component is mounted
    setIsMounted(true);
  }, []);

  // Render nothing or a fallback (like a loader) before mounting
  if (!isMounted) {
    return null; // Or you can return a loader like <div>Loading...</div>
  }

  return (
    <section className="bg-whiteTwo dark:bg-blackTwo mx-auto py-10 sm:py-16 pt-12 px-4 border-t border-gray-200 dark:border-stone-800">
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
