import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
	name: "cart",
	initialState: {
		items: [],
		values: [],
	},
	reducers: {
		addToCart: (state, action) => {},
		removeFromCart: (state, action) => {},
		clearCart: (state) => {
			state.items = [];
			state.values = [];
		},
	},
});
