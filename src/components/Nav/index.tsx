import { FC, useEffect, MouseEvent } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getIsloggedin } from '../../lib/redux';

type Props = {
    page?: string | any;
};

export const Nav: FC<Props> = (props) => {
    const pageURL = props?.page;
    const token = localStorage.getItem('token');
    const isLoggedin = useSelector(getIsloggedin);
    const navigate = useNavigate();


    useEffect(() => {
        if (token && isLoggedin) {
            navigate(pageURL || '/todo/profile');
        }
    }, [token, isLoggedin]);

    const onDisable = (event: MouseEvent<HTMLAnchorElement>) => {
        event.preventDefault();
    };


    return (
        <>
            <nav>
                <NavLink to = '/todo/login'>Войти</NavLink>
                <NavLink
                    className = { !token ? 'disabled' : '' }
                    onClick = { onDisable }
                    to = '/todo/task-manager'>К задачам</NavLink>
                <NavLink
                    className = { !token ? 'disabled' : '' }
                    onClick = { onDisable }
                    to = '/todo/profile'>Профиль</NavLink>
            </nav>
        </>
    );
};
