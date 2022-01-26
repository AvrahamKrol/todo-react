// Core
import { FC, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

// Components
import { Button } from '../elements';
import { TaskCard } from './TaskCard';
import { Footer } from '../Footer';
import { Task } from '../Task';

// Redux
import {
    getIsTaskCardOpen,
    todosActions,
    authActions,
    getTodos,
    getTodoById,
} from '../../lib/redux';

export const TaskManager:FC = () => {
    const dispatch = useDispatch();
    const token = localStorage.getItem('token');

    useEffect(() => {
        if (token) {
            dispatch(authActions.setIsloggedin(true));
            dispatch(authActions.setToken(token));
        }
        dispatch(todosActions.getTodosAsync());
    }, []);

    const isTaskCardOpen = useSelector(getIsTaskCardOpen);

    const onSetNewTask = (): void => {
        dispatch(todosActions.setNewTaskCard());
        dispatch(todosActions.setIsTaskCardOpen(true));
    };

    const todos = useSelector(getTodos);
    const todoById = useSelector(getTodoById);

    const onGetTodoById = (id: string | undefined) => {
        dispatch(todosActions.getTodoByIdAsync(id));
    };


    const tasksJSX = todos.map((todo) => {
        return <Task
            key = { todo.id } { ...todo }
            todoById = { todoById }
            onGetTodoById = { onGetTodoById } />;
    });

    const onLogout = () => {
        dispatch(authActions.logoutAsync());
        dispatch(todosActions.resetAll());
    };


    return (
        <>
            <nav>
                <NavLink to = '/todo/task-manager'>К задачам</NavLink>
                <NavLink to = '/todo/profile'>Профиль</NavLink>
                <NavLink
                    className = 'button-logout'
                    to = '/todo/login'
                    onClick = { onLogout }>Выйти</NavLink>
            </nav>
            <main>
                <div className = 'controls'>
                    <Button
                        class = { 'button-create-task' }
                        onSetNewTask = { onSetNewTask } >Новая задача</Button>
                </div>
                <div className = 'wrap'>
                    <div className = { `list ${todos.length === 0 ? 'empty' : ''}` }>
                        <div className = 'tasks'>
                            { tasksJSX }
                        </div>
                    </div>
                    { isTaskCardOpen && <div className = 'task-card'>
                        { !todoById && <TaskCard /> }
                        { todoById && <TaskCard { ...todoById } /> }
                    </div> }
                </div>
            </main>
            <Footer />
        </>
    );
};

