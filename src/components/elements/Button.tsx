import { FC } from 'react';
import { IButton } from '../../types';

export const Button: FC<IButton> = (props) => {
    return (
        <button
            onClick = { () => {
                if (props.onSetNewTask) {
                    props.onSetNewTask();
                }
                if (props.onClick) {
                    props.onClick();
                }
            } }
            type = { props.type }
            className = { props.class }>
            { props.children }
        </button>
    );
};

