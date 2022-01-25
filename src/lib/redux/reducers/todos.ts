// Redux
import { AnyAction } from 'redux';
import { todosTypes } from '../types';

// Types
import { ITag, ITodoShape } from '../../../types';

interface IInitialState {
    todos: ITodoShape[],
    todoById : ITodoShape | null,
    // requestedTodoList: ITodoShape[],
    currentTodoId: string | null,
    tags: ITag[],
    isTaskCardOpen: boolean,
    selectedTagId: string | null,
    selectedTaskId: string | null,
}

const initialState: IInitialState = {
    todos:          [],
    todoById:       null,
    currentTodoId:  null,
    tags:           [],
    isTaskCardOpen: false,
    selectedTagId:  null,
    selectedTaskId: null,
};

export const todosReducer = (state = initialState, action: AnyAction) => {
    switch (action.type) {
        case todosTypes.ADD_TODO: {
            return {
                ...state,
                todos: [action.payload, ...state.todos],
            };
        }
        case todosTypes.SET_TODOS: {
            return {
                ...state,
                todos: action.payload,
            };
        }
        case todosTypes.SET_TODO_BY_ID: {
            return {
                ...state,
                todoById: action.payload,
            };
        }
        case todosTypes.SET_NEW_TASK_CARD: {
            return {
                ...state,
                todoById: null,
            };
        }
        case todosTypes.DELETE_TODO: {
            return {
                ...state,
                todos: action.payload,
            };
        }
        case todosTypes.SET_TAGS: {
            return {
                ...state,
                tags: action.payload,
            };
        }
        case todosTypes.SET_SELECTED_TAG_ID: {
            return {
                ...state,
                selectedTagId: action.payload,
            };
        }
        case todosTypes.SET_SELECTED_TASK_ID: {
            return {
                ...state,
                selectedTaskId: action.payload,
            };
        }
        case todosTypes.SET_IS_TASK_CARD_OPEN: {
            return {
                ...state,
                isTaskCardOpen: action.payload,
            };
        }
        case todosTypes.RESET_ALL: {
            return {
                ...state,
                todos:          [],
                todoById:       null,
                currentTodoId:  null,
                tags:           [],
                isTaskCardOpen: false,
                selectedTagId:  null,
                selectedTaskId: null,
            };
        }
        default: return state;
    }
};
