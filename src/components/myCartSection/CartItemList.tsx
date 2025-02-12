"use client"

import React, { useState, useEffect } from "react";
import CartItem from "./CartItem";
import useCurrencyStore from "@/store/useCurrencyStore";
import useCartStore from "@/store/useCartStore"; // Import your cart store
import { Skeleton } from "../ui/skeleton";

const CartItemList: React.FC = () => {
  const { currency } = useCurrencyStore(); // Get the currency from currency store
  const { cart } = useCartStore(); // Get cart and calculateTotalPrice from the cart store

  const [isMounted, setIsMounted] = useState(false); // Track if component is mounted

  useEffect(() => {
    // Set isMounted to true once the component is mounted
    setIsMounted(true);
  }, []);

  // Add a fallback to ensure cartItems is always an array
  if (!Array.isArray(cart)) {
    console.error("cartItems is not an array:", cart);
    return <div>No items in the cart</div>; // Fallback if cart is not an array
  }

  // Only render the component after it's mounted to avoid SSR mismatches
  if (!isMounted) {
    return (
      <div>
        <Skeleton className="h-40 w-full" />
      </div>
    ); // Or return a loading spinner or placeholder if you prefer
  }

  return (
    <>
      {cart.length === 0 ? (
        <div className="py-14 text-2xl xs:text-3xl md:text-5xl font-bold flex items-center justify-center h-full text-blackTwo dark:text-whiteOne">
          Your cart is empty
        </div>
      ) : (
        cart.map((cartItem, index) => {
          // Retrieve the product details from the item
          const product = cartItem.product;

          // Ensure prices are available in the correct currency
          const prices =
            product.prices[currency.toLowerCase() as "usd" | "cad"];

          // Determine the side (left or right) for the current item
          const sideLabel =
            cartItem.part === "left"
              ? "OEM Left Part Number : "
              : "OEM Right Part Number : ";

          return (
            <CartItem
              key={index}
              cartItem={cartItem}
              prices={prices}
              sideLabel={sideLabel} // Pass the side label ("Left Part" or "Right Part")
            />
          );
        })
      )}
    </>
  );
};

export default CartItemList;
