import { FC } from 'react';
import { IButton } from '../../types';

export const Button: FC<IButton> = (props) => {
    return (
        <button
            onClick = { props.onSetIsTaskCardOpen }
            type = { props.type }
            className = { props.class }>
            { props.children }
        </button>
    );
};

