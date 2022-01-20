import { RootState } from '../init/store';

export const getToken = (state: RootState): string => {
    return state.auth.token;
};
