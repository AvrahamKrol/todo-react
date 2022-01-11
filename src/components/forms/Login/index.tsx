// Core
import { FC } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

// Components
import { FormWrapper, Input } from '../../elements';

import { schema } from './config';

export const Login: FC = () => {
    const form = useForm({
        mode:     'onTouched',
        resolver: yupResolver(schema),
    });

    return (
        <FormWrapper
            class = { 'sign-form' }
            legend = { 'Вход' }
            value = { 'Войти' }>
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
        </FormWrapper>
    );
};
