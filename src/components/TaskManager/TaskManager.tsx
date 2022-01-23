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
    getRequstedTodos,
    getTodoById,
} from '../../lib/redux';

export const TaskManager:FC = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(todosActions.getTodosAsync());
    }, []);

    const isTaskCardOpen = useSelector(getIsTaskCardOpen);

    const onSetNewTask = (): void => {
        dispatch(todosActions.setNewTaskCard());
        dispatch(todosActions.setIsTaskCardOpen(true));
    };

    const todos = useSelector(getRequstedTodos);
    const todoById = useSelector(getTodoById);
    // eslint-disable-next-line
    console.log(todos);

    const onGetTodoById = (id: string) => {
        dispatch(todosActions.getTodoByIdAsync(id));
    };


    const tasksJSX = todos.map((todo) => {
        return <Task
            key = { todo.id } { ...todo }
            onGetTodoById = { onGetTodoById } />;
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

