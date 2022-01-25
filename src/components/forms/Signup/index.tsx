// Core
import { FC } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';

// Types
import { ISignupSchema } from '../../../types';

// Redux
import { authActions } from '../../../lib/redux/actions';

// Components
import { Input } from '../../elements';
import { Nav } from '../..';
import { schema } from './config';

export const Signup: FC = () => {
    const dispatch = useDispatch();

    const form = useForm({
        mode:     'onTouched',
        resolver: yupResolver(schema),
    });

    const onSubmit = (credentials: ISignupSchema) => {
        dispatch(authActions.signUpAsync(credentials));
        // navigate('/todo/task-manager');
        form.reset();
    };


    return (
        <>
            <Nav page = '/todo/task-manager' />
            <main>
                <section className = 'sign-form' >
                    <form onSubmit = { form.handleSubmit(onSubmit) }>
                        <fieldset>
                            <legend>Регистрация</legend>
                            <Input
                                placeholder = { 'Имя и фамилия' }
                                error = { form.formState.errors.name }
                                register = { form.register('name') } />
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
                            <Input
                                type = { 'password' }
                                placeholder = { 'Подтверждение пароля' }
                                error = { form.formState.errors.confirmPassword }
                                register = { form.register('confirmPassword') } />
                            <input
                                type = 'submit'
                                className = 'button-login'
                                value = 'Зарегистрироваться' />
                        </fieldset>

                        <p>{ 'Перейти к ' }
                            <NavLink to = '/todo/login'>логину</NavLink>
                            { '.' }
                        </p>
                    </form>
                </section>
            </main>
        </>
    );
};
