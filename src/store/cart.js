import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    cartIsShown: true,
    cartItems: [
        {
            title: 'Test item 1',
            quantity: 2,
            total: 12,
            price: 6
        },
        {
            title: 'Test item 2',
            quantity: 5,
            total: 20,
            price: 4
        }
    ]
};

const findItem = (cart, itemTitle) =>
    cart.findIndex(cartItem => cartItem.title === itemTitle);

const cartSlice = createSlice({
    name: 'cart',
    initialState: initialState,
    reducers: {
        toggleCart(state) {
            state.cartIsShown = !state.cartIsShown;
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
