import { FC } from 'react';
import { format } from 'date-fns';
import { ru } from 'date-fns/locale';
import { ITodoShape, ITag } from '../../types';

interface IProps extends ITodoShape {
    onGetTodoById: (id: string) => void,
    tag: ITag;
}

export const Task: FC<IProps> = (props) => {
    const {
        title, deadline, tag,
        onGetTodoById, id, completed,
    } = props;

    return (
        <>
            <div
                className = { `task ${completed ? 'completed' : ''}` } onClick = { () => {
                    onGetTodoById(id);
                }
                }>
                <span className = 'title'>{ title }</span>
                <div className = 'meta'>
                    <span className = 'deadline'>{ `${format(new Date(deadline), 'PP', { locale: ru })}` }</span>
                    <span className = 'tag' style = { { color: tag.color, background: tag.bg } }>{ tag.name }</span>
                </div>
            </div>
        </>
    );
};
