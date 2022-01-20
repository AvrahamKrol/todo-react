// Core
import { FC, useEffect } from 'react';
import  DatePicker  from 'react-datepicker';
import { useDispatch, useSelector } from 'react-redux';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

// Components
import { TaskInput, Button, ErrorMessage } from '../../elements';
import { Tag } from '../../Tag';
import { schema } from './config';

// Types
import { ITodos } from '../../../types';

// Redux
import { todosActions, getTags } from '../../../lib/redux';

// Hooks

// Styles
import 'react-datepicker/dist/react-datepicker.css';

export const TaskCard: FC = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(todosActions.getTagsAsync());
    }, []);

    const form = useForm({
        mode:     'onTouched',
        resolver: yupResolver(schema),
    });

    const startDate = new Date();

    const onGetTagId = (id: string) => {
        form.setValue('tag', { id });
    };

    const tags = useSelector(getTags);
    const tagsJSX = tags.map((tag) => {
        return <Tag
            key = { tag.id } { ...tag }
            onGetTagId = { onGetTagId } />;
    });

    const onSubmit = ({
        deadline, description, title,
    }: ITodos) => {
        const taskToDo = {
            completed: false,
            deadline,
            description,
            tag:       '8b535acc-623b-4ee3-9279-e6175159ff47',
            title,
        };
        dispatch(todosActions.addTodoAsync(taskToDo));
    };

    return (
        <form onSubmit = { form.handleSubmit(onSubmit) }>
            <div className = 'head'></div>
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
                                    // locale = 'ru'
                                    onChange = { (date) => onChange(date) }
                                    minDate = { startDate }
                                    selected = { startDate || value } />
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
                        class = { 'button-reset-task' }>Reset</Button>
                    <Button
                        type = { 'submit' }
                        class = { 'button-save-task' }>Save</Button>
                </div>
            </div>
        </form>
    );
};
