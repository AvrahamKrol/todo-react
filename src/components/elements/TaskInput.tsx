import { FC } from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';

type Props = {
    placeholder: string;
    type?: string;
    class?: string;
    value?: string;
    register?: UseFormRegisterReturn;
};

export const TaskInput: FC<Props> = (props) => {
    const input = (
        <input
            className = { props.class }
            placeholder = { props.placeholder }
            type = { props.type }
            value = { props.value }
            onChange = { (event) => event.target.value }
            { ...props.register } />
    );

    return (
        <>
            { input }
        </>
    );
};

TaskInput.defaultProps = {
    type: 'text',
};
