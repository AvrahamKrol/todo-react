export interface IIsLogged {
    isLogged?: boolean;
}

export interface IButton {
    type?: 'button' | 'reset' | 'submit';
    onSetNewTask?: () => void,
    onClick?: () => void,
    class: string;
}

export interface IToken {
    data: string;
}

export interface IToastType {
    position: string;
    autoClose: number;
    eProgressBar: boolean,
    closeOnClick:    boolean,
    pauseOnHover:    boolean,
    draggable:       boolean,
    progress:        undefined,
}
