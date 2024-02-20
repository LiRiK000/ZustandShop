import { CartItem } from "@MyTypes/CartStore/CartItemType";

export type CartState = {
  cartItems: CartItem[];
  addToCart: (item: CartItem) => void;
  deleteAll: () => void;
  increaseQuantity: (id: number) => void;
  decreaseQuantity: (id: number) => void;
};
