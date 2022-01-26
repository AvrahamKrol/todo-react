import { FC } from 'react';
import { format } from 'date-fns';
import { ru } from 'date-fns/locale';
import { ITodoShape, ITag } from '../../types';

interface IProps extends ITodoShape {
    todoById: ITodoShape,
    onGetTodoById: (id: string | undefined) => void,
    tag: ITag;
}

export const Task: FC<IProps> = (props) => {
    const {
        title, deadline, tag, todoById,
        onGetTodoById, id, completed,
    } = props;

    if (todoById?.id === id) {
        return (
            <>
                <div
                    className = { `task ${todoById.completed ? 'completed' : ''}` } onClick = { () => {
                        onGetTodoById(id);
                    }
                    }>
                    <span className = 'title'>{ todoById.title }</span>
                    <div className = 'meta'>
                        <span className = 'deadline'>{ `${format(new Date(todoById.deadline), 'PP', { locale: ru })}` }</span>
                        <span className = 'tag' style = { { color: todoById.tag.color, background: todoById.tag.bg } }>{ todoById.tag.name }</span>
                    </div>
                </div>
            </>
        );
    }

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
