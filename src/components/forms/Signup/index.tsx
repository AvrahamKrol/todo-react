// Core
import { FC } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

// Components
import { FormWrapper, Input } from '../../elements';
import { MainWrapper } from '../../../pages/MainWrapper';

import { schema } from './config';

export const Signup: FC = () => {
    const form = useForm({
        mode:     'onTouched',
        resolver: yupResolver(schema),
    });

    return (
        <MainWrapper>
            <FormWrapper
                class = { 'sign-form' }
                legend = { 'Регистрация' }
                value = { 'Зарегистрироваться' }>
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
            </FormWrapper>
        </MainWrapper>
    );
};
