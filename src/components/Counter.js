import { useSelector, useDispatch } from 'react-redux';
import classes from './Counter.module.css';

const Counter = () => {
    const counter = useSelector(state => state.counter);
    const showCounter = useSelector(state => state.showCounter);
    const dispatch = useDispatch();

    const toggleCounterHandler = () => {
        dispatch({ type: 'toggle-counter' });
    };

    const incrementCounterHandler = () => {
        dispatch({ type: 'increment', amount: 5 });
    };

    const decrementCounterHandler = () => {
        dispatch({ type: 'decrement', amount: 5 });
    };

    return (
        <main className={classes.counter}>
            <h1>Redux Counter</h1>
            <div className={classes.value}>{showCounter && counter}</div>
            <div>
                <button onClick={incrementCounterHandler}>Increment</button>
                <button onClick={decrementCounterHandler}>Decrement</button>
            </div>
            <button onClick={toggleCounterHandler}>Toggle Counter</button>
        </main>
    );
};

export default Counter;
