// Core
import axios from 'axios';
import {
    ISignupSchema, ILoginSchema, IToken,
} from '../types';

export const TODO_API_URL = 'https://lab.lectrum.io/rtx/api/v2/todos';
export const AUTH_URL = `${TODO_API_URL}/auth`;
export const TASKS_URL = `${TODO_API_URL}/tasks`;

export const api = Object.freeze({
    get token() {
        return localStorage.getItem('token');
    },

    async signup(userInfo: ISignupSchema): Promise<IToken> {
        const { data } = await axios.post<IToken>(`${AUTH_URL}/registration`, userInfo);

        return data;
    },

    async login(credentials: ILoginSchema): Promise<IToken> {
        const { email, password } = credentials;
        const { data } = await axios.get<IToken>(`${AUTH_URL}/login`,
            {
                headers: {
                    Authorization: `Basic ${window.btoa(`${email}:${password}`)}`,
                },
            });


        return data;
    },

    async logout() {
        await axios.get(`${AUTH_URL}/logout`,
            {
                headers: {
                    Authorization: `Bearer ${api.token}`,
                },
            });
    },
});
