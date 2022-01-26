// Core
import {    FC, useEffect, MouseEvent } from 'react';
import  DatePicker  from 'react-datepicker';
import { ru } from 'date-fns/locale';
import { useDispatch, useSelector } from 'react-redux';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

// Components
import { TaskInput, Button, ErrorMessage } from '../../elements';
import { Tag } from '../../Tag';
import { schema } from './config';

// Types
import { ITodos, ITodoShape } from '../../../types';

// Redux
import {
    todosActions,
    getTags,
    getTodoById,
    getTodos,
    getSelectedTagId,
} from '../../../lib/redux';

// Styles
import 'react-datepicker/dist/react-datepicker.css';

export const TaskCard: FC<ITodoShape | any> = (props) => {
    const dispatch = useDispatch();
    const selectedTagId = useSelector(getSelectedTagId);
    const todoById = useSelector(getTodoById);
    const todoList = useSelector(getTodos);
    const startDate = props.deadline ? new Date(props.deadline) : new Date();

    useEffect(() => {
        if (todoById) {
            dispatch(todosActions.getTagsAsync(todoById));

            return;
        }
        dispatch(todosActions.getTagsAsync());
    }, [todoById]);

    const form = useForm({
        mode:     'onTouched',
        resolver: yupResolver(schema),
    });

    useEffect(() => {
        if (todoById) {
            form.setValue('title', todoById.title);
            form.setValue('description', todoById.description);
            form.setValue('deadline', new Date(todoById.deadline));
            form.setValue('completed', todoById.completed);
            form.setValue('tag', todoById.tag.id || selectedTagId);
        }
        form.setValue('deadline', startDate);
    }, [todoById]);


    const onGetTagId = (id: string) => {
        if (selectedTagId) {
            form.setValue('tag', selectedTagId);
        }
        if (!selectedTagId) {
            form.setValue('tag', { id });
        }
    };


    const tags = useSelector(getTags);
    const tagsJSX = tags.map((tag) => {
        return <Tag
            key = { tag.id } { ...tag }
            onGetTagId = { onGetTagId } />;
    });

    const dispatchAction = (taskToDo: ITodos) => {
        const body = {
            completed:   taskToDo.completed,
            title:       taskToDo.title,
            deadline:    taskToDo.deadline,
            description: taskToDo.description,
            tag:         taskToDo.tag,
        };

        // eslint-disable-next-line @typescript-eslint/no-unused-expressions
        todoById
            ? dispatch(todosActions.updateTodoAsync(props.id, body))
            :  dispatch(todosActions.addTodoAsync(taskToDo));
    };

    const onSubmit = ({
        deadline, description, title,
    }: ITodos) => {
        const taskToDo = {
            completed: false,
            deadline,
            description,
            tag:       selectedTagId,
            title,
        };
        dispatchAction(taskToDo);
        dispatch(todosActions.setIsTaskCardOpen(false));
    };

    const onDelete = (id: string) => {
        const updatedTodoList = todoList.filter((todo) => todo.id !== id);
        dispatch(todosActions.deleteTodoAsync(id, updatedTodoList));
    };

    const isCompleted = (event: MouseEvent<HTMLElement>) => {
        event.preventDefault();
        const todoCompleted = {
            title:       todoById.title,
            deadline:    todoById.deadline,
            tag:         todoById.tag.id,
            completed:   true,
            description: todoById.description,
        };
        dispatch(todosActions.updateTodoAsync(props.id, todoCompleted));
        dispatch(todosActions.setIsTaskCardOpen(false));
    };

    return (
        <form onSubmit = { form.handleSubmit(onSubmit) }>
            <div className = 'head'>
                { todoById
                && <><button className = 'button-complete-task' onClick = { isCompleted }>
                        завершить
                </button>
                <div className = 'button-remove-task' onClick = { () => onDelete(props.id) }></div></> }
            </div>
            <div className = 'content'>
                <label className = 'label'>
                    Задачи
                    <TaskInput
                        class = 'title'
                        placeholder = 'Пройти интенсив по React + Redux + TS + Mobx'
                        register = { form.register('title') } />
                </label>
                <div className = 'deadline'>
                    <span className = 'label'>Дедлайн</span>
                    <span className = 'date'>
                        <Controller
                            control = { form.control }
                            name = 'deadline'
                            render = { ({
                                field: {
                                    onChange, value,
                                },
                            }) => (
                                <DatePicker
                                    locale = { ru }
                                    onChange = { (date) => onChange(date) }
                                    minDate = { startDate }
                                    selected = { value || startDate } />
                            ) } />
                    </span>
                </div>
                <div className = 'description'>
                    <label className = 'label'>
                    Описание
                        <TaskInput
                            class = 'text'
                            placeholder = 'После изучения всех технологий, завершить работу над проектами и найти работу.'
                            register = { form.register('description') } />
                    </label>
                </div>
                <div className = 'tags'>
                    { tagsJSX }
                </div>
                <div className = 'errors'>
                    <ErrorMessage error = { form.formState.errors.title } />
                    <ErrorMessage error = { form.formState.errors.description } />
                </div>
                <div className = 'form-controls'>
                    <Button
                        type = { 'reset' }
                        onClick = { form.reset }
                        class = { 'button-reset-task' }>Reset</Button>
                    <Button
                        type = { 'submit' }
                        class = { 'button-save-task' }>Save</Button>
                </div>
            </div>
        </form>
    );
};
