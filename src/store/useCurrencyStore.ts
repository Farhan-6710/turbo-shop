import { create } from "zustand";

interface CurrencyStore {
  currency: string;
  setCurrency: (currency: string) => void;
}

const useCurrencyStore = create<CurrencyStore>((set) => ({
  currency: typeof window !== "undefined" ? localStorage.getItem("currency") || "USD" : "USD", // only use localStorage on the client side
  setCurrency: (currency) => {
    set({ currency });
    if (typeof window !== "undefined") {
      localStorage.setItem("currency", currency); // update localStorage only on client side
    }
  },
}));

export default useCurrencyStore;
