"use client";

import React from "react";
import { Product } from "@/lib/productTypes";
import Link from "next/link";
import useCurrencyStore from "@/store/useCurrencyStore";
import LeftPricingSection from "./LeftPricingSection";
import RightPricingSection from "./RightPricingSection";
import Image from "next/image";

interface ProductsListProps {
  productsData: Product[];
}

const ProductsList: React.FC<ProductsListProps> = ({ productsData }) => {
  const { currency } = useCurrencyStore();

  return (
      <div className="container mx-auto px-4">
        {/* Grid layout with responsive breakpoints */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {productsData.map((product) => {
            // Dynamically select the prices based on the currency
            const prices =
              product.prices[currency.toLowerCase() as "usd" | "cad"];
            const brandLowerCase = (product.brand ?? "").toLowerCase();

            // Prevent navigation when "Add to Cart" is clicked
            const handleLinkClick = (
              e: React.MouseEvent<HTMLAnchorElement>
            ) => {
              // You can check for the button click here to prevent routing
              if ((e.target as HTMLElement).closest("button")) {
                e.preventDefault(); // Prevent navigation if Add to Cart is clicked
              }
            };

            return (
              <div
                key={product.id}
                className="bg-whiteOne dark:bg-blackOne text-white p-4 border border-primary dark:border-primary shadow-xl dark:shadow-dark"
              >
                <div className="relative">
                  <Link
                    href={`/${brandLowerCase}-products/${product.id}`}
                    onClick={handleLinkClick}
                  >
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
                        src={
                          Array.isArray(product.imgPath)
                            ? product.imgPath[0]
                            : product.imgPath
                        }
                        alt={product.modelName}
                        width={500}
                        height={350}
                        className="w-full max-w-2xl"
                        priority
                      />
                    </div>
                  </Link>
                </div>

                {/* Title */}
                <Link
                  href={`/${brandLowerCase}-products/${product.id}`}
                  onClick={handleLinkClick}
                >
                  <h3 className="text-blackTwo dark:text-white mt-6 text-xl font-semibold">
                    {product.modelName}
                  </h3>
                </Link>

                {/* Pricing Section */}
                <div className="mt-6 space-y-4">
                  {/* Left Side Pricing */}
                  <LeftPricingSection prices={prices} product={product} />

                  {/* Right Side Pricing */}
                  <RightPricingSection prices={prices} product={product} />
                </div>
              </div>
            );
          })}
        </div>
      </div>
  );
};

export default ProductsList;
