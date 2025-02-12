// CouponSection.tsx
"use client";

import React, { useState, useEffect } from "react";
import useCurrencyStore from "@/store/useCurrencyStore";
import { Skeleton } from "../ui/skeleton";
import useCartStore from "@/store/useCartStore"; // Import the cart store

interface CouponSectionProps {
  isCouponApplied: boolean;
  couponCode: string;
  setCouponCode: React.Dispatch<React.SetStateAction<string>>;
  handleCouponApply: () => void;
}

const CouponSection: React.FC<CouponSectionProps> = ({
  isCouponApplied,
  couponCode,
  setCouponCode,
  handleCouponApply,
}) => {
  const { currency } = useCurrencyStore(); // Get the currency from currency store
  const cart = useCartStore((state) => state.cart);
  const getProductQuantity = useCartStore((state) => state.getProductQuantity); // Access the quantity function

  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return (
      <div>
        <Skeleton className="mb-2 h-16 w-full" />
        <Skeleton className="mb-2 h-16 w-full" />
      </div>
    );
  }

  const parsePrice = (priceString: string): number => {
    return parseFloat(priceString.replace(/[^0-9.-]+/g, ""));
  };

  const getSubtotal = (): number => {
    return cart.reduce((total: number, item) => {
      const priceObject = item.product.prices[currency.toLowerCase() as "usd" | "cad"];
      const priceString = item.part === "left" ? priceObject.leftCurrent : priceObject.rightCurrent;
      const price = parsePrice(priceString);
      const quantity = getProductQuantity(item.product, item.part); // Get the quantity of the item
      return total + price * quantity;
    }, 0);
  };

  const getTotal = (deliveryCharge: number, discount: number): number => {
    const itemTotal = getSubtotal();
    return itemTotal + deliveryCharge - discount;
  };

  const deliveryCharge = cart.length === 0 ? 0.00 : (currency === "CAD" ? 8.00 : 5.00); // Set delivery charge to 0 if cart is empty
  const subTotal = getSubtotal();
  const total = getTotal(deliveryCharge, isCouponApplied ? 0.1 * subTotal : 0);

  return (
    <>
      <input
        type="text"
        id="coupon-code-input"
        placeholder="Enter Coupon Code"
        value={couponCode}
        onChange={(e) => setCouponCode(e.target.value)}
        className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded mb-4 transition-transform duration-300 focus:ring-1 focus:ring-primary"
      />
      <p className="text-lg font-medium mb-3 dark:text-gray-400 text-gray-500">
        Enter Coupon code <br />
        <span className="text-primary font-extrabold dark:text-primaryLight">
          &apos;TURBOSHOP10&apos;
        </span>{" "}
        for instant 10% off
      </p>
      <button
        onClick={handleCouponApply}
        disabled={isCouponApplied}
        className={`w-full py-3 transition duration-300 btn-primary ${isCouponApplied ? "bg-whiteTwo dark:bg-blackTwo text-blackTwo dark:text-whiteTwo border border-gray-200 dark:border-stone-800" : "bg-primary text-whiteTwo"} font-bold`}
      >
        {isCouponApplied ? "Coupon Applied" : "Apply Coupon"}
      </button>

      <div className="flex justify-between mt-4 font-bold text-2xl dark:text-gray-200 text-gray-800">
        <p>Total:</p>
        <p>
          ${total.toFixed(2)} {currency}
        </p>
      </div>
    </>
  );
};

export default CouponSection;
