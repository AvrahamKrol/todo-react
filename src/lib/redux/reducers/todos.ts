import { AnyAction } from 'redux';
import { todosTypes } from '../types';

const initialState = {
    todos:          [],
    tags:           [],
    isTaskCardOpen: false,
    tagId:          '8b535acc-623b-4ee3-9279-e6175159ff47',
};

export const todosReducer = (state = initialState, action: AnyAction) => {
    switch (action.type) {
        case todosTypes.ADD_TODO: {
            return {
                ...state,
                isTaskCardOpen: false,
                todos:          action.payload,
            };
        }
        case todosTypes.DELETE_TODO: {
            return {
                ...state,
            };
        }
        case todosTypes.SET_TAGS: {
            return {
                ...state,
                tags: action.payload,
            };
        }
        case todosTypes.SET_IS_TASK_CARD_OPEN: {
            return {
                ...state,
                isTaskCardOpen: true,
            };
        }
        default: return state;
    }
};
