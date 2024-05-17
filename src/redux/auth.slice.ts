import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

interface UserState {
	currentUser: undefined;
	isLoading: boolean;
}

type UserSignUp = {
	email: string;
	username: string;
	password: string;
};

type UserLogin = {
	email: string;
	password: string;
};

const initialState: UserState = {
	currentUser: undefined,
	isLoading: false,
};

const authSlice = createSlice({
	name: "auth",
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(register.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(register.fulfilled, (state, action) => {
				state.isLoading = false;
				state.currentUser = action.payload;
			})
			.addCase(register.rejected, (state) => {
				state.isLoading = false;
			})
			.addCase(login.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(login.fulfilled, (state, action) => {
				state.isLoading = false;
				state.currentUser = action.payload;
			})
			.addCase(login.rejected, (state) => {
				state.isLoading = false;
			});
	},
});

export const register = createAsyncThunk(
	"auth/register",
	async (userData: UserSignUp, thunkAPI) => {
		try {
			const response = await axios.post("https://api.realworld.io/api/users", {
				user: userData,
			});
			return response.data.user;
		} catch (err) {
			return thunkAPI.rejectWithValue(err);
		}
	}
);

export const login = createAsyncThunk(
	"auth/login",
	async (userData: UserLogin, thunkAPI) => {
		try {
			const response = await axios.post(
				"https://api.realworld.io/api/users/login",
				{
					user: userData,
				}
			);
			return response.data.user;
		} catch (err) {
			return thunkAPI.rejectWithValue(err);
		}
	}
);

export const authReducer = authSlice.reducer;
