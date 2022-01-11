import * as yup from 'yup';
import { ILoginSchema } from '../../../types';

// eslint-disable-next-line no-template-curly-in-string
const tooShortMessage = 'минимальная длина - ${min} символов';
// eslint-disable-next-line no-template-curly-in-string
const tooLongMessage = 'максимальная длина - ${max} символов';
// eslint-disable-next-line no-template-curly-in-string
const emailMessage = 'Поле email обязательно для заполнения';
// eslint-disable-next-line no-template-curly-in-string
const validEmailMessage = 'почта должна быть настоящей';

export const schema: yup.SchemaOf<ILoginSchema> = yup.object().shape({
    email: yup
        .string()
        .email(validEmailMessage)
        .required(emailMessage),
    password: yup
        .string()
        .min(8, tooShortMessage)
        .max(64, tooLongMessage)
        .required('*'),
});
