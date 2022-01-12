import { FC } from 'react';
import { Nav } from '../Nav';
import { Footer } from '../Footer';

export const Profile: FC = () => {
    return (
        <>
            <Nav />
            <main>
                <h1>Профиль пользователя</h1>
            </main>
            <Footer />
        </>
    );
};
