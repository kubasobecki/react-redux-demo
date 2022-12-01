// import { createStore } from 'redux';
import { createSlice, configureStore } from '@reduxjs/toolkit';

const initialCounterState = { counter: 0, showCounter: false };

const counterSlice = createSlice({
    name: 'counter',
    initialState: initialCounterState,
    reducers: {
        increment(state, action) {
            state.counter += action.payload;
        },
        decrement(state, action) {
            state.counter -= action.payload;
        },
        toggleCounter(state) {
            state.showCounter = !state.showCounter;
        }
    }
});

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

const store = configureStore({
    reducer: {
        auth: authSlice.reducer,
        counter: counterSlice.reducer
    }
});

export const authActions = authSlice.actions;
export const counterActions = counterSlice.actions;

export default store;
