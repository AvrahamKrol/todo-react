import { FC } from 'react';
import { IButton } from '../../types';

export const Button: FC<IButton> = (props) => {
    return (
        <button
            type = { props.type }
            onClick = { props.onClick }
            className = { props.class }>
            { props.children }
        </button>
    );
};

