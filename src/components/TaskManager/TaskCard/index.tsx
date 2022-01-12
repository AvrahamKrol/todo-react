// Core
import { FC, useState } from 'react';
import  DatePicker  from 'react-datepicker';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

// Components
import { TaskInput, Button, ErrorMessage } from '../../elements';
import { schema } from './config';

// Styles
import 'react-datepicker/dist/react-datepicker.css';

export const TaskCard: FC = () => {
    const form = useForm({
        mode:     'onTouched',
        resolver: yupResolver(schema),
    });

    const [startDate, setStartDate] = useState(new Date());

    return (
        <form>
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
                        <DatePicker
                            selected = { startDate }
                            minDate = { new Date() }
                            onChange = { (date: Date) => setStartDate(date) } />
                    </span>
                </div>
                <div className = 'description'>
                    <label className = 'label'>
                    Описание
                        <TaskInput
                            class = 'text'
                            placeholder = 'После изучения всех технологий, завершить работу над проектами и найти работу.'
                            register = { form.register('desc') } />
                    </label>
                </div>
                <div className = 'tags'>
                    <span className = 'tag first' >Sketch</span>
                    <span className = 'tag second'>Spotify</span>
                    <span className = 'tag third'>Dribble</span>
                    <span className = 'tag forth'>Behance</span>
                    <span className = 'tag fifth'>UX</span>
                </div>
                <div className = 'errors'>
                    <ErrorMessage error = { form.formState.errors.title } />
                    <ErrorMessage error = { form.formState.errors.desc } />
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
