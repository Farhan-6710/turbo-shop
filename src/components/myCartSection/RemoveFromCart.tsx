// components/RemoveFromCart.tsx

import React, { useState } from "react";
import { FaTrash } from "react-icons/fa";
import { Product } from "@/lib/productTypes";
import useCartStore from "@/store/useCartStore"; // Import the cart store
import NotificationPopup from "@/components/extras/NotificationPopup"; // Import the NotificationPopup component

interface RemoveFromCartProps {
  product: Product;
  side: "left" | "right";
}

const RemoveFromCart: React.FC<RemoveFromCartProps> = ({ product, side }) => {
  const { removeFromCart } = useCartStore(); // Use the removeFromCart function from the store

  const [notification, setNotification] = useState<{
    message: string;
    visible: boolean;
  }>({ message: "", visible: false });

  // Show the notification asking for removal confirmation
  const showNotification = () => {
    setNotification({
      message: `Are you sure you want to remove '${product.modelName}' from the cart?`,
      visible: true,
    });
  };

  // Handle item removal after confirmation
  const handleConfirmRemove = () => {
    removeFromCart(product, side);
    setNotification({ message: "", visible: false }); // Hide notification
  };

  // Handle cancelation of removal
  const handleCancelRemove = () => {
    setNotification({ message: "", visible: false }); // Hide notification
  };

  return (
    <>
      <button
        className="text-red-500 hover:text-red-700 dark:text-red-400 dark:hover:text-red-300 mt-5 xs:mt-0"
        onClick={showNotification} // Show the confirmation notification on click
      >
        <FaTrash />
      </button>

      {notification.visible && (
        <NotificationPopup
          message={notification.message}
          onClose={() => setNotification({ message: "", visible: false })}
        />
      )}

      {notification.visible && (
        <div className="fixed bottom-16 inset-x-0 flex justify-center z-50 mx-2">
          <div className="bg-primary text-white px-6 py-4 rounded-lg shadow-lg">
            <div className="flex justify-between">
              <button
                className="text-white bg-green-500 px-4 py-2 rounded"
                onClick={handleConfirmRemove} // Confirm removal
              >
                Yes
              </button>
              <button
                className="text-white bg-red-500 px-4 py-2 rounded"
                onClick={handleCancelRemove} // Cancel removal
              >
                No
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default RemoveFromCart;
