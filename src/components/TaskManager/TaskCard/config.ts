import * as yup from 'yup';
import { ITaskCard } from '../../../types';

// eslint-disable-next-line no-template-curly-in-string
const tooShortMessageTitle = 'Минимальная длина поля title — ${min}';
// eslint-disable-next-line no-template-curly-in-string
const tooShortMessageDesc = 'Минимальная длина поля description — ${min}';
// eslint-disable-next-line no-template-curly-in-string
const tooLongMessageTitle = 'Максимальная длина поля title — ${max}';
// eslint-disable-next-line no-template-curly-in-string
const tooLongMessageDesc = 'Максимальная длина поля description — ${max}';


export const schema: yup.SchemaOf<ITaskCard> = yup.object().shape({
    title: yup
        .string()
        .min(3, tooShortMessageTitle)
        .max(64, tooLongMessageTitle)
        .required(),
    desc: yup
        .string()
        .min(3, tooShortMessageDesc)
        .max(64, tooLongMessageDesc)
        .required(),
});
