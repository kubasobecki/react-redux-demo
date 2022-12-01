import { Fragment } from 'react';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import Header from './components/Header';
import Auth from './components/Auth';
import Counter from './components/Counter';
import UserProfile from './components/UserProfile';

function App() {
    // const isUserAuthenticated = useSelector(state => {
    //     console.log(state);
    //     return state.auth.isUserAuthenticated;
    // });
    const isUserAuthenticated = useSelector(
        state => state.auth.isUserAuthenticated
    );

    return (
        <Fragment>
            {isUserAuthenticated && <Header />}
            {isUserAuthenticated && <UserProfile />}
            {!isUserAuthenticated && <Auth />}
            {isUserAuthenticated && <Counter />}
        </Fragment>
    );
}

export default App;
