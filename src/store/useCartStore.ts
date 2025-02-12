import { create } from "zustand";
import { Product } from "@/lib/productTypes";

// Define the CartState type
interface CartState {
  cart: { product: Product; part: "left" | "right"; quantity: number }[]; // Add quantity field
  addToCart: (product: Product, part: "left" | "right") => void;
  removeFromCart: (product: Product, part: "left" | "right") => void;
  isInCart: (product: Product, part: "left" | "right") => boolean;
  increaseQuantity: (product: Product, part: "left" | "right") => void;
  decreaseQuantity: (product: Product, part: "left" | "right") => void;
  getProductQuantity: (product: Product, part: "left" | "right") => number;
}

// Helper function to persist the cart in localStorage
const persistCartInLocalStorage = (
  cart: { product: Product; part: "left" | "right"; quantity: number }[]
) => {
  localStorage.setItem("cart", JSON.stringify(cart));
};

// Create the Zustand store
const useCartStore = create<CartState>((set, get) => {
  // Try to load the cart from localStorage on initialization
  const initialCart =
    typeof window !== "undefined" && localStorage.getItem("cart")
      ? JSON.parse(localStorage.getItem("cart")!)
      : [];

  return {
    cart: initialCart,
    addToCart: (product: Product, part: "left" | "right") =>
      set((state) => {
        const updatedCart = [
          ...state.cart,
          { product, part, quantity: 1 },
        ];
        persistCartInLocalStorage(updatedCart); // Persist the updated cart
        return { cart: updatedCart };
      }),
    removeFromCart: (product: Product, part: "left" | "right") =>
      set((state) => {
        const updatedCart = state.cart.filter(
          (item) =>
            !(item.product.id === product.id &&
              item.product.modelName === product.modelName &&
              item.part === part)
        );
        persistCartInLocalStorage(updatedCart); // Persist the updated cart
        return { cart: updatedCart };
      }),
    isInCart: (product: Product, part: "left" | "right") => {
      const state = get(); // Get the current state
      return state.cart.some(
        (item) =>
          item.product.id === product.id &&
          item.product.modelName === product.modelName &&
          item.part === part
      );
    },
    increaseQuantity: (product: Product, part: "left" | "right") =>
      set((state) => {
        const updatedCart = state.cart.map((item) =>
          item.product.id === product.id &&
          item.product.modelName === product.modelName &&
          item.part === part
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
        persistCartInLocalStorage(updatedCart); // Persist the updated cart
        return { cart: updatedCart };
      }),
    decreaseQuantity: (product: Product, part: "left" | "right") =>
      set((state) => {
        const updatedCart = state.cart.map((item) =>
          item.product.id === product.id &&
          item.product.modelName === product.modelName &&
          item.part === part &&
          item.quantity > 1
            ? { ...item, quantity: item.quantity - 1 }
            : item
        );
        persistCartInLocalStorage(updatedCart); // Persist the updated cart
        return { cart: updatedCart };
      }),
    getProductQuantity: (product: Product, part: "left" | "right") => {
      const state = get();
      const item = state.cart.find(
        (item) =>
          item.product.id === product.id &&
          item.product.modelName === product.modelName &&
          item.part === part
      );
      console.log("item", item);
      return item ? item.quantity : 0;
    },
  };
});

export default useCartStore;
