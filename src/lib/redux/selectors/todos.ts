import { RootState } from '../init/store';
import { ITodoShape, ITag } from '../../../types';

export const getTodos = (state: RootState): ITodoShape[] => {
    return state.todos.todos;
};
export const getTodoById = (state: RootState): ITodoShape => {
    return state.todos.todoById;
};
// export const getRequstedTodos = (state: RootState): ITodoShape[] => {
//     return state.todos.requestedTodoList;
// };

export const getTags = (state: RootState): ITag[] => {
    return state.todos.tags;
};

export const getIsTaskCardOpen = (state: RootState): boolean => {
    return state.todos.isTaskCardOpen;
};

export const getSelectedTagId = (state: RootState): string => {
    return state.todos.selectedTagId;
};
export const getSelectedTaskId = (state: RootState): string => {
    return state.todos.selectedTaskId;
};
