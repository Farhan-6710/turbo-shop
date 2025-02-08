"use client";

import React, { useState, useEffect } from "react";
import { Button } from "../ui/button";
import { Product } from "@/lib/productTypes";
import useCartStore from "@/store/useCartStore"; // Import your store
import { TransitionLink } from "@/lib/TransitionLink";
import { FaTrashAlt } from "react-icons/fa";

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
  const { addToCart, removeFromCart, isInCart } = useCartStore(); // Access the store functions
  const [isMounted, setIsMounted] = useState(false); // State to control rendering after mount
  const [isAddedToCart, setIsAddedToCart] = useState(false); // Local state to track if item is added to the cart

  useEffect(() => {
    setIsMounted(true); // Set isMounted to true after component mounts
  }, []);

  useEffect(() => {
    // Check if the product is in the cart and update local state accordingly
    setIsAddedToCart(isInCart(product, "left")); // Use both id and modelName in the check
  }, [product.id, product.modelName, isInCart]); // Re-run this effect whenever the product changes

  const handleAddToCart = () => {
    addToCart(product, "left"); // Add product to cart in the global store
    setIsAddedToCart(true); // Update local state to show "Added to Cart"
  };

  const handleRemoveFromCart = () => {
    removeFromCart(product, "left"); // Remove product from cart
    setIsAddedToCart(false); // Update local state to reflect the removal
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

        <div className="flex flex-wrap gap-2 items-center">
          <div>
            {!isAddedToCart ? (
              <Button
                variant="default"
                className={`items-center gap-2 rounded-lg h-11 text-md lg:text-lg 2xl:h-12 2xl:text-xl w-fit px-6 ${
                  isAddedToCart ? "hidden" : "flex bg-primary text-white"
                }`}
                disabled={!prices.leftCurrent}
                onClick={handleAddToCart} // Only add to cart when clicked
              >
                Add to Cart
              </Button>
            ) : (
              <TransitionLink href="/my-cart">
                <Button
                  className={`flex items-center gap-2 rounded-lg h-11 text-md lg:text-lg 2xl:h-12 2xl:text-xl w-fit px-6 bg-whiteOne dark:bg-blackOne border border-gray-300 dark:border-stone-800 shadow-none duration-200 ${
                    isAddedToCart
                      ? "flex hover:bg-blackTwo dark:hover:bg-blackTwo hover:text-white text-green-500"
                      : "hidden"
                  }`}
                >
                  Added To Cart
                </Button>
              </TransitionLink>
            )}
          </div>

          <div>
            {/* Conditionally render the "Remove from Cart" button if the product is in the cart */}
            {isAddedToCart && (
              <Button
                variant="default"
                className="flex items-center justify-center w-12 h-11 bg-red-500 border-gray-300 dark:border-stone-800 text-white hover:bg-whiteOne dark:hover:bg-blackOne hover:text-red-500 duration-200 shadow-none"
                onClick={handleRemoveFromCart} // Handle removing the product from the cart
              >
                <FaTrashAlt size={20} />
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftPricingSection;
