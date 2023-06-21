import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    currentlyPlaying: null
}

const trackSlice = createSlice({
    name: 'track',
    initialState,
    reducers: {
        setCurrentlyPlaying(state, action) {
            state.currentlyPlaying = action.payload;
        }
    }
})

export default trackSlice;
export const trackSliceActions = trackSlice.actions;