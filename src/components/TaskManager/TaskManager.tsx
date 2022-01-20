// Core
import { FC, useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

// Components
import { Button } from '../elements';
import { TaskCard } from './TaskCard';
import { Footer } from '../Footer';
import { Task } from '../Task';

// Redux
import { getIsTaskCardOpen, todosActions, getTodos } from '../../lib/redux';

export const TaskManager:FC = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(todosActions.getTodosAsync());
    }, []);

    const isTaskCardOpen = useSelector(getIsTaskCardOpen);
    const onSetIsTaskCardOpen = (): void => {
        dispatch(todosActions.setIsTaskCardOpen());
    };

    const todos = useSelector(getTodos);
    const tasksJSX = todos.map((todo) => {
        return <Task
            key = { todo.id } { ...todo }
            onSetIsTaskCardOpen = { onSetIsTaskCardOpen } />;
    });


    return (
        <>
            <nav>
                <NavLink to = '/todo/login'>К задачам</NavLink>
                <NavLink to = '/todo/task-manager'>Профиль</NavLink>
                <NavLink className = 'button-logout' to = '/todo/profile'>Выйти</NavLink>
            </nav>
            <main>
                <div className = 'controls'>
                    <Button
                        class = { 'button-create-task' }
                        onSetIsTaskCardOpen = { onSetIsTaskCardOpen } >Новая задача</Button>
                </div>
                <div className = 'wrap'>
                    <div className = { `list ${todos.length === 0 ? 'empty' : ''}` }>
                        <div className = 'tasks'>
                            { tasksJSX }
                        </div>
                    </div>
                    { isTaskCardOpen && <div className = 'task-card'>
                        <TaskCard />
                    </div> }
                </div>
            </main>
            <Footer />
        </>
    );
};

