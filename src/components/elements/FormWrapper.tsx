// Core
import { FC, FormEvent } from 'react';
import { NavLink } from 'react-router-dom';
// import { useForm } from 'react-hook-form';

type Props = {
    class: string;
    legend: string;
    value: string;
};

export const FormWrapper: FC<Props> = (props) => {
    // const form = useForm();

    const onSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
    };

    return (
        <section className = { props.class }>
            <form onSubmit = { onSubmit }>
                <fieldset>
                    <legend>{ props.legend }</legend>
                    { props.children }
                    <input
                        type = 'submit'
                        className = 'button-login'
                        value = { props.value } />
                </fieldset>
                { props.legend === 'Вход'
                && <p>{ 'Если у вас до сих пор нет учётной записи, вы можете ' }
                    <NavLink to = '/todo/signup'>зарегистрироваться</NavLink>
                    { '.' }
                </p> }

                { props.legend === 'Регистрация'
                && <p>{ 'Перейти к ' }
                    <NavLink to = '/todo/login'>логину</NavLink>
                    { '.' }
                </p> }
            </form>
        </section>
    );
};
