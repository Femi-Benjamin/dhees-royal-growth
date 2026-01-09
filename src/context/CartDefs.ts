import { createContext } from "react";

export type CartItem = {
  id: number;
  name: string;
  price: number; // Storing as number for calculation
  image: string;
  quantity: number;
};

// Define a proper type for the product parameter
export type Product = {
  id: number;
  name: string;
  price: string | number;
  image: string;
  quantity?: number;
};

export type CartContextType = {
  items: CartItem[];
  addToCart: (product: Product) => void;
  removeFromCart: (id: number) => void;
  updateQuantity: (id: number, quantity: number) => void;
  clearCart: () => void;
  total: number;
  itemCount: number;
};

export const CartContext = createContext<CartContextType | undefined>(undefined);
