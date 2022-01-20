import axios from 'axios';
import { TASKS_URL, TODO_API_URL, api } from '.';
import {
    ITodos, ITodoShape, ITodosShape, ITag,
} from '../types';

export const todoApi = Object.freeze({
    async addTodo(todo: ITodos): Promise<ITodoShape> {
        const { data } = await axios.post<ITodoShape>(`${TASKS_URL}`,
            todo,
            {
                headers: {
                    Authorization: `Bearer ${api.token}`,
                },
            });

        return data;
    },
    async getTodos(): Promise<ITodosShape> {
        const { data } = await axios.get<ITodosShape>(`${TASKS_URL}`, {
            headers: {
                Authorization: `Bearer ${api.token}`,
            },
        });

        return data;
    },
    async getTags(): Promise<ITag[]> {
        const { data: tags } = await axios.get<ITag[]>(`${TODO_API_URL}/tags`);

        return tags;
    },
});
