"use client";

import React, { useState, useEffect } from "react";
import { Product } from "@/lib/productTypes";
import useCartStore from "@/store/useCartStore"; // Import your store
import CartButtonGroup from "./CartButtonGroup";

interface LeftPricingSectionProps {
  prices: {
    leftCurrent: string;
    leftOriginal: string;
  };
  product: Product;
}

const LeftPricingSection: React.FC<LeftPricingSectionProps> = ({
  prices,
  product,
}) => {
  const { addToCart, removeFromCart } = useCartStore(); // Access the store functions
  const [isMounted, setIsMounted] = useState(false); // State to control rendering after mount
  const [isLoading, setIsLoading] = useState(false); // State to track loading state
  const side = "left"; // Define the side of the product

  useEffect(() => {
    setIsMounted(true); // Set isMounted to true after component mounts
  }, []);

  const handleAddToCart = () => {
    setIsLoading(true); // Start loading
    setTimeout(() => {
      addToCart(product, side); // Add product to cart in the global store
      setIsLoading(false); // Stop loading
    }, 500); // Simulate a 1-second delay
  };

  const handleRemoveFromCart = () => {
    setIsLoading(true); // Start loading
    setTimeout(() => {
      removeFromCart(product, side); // Remove product from cart
      setIsLoading(false); // Stop loading
    }, 500); // Simulate a 1-second delay
  };

  // Don't render content until after the component has mounted
  if (!isMounted) {
    return null; // You can render a loading indicator here if needed
  }

  return (
    <div className="p-4 w-full bg-whiteTwo dark:bg-blackTwo border border-gray-200 dark:border-stone-800">
      <p className="text-lg mb-2 font-semibold text-gray-600 dark:text-whiteTwo">
        OEM Left Part :
      </p>
      <div className="flex flex-col justify-between">
        <div className="flex flex-wrap items-center">
          <span className="text-xl font-bold text-blackTwo dark:text-white mr-2">
            {prices.leftCurrent || "N/A"}
          </span>
          <span className="text-sm text-gray-500 dark:text-gray-400 line-through">
            {prices.leftOriginal || "N/A"}
          </span>
        </div>

        <p className="text-xs sm:text-sm mb-4 text-gray-600 dark:text-gray-400">
          OEM Left Part Number : {product.leftPartNumber || "N/A"}
        </p>

        {/* Use CartButtonGroup here */}
        <CartButtonGroup
          isLoading={isLoading}
          onAddToCart={handleAddToCart}
          onRemoveFromCart={handleRemoveFromCart}
          price={prices.leftCurrent}
          side={side}
          product={product}
        />
      </div>
    </div>
  );
};

export default LeftPricingSection;