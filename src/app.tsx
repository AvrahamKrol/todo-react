// Core
import { FC } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
// Components
import { Nav } from './components';
import { Login, Signup } from './components/forms';


// Instruments

export const App: FC = () => {
    return (
        <>
            <Nav />
            <main>
                <Routes>
                    <Route path = '/todo/login' element = { <Login /> } />
                    <Route path = '/todo/signup' element = { <Signup />  } />
                    <Route path = '*' element = { <Navigate to = '/todo/login' replace /> } />
                </Routes>

                { /* <h1>Органайзер</h1> */ }
                { /* <Login /> */ }
                { /* <Signup /> */ }
            </main>
        </>
    );
};
