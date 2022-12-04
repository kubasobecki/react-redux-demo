import { createSlice } from '@reduxjs/toolkit';

const initialState = { isCartShown: false };

const uiSlice = createSlice({
    name: 'UI',
    initialState,
    reducers: {
        toggleCart(state) {
            state.isCartShown = !state.isCartShown;
        }
    }
});

export const uiActions = uiSlice.actions;
export default uiSlice.reducer;
