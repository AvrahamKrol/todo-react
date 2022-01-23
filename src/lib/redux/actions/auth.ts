import { AxiosError } from 'axios';
import { authTypes } from '../types';
import { IToken, ISignupSchema, ILoginSchema } from '../../../types';
import { AppThunk } from '../init/store';
import { api } from '../../../api';
import { toastActions } from './toast';


export const authActions = Object.freeze({
    setToken: (token: string | IToken) => {
        return {
            type:    authTypes.SET_TOKEN,
            payload: token,
        };
    },
    startFetching: () => {
        return {
            type: authTypes.START_FETCHING,
        };
    },
    stopFetching: () => {
        return {
            type: authTypes.STOP_FETCHING,
        };
    },
    signUpAsync: (userInfo: ISignupSchema): AppThunk => async (dispatch) => {
        if (!userInfo) {
            return null;
        }
        try {
            dispatch(authActions.startFetching);
            const { confirmPassword, ...newUser } = userInfo;
            const { data: token } = await api.signup(newUser);
            dispatch(authActions.setToken(token));
            dispatch(toastActions.setSuccess(`Добро пожаловать ${newUser.name}`));
            localStorage.setItem('token', token);
        } catch (error) {
            const { message } = error as AxiosError;
            dispatch(toastActions.setError(message));
        } finally {
            dispatch(authActions.stopFetching());
        }
    },

    loginAsync: (userInfo: ILoginSchema): AppThunk => async (dispatch) => {
        if (!userInfo) {
            return null;
        }
        try {
            dispatch(authActions.startFetching());
            const { data: token } = await api.login(userInfo);
            dispatch(authActions.setToken(token));
            localStorage.setItem('token', token);
            dispatch(toastActions.setSuccess('Добро пожаловать!'));

            return token;
        } catch (error) {
            const { message } = error as AxiosError;
            dispatch(toastActions.setError(message));
        } finally {
            dispatch(authActions.stopFetching());
        }
    },
});
