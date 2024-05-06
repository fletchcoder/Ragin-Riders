import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { cartReducer } from "./cart.slice";

const reducer = combineReducers({
	cart: cartReducer,
});

export const store = configureStore({
	reducer: reducer,
});

export const useAppDispatch: () => typeof store.dispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<
	ReturnType<typeof store.getState>
> = useSelector;
