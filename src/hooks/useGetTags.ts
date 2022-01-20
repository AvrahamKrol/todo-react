import { todoApi } from '../api/todo';
import { ITag } from '../types';

export const useGetTags = async (): Promise<ITag[]> => {
    const tags = await todoApi.getTags();
    // eslint-disable-next-line
    console.log(tags);

    return tags;
};
