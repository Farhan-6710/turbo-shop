"use client";

import React, { useEffect, useState } from "react";
import useCartStore from "@/store/useCartStore";
import CartButtonGroup from "./CartButtonGroup"; // Import the reusable component
import { Product } from "@/lib/productTypes";

interface RightPricingSectionProps {
  prices: {
    rightCurrent: string;
    rightOriginal: string;
  };
  product: Product;
}

const RightPricingSection: React.FC<RightPricingSectionProps> = ({
  prices,
  product,
}) => {
  const { addToCart, removeFromCart } = useCartStore(); // Zustand store
  const [isMounted, setIsMounted] = useState(false); // To handle hydration issues
  const [isLoading, setIsLoading] = useState(false); // Local loading state for buttons
  const side = "right"; // Define the side of the product

  useEffect(() => {
    setIsMounted(true); // Ensure the component is only rendered after mounting
  }, []);

  const handleAddToCart = () => {
    setIsLoading(true);
    setTimeout(() => {
      addToCart(product, side);
      setIsLoading(false);
    }, 500); // Simulate loading for 500ms
  };

  const handleRemoveFromCart = () => {
    setIsLoading(true);
    setTimeout(() => {
      removeFromCart(product, side);
      setIsLoading(false);
    }, 500); // Simulate loading for 500ms
  };

  if (!isMounted) {
    return null; // Avoid hydration mismatch
  }

  return (
    <div className="w-full p-4 bg-whiteTwo dark:bg-blackTwo border border-gray-200 dark:border-stone-800">
      <p className="text-lg mb-2 font-semibold text-gray-600 dark:text-whiteTwo">
        OEM Right Part:
      </p>
      <div className="flex flex-col justify-between">
        <div className="flex flex-wrap items-center">
          <span className="text-xl font-bold text-blackTwo dark:text-white mr-2">
            {prices.rightCurrent || "N/A"}
          </span>
          <span className="text-sm text-gray-500 dark:text-gray-400 line-through">
            {prices.rightOriginal || "N/A"}
          </span>
        </div>

        <p className="text-xs sm:text-sm mb-4 text-gray-600 dark:text-gray-400">
          OEM Right Part Number: {product.rightPartNumber || "N/A"}
        </p>

        {/* Use CartButtonGroup here */}
        <CartButtonGroup
          isLoading={isLoading}
          onAddToCart={handleAddToCart}
          onRemoveFromCart={handleRemoveFromCart}
          price={prices.rightCurrent}
          product={product}
          side={side}
        />
      </div>
    </div>
  );
};

export default RightPricingSection;
