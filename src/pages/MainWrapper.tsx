import { FC } from 'react';
import { Nav } from '../components';
import { IIsLogged } from '../types';

export const MainWrapper: FC<IIsLogged> = (props) => {
    return (
        <>
            <Nav />
            <main>
                { props.children }
            </main>
        </>
    );
};
