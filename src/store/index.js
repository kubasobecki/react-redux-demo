import { configureStore } from '@reduxjs/toolkit';
import authSlice from './auth';
import counterSlice from './counter';

const store = configureStore({
    reducer: {
        auth: authSlice.reducer,
        counter: counterSlice.reducer
    }
});

export const authActions = authSlice.actions;
export const counterActions = counterSlice.actions;

export default store;
