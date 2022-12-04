import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import Notification from './components/UI/Notification';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { uiActions } from './store/ui-slice';

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

        const sendCartItems = async () => {
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

                if (!response.ok)
                    throw new Error('Sending cart data failed 💩');

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
        sendCartItems();

        const notificationTimeout = setTimeout(() => {
            dispatch(uiActions.showNotification({ status: null }));
        }, 2000);

        return () => {
            clearInterval(notificationTimeout);
        };
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
