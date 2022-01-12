import { FC } from 'react';
import { MainWrapper } from '../../pages';
import { Footer } from '../Footer';

export const TaskManager:FC = () => {
    return (
        <>
            <MainWrapper>
                <div className = 'controls'>
                    <button className = 'button-create-task'>Новая задача</button>
                </div>
                <div className = 'wrap'>
                    <div className = 'list empty'>
                        <div className = 'tasks'></div>
                    </div>
                </div>
            </MainWrapper>
            <Footer />
        </>
    );
};

