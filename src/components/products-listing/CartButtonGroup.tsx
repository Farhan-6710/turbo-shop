"use client";

import { Product } from "@/lib/productTypes";
import { Button } from "../ui/button";
import { TransitionLink } from "@/lib/TransitionLink";
import useCartStore from "@/store/useCartStore";
import { FaTrashAlt, FaSpinner } from "react-icons/fa";
import { useEffect, useState } from "react";

interface CartButtonGroupProps {
  isLoading: boolean;
  onAddToCart: () => void;
  onRemoveFromCart: () => void;
  price: string | null;
  product: Product;
  side: "left" | "right";
}

const CartButtonGroup: React.FC<CartButtonGroupProps> = ({
  isLoading,
  onAddToCart,
  onRemoveFromCart,
  price,
  product,
  side,
}) => {
  const [isMounted, setIsMounted] = useState(false); // State to control rendering after mount
  const { isInCart } = useCartStore(); // Zustand store

  // Use Zustand's state to check if the product is in the cart
  const isAddedToCart = isMounted && isInCart(product, side);

  useEffect(() => {
    setIsMounted(true); // Ensure the component is only rendered after mounting
  }, []);

  if (!isMounted) {
    return null; // Avoid hydration mismatch
  }

  return (
    <div className="flex flex-wrap gap-2 items-center">
      <div>
        {!isAddedToCart ? (
          <Button
            variant="default"
            className="items-center gap-2 rounded-lg h-11 text-md lg:text-lg 2xl:h-12 2xl:text-xl w-fit px-6 flex bg-primary text-white"
            disabled={!price || isLoading}
            onClick={onAddToCart}
          >
            {isLoading ? (
              <FaSpinner className="animate-spin" /> // Loader icon
            ) : (
              "Add to Cart"
            )}
          </Button>
        ) : (
          <TransitionLink href="/my-cart">
            <Button className="flex items-center gap-2 rounded-lg h-11 text-md lg:text-lg 2xl:h-12 2xl:text-xl w-fit px-6 bg-whiteOne dark:bg-blackOne border border-gray-300 dark:border-stone-800 shadow-none duration-200 hover:bg-blackTwo dark:hover:bg-blackTwo hover:text-white text-green-500">
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
            disabled={isLoading}
            onClick={onRemoveFromCart}
          >
            {isLoading ? (
              <FaSpinner className="animate-spin" /> // Loader icon
            ) : (
              <FaTrashAlt size={20} />
            )}
          </Button>
        )}
      </div>
    </div>
  );
};

export default CartButtonGroup;
