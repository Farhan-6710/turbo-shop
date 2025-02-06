import Image from "next/image";
import { PopularProductsData } from "@/data/products-data/PopularProducts";
import { ForwardedRef, } from "react";
import useCurrencyStore from "@/store/useCurrencyStore";
import PopularProductsActions from "./PopularProductsActions";

interface PopularProductsCarouselProps {
  emblaRef: ForwardedRef<HTMLDivElement>; // Ref for Embla instance
}

const PopularProductsCarousel: React.FC<PopularProductsCarouselProps> = ({
  emblaRef,
}) => {

  const { currency } = useCurrencyStore(); // Get currency from store


  return (
    <div className="container mx-auto">
      <div className="embla overflow-hidden relative" ref={emblaRef}>
        <div className="embla__container container flex pt-6">
          {PopularProductsData.map((product) => {
            // Dynamically select the prices based on the currency
            const prices = product.prices[currency.toLowerCase() as "usd" | "cad"];
            
            return (
            <div
              className="p-2 flex-none w-full sm:w-1/2 lg:w-1/3 xl:w-1/4"
              key={product.id}
            >
              <div className="p-4 bg-whiteOne dark:bg-blackOne text-white border border-gray-300 dark:border-stone-800">
                <div className="relative">
                  {product.tag && (
                    <span className="absolute top-3 left-3 z-10 bg-primary text-white text-xs font-bold px-2 py-1">
                      {product.tag}
                    </span>
                  )}
                  <div className="relative h-64 w-full flex items-center justify-center bg-whiteTwo dark:bg-blackTwo">
                    <Image
                      src={product.imgPath}
                      alt={product.modelName}
                      width={800}
                      height={500}
                      className="w-full max-w-2xl"
                    />
                  </div>
                </div>
                <h3 className="text-blackTwo dark:text-white mt-6 text-xl 2xl:text-2xl font-semibold">
                  {product.modelName}
                </h3>
                <div className="flex flex-col gap-4 justify-between py-2">
                  <div className="flex items-center">
                    <span className="text-blackTwo dark:text-white text-lg font-bold">
                      {prices.leftCurrent}
                    </span>
                    <span className="text-sm text-gray-500 dark:text-gray-400 line-through ml-2">
                      {prices.leftOriginal}
                    </span>
                  </div>
                  <PopularProductsActions
                    product={product}
                    prices={prices} />
                </div>
              </div>
            </div>
          )})}
        </div>
      </div>
    </div>
  );
};

export default PopularProductsCarousel;
