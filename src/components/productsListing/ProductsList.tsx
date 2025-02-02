import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import { ShoppingCart } from "lucide-react";
import { Product } from "@/lib/productTypes";

interface ProductsListProps {
  productsData: Product[];
}

const ProductsList: React.FC<ProductsListProps> = ({ productsData }) => {
  return (
    <div className="bg-whiteTwo dark:bg-blackTwo">
      <div className="container mx-auto px-4 py-6 sm:py-12">
        {/* Grid layout with responsive breakpoints */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {productsData.map((product) => (
            <div
              key={product.id}
              className="bg-whiteOne dark:bg-blackOne text-white p-4 border border-primary dark:border-primary shadow-xl dark:shadow-dark"
            >
              <div className="relative">
                {/* Aspect Ratio Wrapper (for Image) */}
                <div className="relative flex justify-center items-center aspect-video w-full bg-whiteTwo dark:bg-blackTwo border border-gray-200 dark:border-stone-800">
                  {product.tag ? (
                    <span className="absolute top-3 left-3 z-10 bg-primary text-white text-xs font-bold px-2 py-1 uppercase">
                      {product.tag}
                    </span>
                  ) : (
                    <span className="absolute top-3 left-3 z-10 bg-gray-500 text-white text-xs font-bold px-2 py-1 uppercase">
                      N/A
                    </span>
                  )}
                  <Image
                    src={product.imgPath}
                    alt={product.modelName}
                    width={500}
                    height={350}
                    objectFit="cover"
                    className="rounded-lg w-4/5"
                  />
                </div>
              </div>

              {/* Title */}
              <h3 className="text-blackTwo dark:text-white mt-6 text-xl font-semibold">
                {product.modelName}
              </h3>

              {/* Pricing Section */}
              <div className="mt-6 space-y-4">
                {/* Left Side Pricing */}
                <div className="p-4 bg-whiteTwo dark:bg-blackTwo border border-gray-200 dark:border-stone-800">
                  <p className="text-lg mb-2 font-semibold text-gray-600 dark:text-whiteTwo">
                    OEM Left Part :
                  </p>
                  <div className="flex flex-col justify-between">
                    <div className="flex gap-2 items-center">
                      <span className="text-xl font-bold text-blackTwo dark:text-white">
                        {product.leftUsdPrice ? product.leftUsdPrice : "N/A"}
                      </span>
                      <span className="text-sm text-gray-500 dark:text-gray-400 line-through ml-2">
                        {product.leftUsdOriginalPrice
                          ? product.leftUsdOriginalPrice
                          : "N/A"}
                      </span>
                    </div>

                    <p
                      className="text-xs sm:text-sm mb-4 text-gray-600 dark:text-gray-400"
                      dangerouslySetInnerHTML={{
                        __html: `OEM Left Part Number : ${product.leftPartNumber ? product.leftPartNumber : "N/A"}`,
                      }}
                      
                    />

                    <Button
                      variant="default"
                      className="flex items-center gap-2 rounded-none btn-primary py-6 text-lg w-fit px-8"
                      disabled={!product.leftUsdPrice}
                    >
                      <ShoppingCart strokeWidth={3} size={20} />
                      {product.leftUsdPrice ? "Add to Cart" : "Not Available"}
                    </Button>
                  </div>
                </div>

                {/* Right Side Pricing */}
                <div className="p-4 bg-whiteTwo dark:bg-blackTwo border border-gray-200 dark:border-stone-800">
                  <p className="text-lg mb-2 font-semibold text-gray-600 dark:text-whiteTwo">
                    OEM Right Part :
                  </p>
                  <div className="flex flex-col justify-between">
                    <div className="flex gap-2 items-center">
                      <span className="text-xl font-bold text-blackTwo dark:text-white">
                        {product.rightUsdPrice ? product.rightUsdPrice : "N/A"}
                      </span>
                      <span className="text-sm text-gray-500 dark:text-gray-400 line-through ml-2">
                        {product.rightUsdOriginalPrice
                          ? product.rightUsdOriginalPrice
                          : "N/A"}
                      </span>
                    </div>

                    <p
                      className="text-xs sm:text-sm mb-4 text-gray-600 dark:text-gray-400"
                      dangerouslySetInnerHTML={{
                        __html: `OEM Right Part Number : ${product.rightPartNumber ? product.rightPartNumber : "N/A"}`,
                      }}                      
                    />

                    <Button
                      variant="default"
                      className="flex items-center gap-2 rounded-none btn-primary py-6 text-lg w-fit px-8"
                      disabled={!product.rightUsdPrice}
                    >
                      <ShoppingCart strokeWidth={3} size={20} />
                      {product.rightUsdPrice ? "Add to Cart" : "Not Available"}
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductsList;
