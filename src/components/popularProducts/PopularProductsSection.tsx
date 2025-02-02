"use client"

import React, { useCallback, useEffect } from "react";
import PopularProductsCarousel from "./PopularProductsCarousel";
import useEmblaCarousel from "embla-carousel-react";
import { LucideChevronLeft, LucideChevronRight } from "lucide-react";

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
        <div className="flex gap-4">
          <ul className="flex justify-center items-center gap-4 carousel_arrow text-md">
            <li>
              <button
                className="flex justify-center items-center"
                onClick={scrollPrev}
              >
                <LucideChevronLeft
                  name="ChevronLeft"
                  strokeWidth={2}
                  size={30}
                />
              </button>
            </li>
            <li>
              <button
                className="flex justify-center items-center"
                onClick={scrollNext}
              >
                <LucideChevronRight
                  name="ChevronRight"
                  strokeWidth={2}
                  size={30}
                />
              </button>
            </li>
          </ul>
        </div>
      </div>
      <div>
        <PopularProductsCarousel emblaRef={emblaRef} />
      </div>
    </section>
  );
};

export default PopularProductsSection;
