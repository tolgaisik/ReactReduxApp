import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "../features/home/HomeSlice";
import userReducer from "../features/user/UserSlice";
export const store = configureStore({
	reducer: {
		users: usersReducer,
		user: userReducer,
	},
});
