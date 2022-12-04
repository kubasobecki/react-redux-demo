import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import Notification from './components/UI/Notification';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { sendCartData } from './store/cart-slice';

let initialRun = true;

function App() {
    const isCartShown = useSelector(state => state.ui.isCartShown);
    const cartItems = useSelector(state => state.cart.cartItems);
    const notification = useSelector(state => state.ui.notification);
    const dispatch = useDispatch();

    useEffect(() => {
        if (initialRun) {
            initialRun = false;
            return;
        }

        dispatch(sendCartData(cartItems));
    }, [cartItems, dispatch]);

    return (
        <>
            {notification.status && (
                <Notification
                    status={notification.status}
                    title={notification.title}
                    message={notification.message}
                />
            )}
            <Layout>
                {isCartShown && <Cart />}
                <Products />
            </Layout>
        </>
    );
}

export default App;
