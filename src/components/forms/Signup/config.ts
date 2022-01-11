import * as yup from 'yup';
import { ISignupSchema } from '../../../types';

// eslint-disable-next-line no-template-curly-in-string
const tooShortMessage = 'минимальная длина - ${min} символов';
// eslint-disable-next-line no-template-curly-in-string
const tooLongMessage = 'максимальная длина - ${max} символов';
// eslint-disable-next-line no-template-curly-in-string
const emailMessage = 'Поле email обязательно для заполнения';
// eslint-disable-next-line no-template-curly-in-string
const validEmailMessage = 'Почта должна быть настоящей';

export const schema: yup.SchemaOf<ISignupSchema> = yup.object().shape({
    name: yup
        .string()
        .min(2, tooShortMessage)
        .max(50, tooLongMessage)
        .required(),
    email: yup
        .string()
        .email(validEmailMessage)
        .required(emailMessage),
    password: yup
        .string()
        .min(8, tooShortMessage)
        .max(64, tooLongMessage)
        .required(),
    confirmPassword: yup
        .string()
        .oneOf([yup.ref('password')], 'Пароли должны совпадать')
        .required(),
});
