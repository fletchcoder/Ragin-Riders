import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { cartReducer } from "./cart.slice";

const reducer = combineReducers({
	cart: cartReducer,
});

export const store = configureStore({
	reducer: reducer,
});
