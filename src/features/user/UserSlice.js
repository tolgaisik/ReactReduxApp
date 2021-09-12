import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { get } from "../../app/API";

const getUser = async (userId) =>
	await get("https://reqres.in/api/users/".concat(userId || ""));

export const getUserAsync = createAsyncThunk(
	"user/getUserAsync",
	async (userId) => {
		return await getUser(userId);
	}
);

export const userSlice = createSlice({
	name: "user",
	initialState: { user: null, support: null, status: "loading" },
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(getUserAsync.pending, (state, action) => {
				state.status = "loading";
			})
			.addCase(getUserAsync.fulfilled, (state, action) => {
				state.user = action.payload.data;
				state.status = "idle";
				state.support = action.payload.support;
			})
			.addCase(getUserAsync.rejected, (state, action) => {
				state.status = "rejected";
				console.log(action.error?.message || "User Payload Failed.");
			});
	},
});

export default userSlice.reducer;
export const selectUser = (state) => state.user;
