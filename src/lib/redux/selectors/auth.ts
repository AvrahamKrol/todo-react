import { RootState } from '../init/store';

export const getToken = (state: RootState): string => {
    return state.auth.token;
};

export const getIsloggedin = (state: RootState): boolean => {
    return state.auth.isLoggedin;
};
