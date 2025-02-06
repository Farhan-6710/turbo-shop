import { ShoppingCart } from "lucide-react";
import React from "react";
import useCartStore from "@/store/useCartStore"; // Import the Zustand store

const CartButton = () => {
  // Access cart from Zustand store
  const cart = useCartStore((state) => state.cart);

  return (
      <div className="relative hover:text-primary dark:hover:text-primaryhover transition text-blackTwo dark:text-whiteTwo cursor-pointer mr-2">
        <ShoppingCart strokeWidth={2.5} className="h-6 w-6" />
        <span className="absolute flex justify-center items-center -top-3 -right-3 bg-primary text-white text-md w-6 h-6 font-semibold px-1 rounded-full">
          {cart.length} {/* Display the cart length dynamically */}
        </span>
      </div>
  );
};

export default CartButton;
