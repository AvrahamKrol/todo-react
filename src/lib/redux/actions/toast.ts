import { toastTypes } from '../types';

export const toastActions = Object.freeze({
    setError: (errorMessage: string) => {
        return {
            type:         toastTypes.ERROR,
            notification: true,
            payload:      errorMessage,
        };
    },

    setSuccess: (successMessage: string) => {
        return {
            type:         toastTypes.SUCCESS,
            notification: true,
            payload:      successMessage,
        };
    },

    setInfo: (infoMessage: string) => {
        return {
            type:         toastTypes.INFO,
            notification: true,
            payload:      infoMessage,
        };
    },

    reset: () => {
        return {
            type:    toastTypes.RESET,
            payload: '',
        };
    },
});
