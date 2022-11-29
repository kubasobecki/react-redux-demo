// import redux
const redux = require('redux');

// define initial state
const initialState = { counter: 0 };

// reducer function
const counterReducer = (curState = initialState, action) => {
    if (action.type === 'increment') return { counter: curState.counter + 1 };
    if (action.type === 'decrement') return { counter: curState.counter - 1 };
    return curState;
};

// create store
const store = redux.createStore(counterReducer);

// subscriber function
const counterSubscriber = () => {
    const latestState = store.getState();
    console.log(latestState);
};
const counterSubscriber2 = () => {
    console.log('-----------');
};

// subscribe subscriber function to the store
store.subscribe(counterSubscriber);
store.subscribe(counterSubscriber2);

// dispatch an action to the reducer
store.dispatch({ type: 'increment' });
store.dispatch({ type: 'increment' });
store.dispatch({ type: 'increment' });
store.dispatch({ type: 'decrement' });
store.dispatch({ type: 'decrement' });
store.dispatch({ type: 'decrement' });
