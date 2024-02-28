import { create } from "zustand";

import { persist, createJSONStorage } from "zustand/middleware";
import toast from "react-hot-toast";

interface card {
  quantity: number;
  name: string;
  price: number;
  image: string;
}

interface useCartProps {
  items: card[];
  addItem: (data: any) => void;
  removeItem: (id: string) => void;
  removeAll: () => void;
}

const useCart = create(
  persist<useCartProps>(
    (set, get) => ({
      items: [],
      addItem: (data: any) => {
        const currentItems = get().items;
        const existingItem = currentItems.find(
          (item) => item.name === data.name
        );

        if (existingItem) {
          return toast("Item already in cart.");
        }

        set({ items: [...get().items, data] });
        toast.success("Item added to cart");
      },
      removeItem: (name: string) => {
        set({ items: [...get().items.filter((item) => item.name !== name)] });
        toast.success("Item removed from the cart");
      },
      removeAll: () => set({ items: [] }),
    }),
    {
      name: "cart-storage",
      storage: createJSONStorage(() => localStorage),
    }
  )
);

export default useCart;
