import { createStore, subscribe, getState, dispatch } from 'redux';

const initialState = { counter: 0, showCounter: false };

const reducer = (state = initialState, action) => {
    if (action.type === 'increment')
        return {
            ...state,
            counter: state.counter + action.amount
        };
    if (action.type === 'decrement')
        return {
            ...state,
            counter: state.counter - action.amount
        };
    if (action.type === 'toggle-counter')
        return {
            ...state,
            showCounter: !state.showCounter
        };
    return state;
};

const store = createStore(reducer);

export default store;
