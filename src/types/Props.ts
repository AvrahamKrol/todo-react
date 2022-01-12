export interface IIsLogged {
    isLogged?: boolean;
}

export interface IButton {
    type?: 'button' | 'reset' | 'submit';
    onClick?: () => void,
    class: string;
}
