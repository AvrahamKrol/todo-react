// Core
import { FC } from 'react';

// Instruments
import { NavLink } from 'react-router-dom';

// Redux
import { useDispatch } from 'react-redux';
import { authActions, todosActions } from '../../lib/redux';

// Components
import { Footer } from '../Footer';

export const Profile: FC = () => {
    const dispatch = useDispatch();
    const onLogout = () => {
        dispatch(authActions.logoutAsync());
        dispatch(todosActions.resetAll());
    };

    return (
        <>
            <nav>
                <NavLink to = '/todo/task-manager'>К задачам</NavLink>
                <NavLink to = '/todo/profile'>Профиль</NavLink>
                <NavLink
                    className = 'button-logout'
                    to = '/todo/login'
                    onClick = { onLogout }>Выйти</NavLink>
            </nav>
            <main>
                <h1>Профиль пользователя</h1>
            </main>
            <Footer />
        </>
    );
};
