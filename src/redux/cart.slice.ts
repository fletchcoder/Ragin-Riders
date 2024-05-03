import type { Product } from "@/lib/types/Product";
import { createSlice } from "@reduxjs/toolkit";

interface CartItem {
	product: Product;
	amount: number;
	color: string;
	size: string;
}

interface CartItemState {
	items: CartItem[];
}

const initialState: CartItemState = {
	items: [],
};

const cartSlice = createSlice({
	name: "cart",
	initialState,
	reducers: {
		addToCart: (state, action) => {
			const fullItem = state.items.find(
				(item) =>
					item.product.id === action.payload.product.id &&
					item.color === action.payload.color &&
					item.size === action.payload.size
			);

			if (fullItem) {
				fullItem.amount += action.payload.amount;
			} else {
				state.items.push(action.payload);
			}
		},

		removeFromCart: (state, action) => {
			const fullItem = state.items.find(
				(item) =>
					item.product.id === action.payload.product.id &&
					item.color === action.payload.color &&
					item.size === action.payload.size
			);

			const removeItem = state.items.filter((item) => item !== fullItem);

			state.items = removeItem;
		},

		clearCart: (state) => {
			state.items = [];
		},
	},
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;

export const cartReducer = cartSlice.reducer;
