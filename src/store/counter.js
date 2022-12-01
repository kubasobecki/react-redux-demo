import { createSlice } from '@reduxjs/toolkit';
import { count } from 'console';

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

export default counterSlice;
