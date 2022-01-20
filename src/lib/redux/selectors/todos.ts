import { RootState } from '../init/store';
import { ITodoShape, ITag } from '../../../types';

export const getTodos = (state: RootState): ITodoShape[] => {
    return state.todos.todos;
};

export const getTags = (state: RootState): ITag[] => {
    return state.todos.tags;
};

export const getIsTaskCardOpen = (state: RootState): boolean => {
    return state.todos.isTaskCardOpen;
};

export const getTagId = (state: RootState): string => {
    return state.todos.tagId;
};
