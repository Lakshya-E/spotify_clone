import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./user-slice";
import tokenSlice from "./token-slice";

export const store = configureStore({
    reducer: {
        user: userSlice,
        token: tokenSlice
    }
})