// OrderSummaryHeader.tsx
"use client";

import React, { useState, useEffect } from "react";
import useCurrencyStore from "@/store/useCurrencyStore";
import { Skeleton } from "../ui/skeleton";
import useCartStore from "@/store/useCartStore"; // Import the cart store

interface OrderSummaryHeaderProps {
  isCouponApplied: boolean;
}

const OrderSummaryHeader: React.FC<OrderSummaryHeaderProps> = ({ isCouponApplied }) => {
  const { currency } = useCurrencyStore(); // Get the currency from currency store
  const cart = useCartStore((state) => state.cart); // Access the cart state directly
  const getProductQuantity = useCartStore((state) => state.getProductQuantity); // Access the quantity function

  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const parsePrice = (priceString: string): number => {
    return parseFloat(priceString.replace(/[^0-9.-]+/g, "")); // Convert price string to number
  };

  // Calculate subtotal based on the current cart
  const getSubtotal = (): number => {
    return cart.reduce((total: number, item) => {
      const priceObject = item.product.prices[currency.toLowerCase() as "usd" | "cad"];
      const priceString = item.part === "left" ? priceObject.leftCurrent : priceObject.rightCurrent;
      const price = parsePrice(priceString);
      const quantity = getProductQuantity(item.product, item.part); // Get the quantity of the item
      return total + price * quantity; // Multiply price by quantity
    }, 0);
  };

  const deliveryCharge = cart.length === 0 ? 0.00 : (currency === "CAD" ? 8.00 : 5.00); // Set delivery charge to 0 if cart is empty

  const subTotal = getSubtotal();
  const SubTotal = subTotal + deliveryCharge;
  const discount = isCouponApplied ? subTotal * 0.1 : 0;  // Apply discount on the subtotal

  if (!isLoaded) {
    return (
      <div>
        <Skeleton className="mb-2 h-10 w-full" />
        <Skeleton className="mb-2 h-10 w-full" />
        <Skeleton className="mb-2 h-10 w-full" />
      </div>
    );
  }

  return (
    <>
      <h2 className="text-lg font-bold mb-4 dark:text-gray-200 text-gray-800">
        Order Summary
      </h2>
      <div className="flex justify-between mb-2">
        <p className="font-medium dark:text-gray-300 text-gray-700">
          Cart Value:
        </p>
        <p className="font-medium dark:text-gray-300 text-gray-700">
          ${subTotal.toFixed(2)} {currency}
        </p>
      </div>
      <div className="flex justify-between mb-2">
        <p className="font-medium dark:text-gray-300 text-gray-700">
          Delivery:
        </p>
        <p className="font-medium dark:text-gray-300 text-gray-700">
          ${deliveryCharge.toFixed(2)} {currency}
        </p>
      </div>
      <div className="flex justify-between mb-2 font-bold dark:text-gray-300 text-gray-900">
        <p>Sub Total:</p>
        <p>
          ${SubTotal.toFixed(2)} {currency}
        </p>
      </div>
      {isCouponApplied && discount > 0 && (
        <div className="flex justify-between mb-2 font-medium dark:text-green-400 text-green-600">
          <p>Discount (10% off):</p>
          <p>
            −${discount.toFixed(2)} {currency}
          </p>
        </div>
      )}
    </>
  );
};

export default OrderSummaryHeader;
