import { FC } from 'react';
import { NavLink } from 'react-router-dom';

export const Nav: FC = () => {
    const token = localStorage.getItem('token');

    return (
        <>
            <nav>
                <NavLink to = '/todo/login'>Войти</NavLink>
                <NavLink aria-disabled = { token ? 'false' : 'true' } to = '/todo/task-manager'>К задачам</NavLink>
                <NavLink aria-disabled = { token ? 'false' : 'true' } to = '/todo/profile'>Профиль</NavLink>
            </nav>
        </>
    );
};
