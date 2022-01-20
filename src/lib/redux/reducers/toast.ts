import { AnyAction } from 'redux';
import { toastTypes } from '../types';

const initialState = {
    type:                '',
    notificationMessage: '',
    notification:        false,
};

export const toastReducer = (state = initialState, action: AnyAction) => {
    switch (action.type) {
        case toastTypes.ERROR: {
            return {
                ...state,
                type:                'error',
                notification:        true,
                notificationMessage: action.payload,
            };
        }

        case toastTypes.SUCCESS: {
            return {
                ...state,
                type:                'success',
                notification:        true,
                notificationMessage: action.payload,
            };
        }

        case toastTypes.INFO: {
            return {
                ...state,
                type:                'info',
                notification:        true,
                notificationMessage: action.payload,
            };
        }

        case toastTypes.RESET: {
            return {
                ...state,
                type:                '',
                notification:        false,
                notificationMessage: '',
            };
        }

        default: {
            return state;
        }
    }
};
