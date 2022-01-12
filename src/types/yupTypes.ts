export interface ILoginSchema {
    email: string;
    password: string;
}

export interface ISignupSchema {
    name: string;
    email: string;
    password: string;
    confirmPassword: string;
}

export interface ITaskCard {
    title: string;
    desc: string;
}
