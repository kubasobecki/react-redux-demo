import Card from '../UI/Card';
import classes from './Cart.module.css';
import CartItem from './CartItem';
import { useSelector } from 'react-redux';

const Cart = props => {
    const cartItems = useSelector(state => state.cart.cartItems);

    const cartListItems = cartItems.map(listItem => {
        return <CartItem key={listItem.title} item={listItem} />;
    });

    return (
        <Card className={classes.cart}>
            <h2>Your Shopping Cart</h2>
            <ul>{cartListItems}</ul>
        </Card>
    );
};

export default Cart;
