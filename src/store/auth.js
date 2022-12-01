import { createSlice } from '@reduxjs/toolkit';

const initialAuthState = { isUserAuthenticated: false };

const authSlice = createSlice({
    name: 'authentication',
    initialState: initialAuthState,
    reducers: {
        login(state) {
            state.isUserAuthenticated = true;
        },
        logout(state) {
            state.isUserAuthenticated = false;
        }
    }
});

export const authActions = authSlice.actions;
export default authSlice.reducer;
