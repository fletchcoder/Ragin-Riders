import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

interface UserState {
	currentUser: undefined;
	isLoading: boolean;
}

type UserData = {
	user: {
		email: string;
		token: string;
		username: string;
		bio: string;
		image: null;
	};
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
			});
	},
});

export const register = createAsyncThunk(
	"auth/register",
	async (userData: UserData, thunkAPI) => {
		try {
			const response = await axios.post("https://api.realworld.io/api", {
				user: userData,
			});
			return response.data.user;
		} catch (err) {
			return thunkAPI.rejectWithValue(err);
		}
	}
);

export const authReducer = authSlice.reducer;
