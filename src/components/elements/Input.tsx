import { FC } from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';

type Props = {
    name?: string;
    placeholder: string;
    type?: string;
    register: UseFormRegisterReturn;
    error?: {
        message: string;
    };
};

export const Input: FC<Props> = (props) => {
    const input = (
        <input
            placeholder = { props.placeholder }
            type = { props.type }
            { ...props.register } />
    );

    return (
        <>
            <label>
                <span className = 'errorMessage'>
                    { props.error?.message }
                </span>
                { input }
            </label>
        </>
    );
};

Input.defaultProps = {
    type: 'text',
};
