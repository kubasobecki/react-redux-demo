import { createSlice } from '@reduxjs/toolkit';
import { uiActions } from './ui-slice';

const initialState = { cartItems: [] };

const findItem = (cart, itemTitle) =>
    cart.findIndex(cartItem => cartItem.title === itemTitle);

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItem(state, action) {
            const { title, price } = action.payload;
            const itemIndex = findItem(state.cartItems, title);
            const curItem = state.cartItems[itemIndex];

            if (curItem) {
                curItem.quantity += 1;
                curItem.total += price;
            } else
                state.cartItems.push({
                    title,
                    quantity: 1,
                    total: price,
                    price
                });
        },
        removeItem(state, action) {
            const { title, price } = action.payload;
            const itemIndex = findItem(state.cartItems, title);
            const curItem = state.cartItems[itemIndex];

            if (curItem.quantity === 1) state.cartItems.splice(itemIndex, 1);
            else {
                curItem.quantity -= 1;
                curItem.total -= price;
            }
        }
    }
});

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

export const cartActions = cartSlice.actions;
export default cartSlice.reducer;
