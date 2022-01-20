// Core
import { combineReducers } from 'redux';
import {
    authReducer as auth,
    todosReducer as todos,
    toastReducer as toast,
} from '../reducers';

// Reducers

export const rootReducer = combineReducers({
    auth,
    todos,
    toast,
});
