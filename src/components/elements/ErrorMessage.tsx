import { FC } from 'react';

type Props = {
    error: {
        message: string;
    }
};

export const ErrorMessage: FC<Props> = (props) => {
    return (
        <p className = 'errorMessage'>{ props.error?.message }</p>
    );
};
