"use client"

// MyCart.tsx
import React from "react";
import OrderSummary from "./OrderSummary";
import CartItemsContainer from "./CartItemsContainer";

const MyCartPage: React.FC = () => {

  return (
    <div className="bg-whiteTwo dark:bg-blackTwo transition-colors duration-300">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-wrap md:flex-nowrap gap-3 md:gap-4">
          {/* Pass the cart items as a prop to CartItemsContainer */}
          <CartItemsContainer />
          {/* You can also pass cart details to OrderSummary if needed */}
          <OrderSummary />
        </div>
      </div>
    </div>
  );
};

export default MyCartPage;
