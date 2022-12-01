import { useSelector, useDispatch } from 'react-redux';
import { counterActions } from './../store/index';
import classes from './Counter.module.css';

const Counter = () => {
    const dispatch = useDispatch();
    const counter = useSelector(state => state.counter.counter);
    const show = useSelector(state => state.counter.showCounter);

    const toggleCounterHandler = () => {
        dispatch(counterActions.toggleCounter());
    };

    const incrementCounterHandler = () => {
        dispatch(counterActions.increment(5));
    };

    const decrementCounterHandler = () => {
        dispatch(counterActions.decrement(5));
    };

    return (
        <main className={classes.counter}>
            <h1>Redux Counter</h1>
            <div className={classes.value}>{show && counter}</div>
            <div>
                <button onClick={decrementCounterHandler}>Decrement</button>
                <button onClick={incrementCounterHandler}>Increment</button>
            </div>
            <button onClick={toggleCounterHandler}>Toggle Counter</button>
        </main>
    );
};

export default Counter;
