import { Product } from "@/lib/productTypes";
import React, { useEffect, useState } from "react";
import { FaTrash } from "react-icons/fa6";
import { Button } from "../ui/button";
import { TransitionLink } from "@/lib/TransitionLink";
import { ShoppingCart } from "lucide-react";
import useCartStore from "@/store/useCartStore";

interface PopularProductsActionsProps {
  prices: {
    leftCurrent: string;
    leftOriginal: string;
  };
  product: Product;
}

const PopularProductsActions: React.FC<PopularProductsActionsProps> = ({
  product,
  prices,
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
    <div className="flex flex-wrap gap-4 items-center">
      <div>
        {!isAddedToCart ? (
          <Button
            variant="default"
            className={`items-center gap-2 rounded-none py-6 text-lg w-fit px-8 ${
              isAddedToCart ? "hidden" : "flex btn-primary bg-primary"
            }`}
            disabled={!prices.leftCurrent}
            onClick={handleAddToCart} // Only add to cart when clicked
          >
            <ShoppingCart strokeWidth={3} size={20} />
            Add to Cart
          </Button>
        ) : (
          <TransitionLink href="/my-cart">
            <div
              className={`flex items-center gap-2 rounded-none py-2 text-xl w-fit px-6 xs:px-12 bg-whiteOne dark:bg-blackOne border border-gray-300 dark:border-stone-800 shadow-none duration-200 ${
                isAddedToCart
                  ? "flex hover:bg-blackTwo dark:hover:bg-blackTwo hover:text-white text-green-500"
                  : "hidden"
              }`}
            >
              View Cart
            </div>
          </TransitionLink>
        )}
      </div>

      <div>
        {/* Conditionally render the "Remove from Cart" button if the product is in the cart */}
        {isAddedToCart && (
          <Button
            variant="default"
            className="flex items-center justify-center w-14 h-12 bg-red-500 border-gray-300 dark:border-stone-800 text-white hover:bg-whiteOne dark:hover:bg-blackOne hover:text-red-500 duration-200 shadow-none"
            onClick={handleRemoveFromCart} // Handle removing the product from the cart
          >
            <FaTrash
              strokeWidth={3}
              size={30}
              className="w-full h-full text-4xl"
            />
          </Button>
        )}
      </div>
    </div>
  );
};

export default PopularProductsActions;
