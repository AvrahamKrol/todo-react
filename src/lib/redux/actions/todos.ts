import { todosTypes } from '../types';
import {
    ITodosShape, ITodoShape, ITodos, ITag,
} from '../../../types';
import { AppThunk } from '../init/store';
import { todoApi } from '../../../api/todo';

export const todosActions = Object.freeze({
    setIsTaskCardOpen: () => {
        return {
            type: todosTypes.SET_IS_TASK_CARD_OPEN,
        };
    },
    addTodo: (todo: ITodoShape | ITodoShape[]) => {
        return {
            type:    todosTypes.ADD_TODO,
            payload: todo,
        };
    },
    deleteTodo: (id: string) => {
        return {
            type:    todosTypes.DELETE_TODO,
            payload: id,
        };
    },
    setTags: (tasks: ITag[]) => {
        return {
            type:    todosTypes.SET_TAGS,
            payload: tasks,
        };
    },
    setTagId: (id: string) => {
        return {
            type:    todosTypes.SET_TAG_ID,
            payload: id,
        };
    },
    addTodoAsync: (todoTask: ITodos): AppThunk => async (dispatch) => {
        if (!todoTask) {
            return null;
        }
        try {
            const task = await todoApi.addTodo(todoTask);
            dispatch(todosActions.addTodo(task));
            // eslint-disable-next-line
            console.log(task);
        } catch (error) {
            // eslint-disable-next-line
            console.log(error);
        }
    },
    getTodosAsync: (): AppThunk => async (dispatch) => {
        try {
            const todos = await todoApi.getTodos();
            dispatch(todosActions.addTodo(todos.data));
            // eslint-disable-next-line
             console.log(todos.data);

            return todos;
        } catch (error) {
            // eslint-disable-next-line
            console.log(error);
        }
    },
    getTagsAsync: (): AppThunk => async (dispatch) => {
        try {
            const tags = await todoApi.getTags();
            dispatch(todosActions.setTags(tags));
            // eslint-disable-next-line
            console.log(tags);
        } catch (error) {
            // eslint-disable-next-line
            console.log(error);
        }
    },
});
