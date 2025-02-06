// CartItemsContainer.tsx
import React from "react";
import CartItemList from "./CartItemList";


const CartItemsContainer = () => {
  return (
    <div className="w-full bg-whiteOne dark:bg-blackOne h-fit md:w-8/12 rounded-lg border border-gray-200 dark:border-stone-800">
      <CartItemList />
    </div>
  );
};

export default CartItemsContainer;
