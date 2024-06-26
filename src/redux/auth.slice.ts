import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

type UserData = {
	email: string;
	username?: string;
	password: string;
};

type LoggedInUser = {
	email: string;
	username: string;
	bio: null;
	token: string;
	image: string;
};

interface UserState {
	currentUser: LoggedInUser;
	isLoading: boolean;
}

const initialState: UserState = {
	currentUser: {
		email: "N/A",
		username: "N/A",
		bio: null,
		token: "",
		image: "",
	},
	isLoading: false,
};

const authSlice = createSlice({
	name: "auth",
	initialState,
	reducers: {
		signOut: (state) => {
			state.currentUser = {
				email: "N/A",
				username: "N/A",
				bio: null,
				token: "",
				image: "",
			};
		},
	},
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
	async (userData: UserData, { rejectWithValue }) => {
		try {
			const response = await axios.post("https://api.realworld.io/api/users", {
				user: userData,
			});
			return response.data.user;
		} catch (err) {
			return rejectWithValue(err);
		}
	}
);

export const login = createAsyncThunk(
	"auth/login",
	async (userData: UserData, { rejectWithValue }) => {
		try {
			const response = await axios.post(
				"https://api.realworld.io/api/users/login",
				{
					user: userData,
				}
			);
			return response.data.user;
		} catch (err) {
			return rejectWithValue(err);
		}
	}
);

export const { signOut } = authSlice.actions;

export const authReducer = authSlice.reducer;
