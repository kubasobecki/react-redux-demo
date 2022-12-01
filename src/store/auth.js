import { createSlice } from '@reduxjs/toolkit';

const initialAuthState = { isUserAuthenticated: false };

export const authSlice = createSlice({
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
