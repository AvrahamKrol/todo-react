import { FC } from 'react';
import { NavLink } from 'react-router-dom';

export const Nav: FC = () => {
    return (
        <>
            <nav>
                <NavLink to = '/todo/login'>Войти</NavLink>
                <NavLink to = '/todo/task-manager'>К задачам</NavLink>
                <NavLink to = '/todo/profile'>Профиль</NavLink>
            </nav>
        </>
    );
};
