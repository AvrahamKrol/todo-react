import axios from 'axios';
import { TASKS_URL, TODO_API_URL, api } from '.';
import {
    ITodos, ITodoShape, ITodosShape, ITag,
} from '../types';

export const todoApi = Object.freeze({
    async addTodo(todo: ITodos): Promise<ITodoShape> {
        const { data } = await axios.post<{ data: ITodoShape }>(`${TASKS_URL}`,
            todo,
            {
                headers: {
                    Authorization: `Bearer ${api.token}`,
                },
            });

        return data.data;
    },
    async getTodoById(id: string | undefined): Promise<ITodoShape | undefined> {
        const { data } = await axios.get<ITodoShape>(`${TASKS_URL}/${id}`,
            {
                headers: {
                    Authorization: `Bearer ${api.token}`,
                },
            });

        return data.data;
    },
    async updateTodoById(id: string, body: ITodos): Promise<ITodoShape | undefined> {
        const { data } = await axios.put<ITodoShape>(`${TASKS_URL}/${id}`,
            body,
            {
                headers: {
                    Authorization: `Bearer ${api.token}`,
                },
            });

        // eslint-disable-next-line
            console.log(data.data);

        return data.data;
    },
    async deleteTodo(id: string): Promise<void> {
        await axios.delete<void>(`${TASKS_URL}/${id}`,
            {
                headers: {
                    Authorization: `Bearer ${api.token}`,
                },
            });
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
