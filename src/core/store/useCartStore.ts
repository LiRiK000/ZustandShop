import { devtools, persist } from 'zustand/middleware';

import { CartItem } from '@MyTypes/CartStore/CartItemType';
import { CartState } from '@MyTypes/CartStore/useCartStoreType';
import { create } from 'zustand';

export const useCartStore = create<CartState>()(
	devtools(
		persist(
			(set) => ({
				cartItems: [],
				addToCart: (item: CartItem) => {
					set((state) => {
						const existingItemIndex = state.cartItems.findIndex(
							(cartItem) => cartItem.id === item.id,
						);
						if (existingItemIndex !== -1) {
							const updatedCartItems = [...state.cartItems];
							updatedCartItems[existingItemIndex].quantity += 1;
							return { cartItems: updatedCartItems };
						}
						return {
							cartItems: [...state.cartItems, { ...item, quantity: 1 }],
						};
					});
				},
				deleteAll: () => {
					set({
						cartItems: [],
					});
				},
				increaseQuantity: (itemId: number) => {
					set((state) => ({
						cartItems: state.cartItems.map((item) =>
							item.id === itemId
								? { ...item, quantity: item.quantity + 1 }
								: item,
						),
					}));
				},
				decreaseQuantity: (itemId: number) => {
					set((state) => ({
						cartItems: state.cartItems.map((item) =>
							item.id === itemId && item.quantity > 1
								? { ...item, quantity: item.quantity - 1 }
								: item,
						),
					}));
				},
			}),
			{
				name: 'cart-store',
			},
		),
	),
);
