// Core
import { FC } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { ToastContainer, Slide } from 'react-toastify';

// Components
import { TaskManager, Profile } from './components';
import { Login, Signup } from './components/forms';


// Hooks
import { useNotification } from './hooks';

export const App: FC = () => {
    useNotification();

    return (
        <>
            <ToastContainer
                theme = 'colored'
                icon = { false } newestOnTop
                transition = { Slide } />;

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
