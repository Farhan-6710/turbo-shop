"use client";

import React, { useState, useEffect } from "react";
import { Button } from "../ui/button";
import { Product } from "@/lib/productTypes";
import useCartStore from "@/store/useCartStore";
import { TransitionLink } from "@/lib/TransitionLink";
import { FaTrashAlt } from "react-icons/fa";

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
  const { addToCart, removeFromCart, isInCart } = useCartStore();
  const [isMounted, setIsMounted] = useState(false);
  const [isAddedToCart, setIsAddedToCart] = useState(false);

  useEffect(() => {
    setIsMounted(true); // Ensure the component is only rendered after mounting
  }, []);

  useEffect(() => {
    if (isMounted) {
      // Only check if the product is in the cart after the component mounts
      setIsAddedToCart(isInCart(product, "right"));
    }
  }, [product.id, product.modelName, isInCart, isMounted]);

  const handleAddToCart = () => {
    addToCart(product, "right");
    setIsAddedToCart(true);
  };

  const handleRemoveFromCart = () => {
    removeFromCart(product, "right");
    setIsAddedToCart(false);
  };

  // Prevent rendering until mounted on the client side
  if (!isMounted) {
    return null; // You can show a loading spinner or placeholder here if needed
  }

  return (
    <div className="w-full p-4 bg-whiteTwo dark:bg-blackTwo border border-gray-200 dark:border-stone-800">
      <p className="text-lg mb-2 font-semibold text-gray-600 dark:text-whiteTwo">
        OEM Right Part :
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
          OEM Right Part Number : {product.rightPartNumber || "N/A"}
        </p>

        <div className="flex flex-wrap gap-2 items-center">
          <div>
            {!isAddedToCart ? (
              <Button
                variant="default"
                className={`items-center gap-2 rounded-lg h-11 text-md lg:text-lg 2xl:h-12 2xl:text-xl w-fit px-6 border order border-transparent dark:border-transparent ${
                  isAddedToCart ? "hidden" : "flex bg-primary text-white"
                }`}
                disabled={!prices.rightCurrent}
                onClick={handleAddToCart}
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
            {isAddedToCart && (
              <Button
                variant="default"
                className="flex items-center justify-center w-12 h-11 bg-red-500 border-gray-300 dark:border-stone-800 text-white hover:bg-whiteOne dark:hover:bg-blackOne hover:text-red-500 duration-200 shadow-none"
                onClick={handleRemoveFromCart}
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

export default RightPricingSection;
