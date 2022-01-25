import { AnyAction } from 'redux';
import { authTypes } from '../types';

const initialState = {
    token:      null,
    isLoggedin: false,
};

export const authReducer = (state = initialState, action: AnyAction) => {
    switch (action.type) {
        case authTypes.SET_TOKEN: {
            return {
                ...state,
                token: action.payload,
            };
        }

        case authTypes.SET_ISLOGGEDIN: {
            return {
                ...state,
                isLoggedin: action.payload,
            };
        }

        case authTypes.START_FETCHING: {
            return {
                ...state,
                isFetching: true,
            };
        }

        case authTypes.STOP_FETCHING: {
            return {
                ...state,
                isFetching: false,
            };
        }

        default: {
            return state;
        }
    }
};
