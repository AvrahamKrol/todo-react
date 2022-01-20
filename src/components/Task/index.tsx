import { FC } from 'react';
import { ITodoShape, ITag } from '../../types';

interface IProps extends ITodoShape {
    onSetIsTaskCardOpen: () => void,
    tag: ITag;
}

export const Task: FC<IProps> = (props) => {
    const {
        title, deadline, tag, onSetIsTaskCardOpen,
    } = props;

    return (
        <>
            <div className = 'task' onClick = { onSetIsTaskCardOpen }>
                <span className = 'title'>{ title }</span>
                <div className = 'meta'>
                    <span className = 'deadline'>{ deadline }</span>
                    <span className = 'tag' style = { { color: tag.color, background: tag.bg } }>{ tag.name }</span>
                </div>
            </div>
        </>
    );
};
