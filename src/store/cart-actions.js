import { uiActions } from './ui-slice';
import { cartActions } from './cart-slice';

export const fetchCartData = () => {
    return async dispatch => {
        try {
            dispatch(
                uiActions.showNotification({
                    status: 'pending',
                    title: 'Loading',
                    message: 'Loading cart data 🔁'
                })
            );

            const response = await fetch(
                'https://udemy-react-http-e9a9c-default-rtdb.europe-west1.firebasedatabase.app/cart-items.json'
            );

            if (!response.ok) throw new Error('Fetching cart data failed 💩');

            const data = await response.json();
            console.log(data);

            dispatch(cartActions.loadCart(data));

            dispatch(
                uiActions.showNotification({
                    status: 'success',
                    title: 'Success',
                    message: 'Cart data loaded successfully 🥳'
                })
            );
        } catch (err) {
            console.dir(err);
            dispatch(
                uiActions.showNotification({
                    status: 'error',
                    title: 'Error',
                    message: err.message
                })
            );
        }
    };
};

export const sendCartData = cartItems => {
    return async dispatch => {
        try {
            dispatch(
                uiActions.showNotification({
                    status: 'pending',
                    title: 'Sending',
                    message: 'Sending cart data 🔁'
                })
            );
            const response = await fetch(
                'https://udemy-react-http-e9a9c-default-rtdb.europe-west1.firebasedatabase.app/cart-items.json',
                {
                    method: 'PUT',
                    headers: { 'content-type': 'application/json' },
                    body: JSON.stringify(cartItems)
                }
            );

            if (!response.ok) throw new Error('Sending cart data failed 💩');

            dispatch(
                uiActions.showNotification({
                    status: 'success',
                    title: 'Success',
                    message: 'Cart data sent successfully 🥳'
                })
            );
        } catch (err) {
            console.dir(err);
            dispatch(
                uiActions.showNotification({
                    status: 'error',
                    title: 'Error',
                    message: err.message
                })
            );
        }
    };
};
