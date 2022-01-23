export interface ITodos {
    completed: boolean;
    title: string;
    description: string;
    deadline: string;
    tag: string;
}

export interface ITag {
    id: string;
    name: string;
    color: string;
    bg: string;
}

export interface ITodoShape  {
    data?: {
        id: string;
        completed: boolean;
        title: string;
        description: string;
        deadline: string;
        tag: ITag;
    }
    id: string;
    completed: boolean;
    title: string;
    description: string;
    deadline: string;
    tag: ITag;
}

export interface ITodosShape {
    data: ITodoShape[],
}
