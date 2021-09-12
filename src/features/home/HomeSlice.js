import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { get } from "../../app/API";
const getUsers = async (page) =>
	await get("https://reqres.in/api/users?page=".concat(String(page)));

const initialState = {
	list: [],
	status: "idle",
	pages: 0,
	page: 1,
};

export const getUsersAsync = createAsyncThunk(
	"users/getUsersAsync",
	async (page) => {
		return await getUsers(page);
	}
);

export const usersSlice = createSlice({
	name: "users",
	initialState: initialState,
	reducers: {
		setPage: (state, action) => {
			state.page = action.payload;
			console.log("Root " + state.page);
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(getUsersAsync.pending, (state, action) => {
				state.status = "loading";
			})
			.addCase(getUsersAsync.fulfilled, (state, action) => {
				state.list = [...action.payload.data];
				state.status = "idle";
				state.pages = action.payload.total_pages;
			})
			.addCase(getUsersAsync.rejected, (state, action) => {
				state.status = "rejected";
			});
	},
});
export const { setPage } = usersSlice.actions;
export default usersSlice.reducer;
export const selectUsers = (state) => state.users.list;
export const selectUsersStatus = (state) => state.users.status;
export const selectUsersPages = (state) => state.users.pages;
export const selectPage = (state) => state.users.page;
