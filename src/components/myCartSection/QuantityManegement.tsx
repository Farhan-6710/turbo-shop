import React from "react";
import useCartStore from "@/store/useCartStore"; // Import the cart store
import { Product } from "@/lib/productTypes"; // Import the Product type

interface QuantityManagementProps {
  product: Product; // Use the full Product type
  part: "left" | "right"; // Side of the product
  quantity: number; // Current quantity of the product in the cart
}

const QuantityManagement: React.FC<QuantityManagementProps> = ({ product, part, quantity }) => {
  const { increaseQuantity, decreaseQuantity } = useCartStore(); // Use store methods

  const handleIncrease = () => {
    increaseQuantity(product, part); // Increase quantity
  };

  const handleDecrease = () => {
    if (quantity > 1) {
      decreaseQuantity(product, part); // Decrease quantity if greater than 1
    }
  };

  return (
    <div className="flex items-center custom-quantity-container">
      <button
        type="button"
        className="custom-quantity-btn bg-whiteTwo text-blackOne dark:text-whiteOne dark:bg-blackTwo"
        aria-label="Decrease quantity"
        onClick={handleDecrease} // Decrease quantity on click
        disabled={quantity === 1} // Disable if quantity is 1
      >
        -
      </button>

      <input
        type="number"
        value={quantity}
        className="custom-quantity-input pointer-events-none dark:bg-blackOne text-blackOne dark:text-whiteOne"
        readOnly
      />

      <button
        type="button"
        className="custom-quantity-btn bg-whiteTwo text-blackOne dark:text-whiteOne dark:bg-blackTwo"
        aria-label="Increase quantity"
        onClick={handleIncrease} // Increase quantity on click
      >
        +
      </button>
    </div>
  );
};

export default QuantityManagement;
