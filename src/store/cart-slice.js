import { createSlice } from '@reduxjs/toolkit';
import { uiActions } from './ui-slice';

const initialState = { cartItems: [] };

const findItem = (cart, itemTitle) =>
    cart.findIndex(cartItem => cartItem.title === itemTitle);

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        loadCart(state, action) {
            console.log(action);
            state.cartItems = action.payload;
        },
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

export const cartActions = cartSlice.actions;
export default cartSlice.reducer;
