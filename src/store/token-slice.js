import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    token: null,
}

const tokenSlice = createSlice({
    name: token,
    initialState,
    reducers: {
        setToken(state, payload) {
            state.token = payload
        }
    }
})

export const tokenSliceActions = tokenSlice.actions;
export default tokenSlice.reducer;