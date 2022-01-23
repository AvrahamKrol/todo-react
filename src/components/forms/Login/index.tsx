// Core
import { FC } from 'react';
import { useForm } from 'react-hook-form';
import { NavLink, useNavigate } from 'react-router-dom';

import { yupResolver } from '@hookform/resolvers/yup';
import { useDispatch, useSelector } from 'react-redux';
import { authActions } from '../../../lib/redux/actions';

// Components
import { Input } from '../../elements';
import { Nav } from '../../Nav';
import { schema } from './config';

// Types
import { ILoginSchema } from '../../../types';
import { getToken } from '../../../lib/redux';

export const Login: FC = () => {
    const token = useSelector(getToken);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const form = useForm({
        mode:     'onTouched',
        resolver: yupResolver(schema),
    });

    const onSubmit = (credentials: ILoginSchema) => {
        dispatch(authActions.loginAsync(credentials));
        if (token) {
            navigate('/todo/task-manager');
            form.reset();
        }
    };

    return (
        <>
            <Nav />
            <main>
                <section className = 'sign-form'>
                    <form onSubmit = { form.handleSubmit(onSubmit) }>
                        <fieldset>
                            <legend>Вход</legend>
                            <Input
                                type = { 'email' }
                                placeholder = { 'Электропочта' }
                                error = { form.formState.errors.email }
                                register = { form.register('email') } />
                            <Input
                                type = { 'password' }
                                placeholder = { 'Пароль' }
                                error = { form.formState.errors.password }
                                register = { form.register('password') } />
                            <input
                                type = 'submit'
                                className = 'button-login'
                                value = { 'Войти' } />
                        </fieldset>
                        <p>{ 'Если у вас до сих пор нет учётной записи, вы можете ' }
                            <NavLink to = '/todo/signup'>зарегистрироваться</NavLink>
                            { '.' }
                        </p>
                    </form>
                </section>
            </main>
        </>
    );
};
