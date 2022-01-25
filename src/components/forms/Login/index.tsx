// Core
import { FC } from 'react';
import { useForm } from 'react-hook-form';
import { NavLink } from 'react-router-dom';

import { yupResolver } from '@hookform/resolvers/yup';
import { useDispatch, useSelector } from 'react-redux';
import { authActions } from '../../../lib/redux/actions';

// Components
import { Input } from '../../elements';
import { Nav } from '../../Nav';
import { schema } from './config';

// Types
import { ILoginSchema } from '../../../types';

export const Login: FC = () => {
    const dispatch = useDispatch();
    const form = useForm({
        mode:     'onTouched',
        resolver: yupResolver(schema),
    });

    const onSubmit = (credentials: ILoginSchema) => {
        dispatch(authActions.loginAsync(credentials));
        form.reset();
    };

    return (
        <>
            <Nav page = '/todo/task-manager' />
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
