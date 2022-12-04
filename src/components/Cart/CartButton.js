import classes from './CartButton.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { uiActions } from '../../store/ui-slice';

const CartButton = props => {
    const itemsInCart = useSelector(state => state.cart.cartItems);
    const totalNumberOfItemsInCart = itemsInCart.reduce(
        (sum, item) => sum + item.quantity,
        0
    );

    const dispatch = useDispatch();

    const toggleCartHandler = () => {
        dispatch(uiActions.toggleCart());
    };

    return (
        <button className={classes.button} onClick={toggleCartHandler}>
            <span>My Cart</span>
            <span className={classes.badge}>{totalNumberOfItemsInCart}</span>
        </button>
    );
};

export default CartButton;
