import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";
import Image from "next/image";
import { PopularProductsData } from "@/data/PopularProducts";
import { ForwardedRef } from "react";

interface PopularProductsCarouselProps {
    emblaRef: ForwardedRef<HTMLDivElement>; // Ref for Embla instance
  }

const PopularProductsCarousel: React.FC<PopularProductsCarouselProps> = ({ emblaRef }) => {
  return (
    <div className="container mx-auto">
      <div className="embla overflow-hidden relative" ref={emblaRef}>
        <div className="embla__container container flex pt-6">
          {PopularProductsData.map((product) => (
            <div className="p-2 flex-none w-full sm:w-1/2 lg:w-1/3 xl:w-1/4" key={product.id}>
              <div className="p-4 bg-whiteOne dark:bg-blackOne text-white border border-gray-300 dark:border-stone-800">
                <div className="relative">
                  {product.tag && (
                    <span className="absolute top-3 left-3 z-10 bg-primary text-white text-xs font-bold px-2 py-1">
                      {product.tag}
                    </span>
                  )}
                  <div className="relative h-64 w-full flex items-center justify-center bg-whiteTwo dark:bg-blackTwo">
                  <Image
                    src={product.image}
                    alt={product.title}
                    width={500}
                    height={200}
                    className="object-cover "
                  />
                  </div>
                </div>
                <h3 className="text-blackTwo dark:text-white mt-6 text-xl 2xl:text-2xl font-semibold">
                  {product.title}
                </h3>
                <div className="flex flex-col gap-4 justify-between py-2">
                  <div className="flex gap-2 items-center">
                  <span className="text-blackTwo dark:text-white text-lg font-bold">
                    {product.price}
                  </span>
                  <span className="text-sm text-gray-500 dark:text-gray-400 line-through ml-2">
                    {product.originalPrice}
                  </span>
                  </div>
                  <Button
                    variant="default"
                    className="flex items-center text-lg gap-2 rounded-none btn-primary px-8 py-6 w-fit"
                  >
                    <ShoppingCart size={16} strokeWidth={3} />
                    Add to Cart
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PopularProductsCarousel;
