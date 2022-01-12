// Core
import { FC } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
// Components
import { TaskManager, Profile } from './components';
import { Login, Signup } from './components/forms';


// Instruments

export const App: FC = () => {
    return (
        <>
            <Routes>
                <Route path = '/todo/login' element = { <Login /> } />
                <Route path = '/todo/signup' element = { <Signup />  } />
                <Route path = '/todo/task-manager' element = { <TaskManager />  } />
                <Route path = '/todo/profile' element = { <Profile />  } />
                <Route path = '*' element = { <Navigate to = '/todo/login' replace /> } />
            </Routes>
        </>
    );
};
