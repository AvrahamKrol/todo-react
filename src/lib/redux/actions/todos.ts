import { todosTypes } from '../types';
import {
    ITodoShape, ITodos, ITag, ITodosShape,
} from '../../../types';
import { AppThunk } from '../init/store';
import { todoApi } from '../../../api/todo';
import { toastActions } from './toast';


export const todosActions = Object.freeze({
    setIsTaskCardOpen: (boolean: boolean) => {
        return {
            type:    todosTypes.SET_IS_TASK_CARD_OPEN,
            payload: boolean,
        };
    },
    setNewTaskCard: () => {
        return {
            type: todosTypes.SET_NEW_TASK_CARD,
        };
    },
    addTodo: (todo: ITodoShape | ITodoShape[]) => {
        return {
            type:    todosTypes.ADD_TODO,
            payload: todo,
        };
    },
    setTodoById: (todo: ITodoShape | undefined) => {
        return {
            type:    todosTypes.SET_TODO_BY_ID,
            payload: todo,
        };
    },
    setTodos: (todo: ITodoShape[]) => {
        return {
            type:    todosTypes.SET_TODOS,
            payload: todo,
        };
    },
    deleteTodo: (todoList: ITodosShape[]) => {
        return {
            type:    todosTypes.DELETE_TODO,
            payload: todoList,
        };
    },
    setTags: (tasks: ITag[]) => {
        return {
            type:    todosTypes.SET_TAGS,
            payload: tasks,
        };
    },
    setSelectedTagId: (id: string) => {
        return {
            type:    todosTypes.SET_SELECTED_TAG_ID,
            payload: id,
        };
    },
    setSelectedTaskId: (id: string) => {
        return {
            type:    todosTypes.SET_SELECTED_TASK_ID,
            payload: id,
        };
    },
    resetAll: () => {
        return {
            type: todosTypes.RESET_ALL,
        };
    },
    addTodoAsync: (todoTask: ITodos): AppThunk => async (dispatch) => {
        if (!todoTask) {
            return null;
        }
        try {
            const todo = await todoApi.addTodo(todoTask);
            dispatch(todosActions.addTodo(todo));
            dispatch(toastActions.setInfo('Задача добавлена'));
        } catch (error) {
            // eslint-disable-next-line
            console.log(error);
        }
    },
    updateTodoAsync: (id: string, body: ITodos): AppThunk => async (dispatch) => {
        try {
            const todo = await todoApi.updateTodoById(id, body);
            dispatch(todosActions.setTodoById(todo));
            dispatch(toastActions.setSuccess(`Задача с идентификатором ${todo?.id} успешно обновлена`));
        } catch (error) {
            // eslint-disable-next-line
            console.log(error);
        }
    },
    deleteTodoAsync: (id: string, todoList: ITodoShape[]): AppThunk => async (dispatch) => {
        try {
            await todoApi.deleteTodo(id);
            dispatch(todosActions.setTodos(todoList));
            dispatch(todosActions.setIsTaskCardOpen(false));
            dispatch(toastActions.setInfo('Задача удалена'));
        } catch (error) {
            // eslint-disable-next-line
            console.log(error);
        }
    },
    getTodosAsync: (): AppThunk => async (dispatch) => {
        try {
            const todos = await todoApi.getTodos();
            dispatch(todosActions.setTodos(todos.data));

            return todos;
        } catch (error) {
            // eslint-disable-next-line
            console.log(error);
        }
    },
    getTodoByIdAsync: (id: string | undefined): AppThunk => async (dispatch) => {
        try {
            const todo = await todoApi.getTodoById(id);
            dispatch(todosActions.setTodoById(todo));
            dispatch(todosActions.setIsTaskCardOpen(true));
        } catch (error) {
            // eslint-disable-next-line
            console.log(error);
        }
    },
    getTagsAsync: (): AppThunk => async (dispatch) => {
        try {
            const tags = await todoApi.getTags();
            dispatch(todosActions.setTags(tags));
            dispatch(todosActions.setSelectedTagId(tags[ 2 ].id));
        } catch (error) {
            // eslint-disable-next-line
            console.log(error);
        }
    },
});
