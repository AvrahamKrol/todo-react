// Core
import { FC, useState } from 'react';

// Components
import { Button } from '../elements';
import { MainWrapper } from '../../pages';
import { TaskCard } from './TaskCard';
import { Footer } from '../Footer';

export const TaskManager:FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const onClick = (): void => {
        setIsOpen(true);
    };

    return (
        <>
            <MainWrapper>
                <div className = 'controls'>
                    <Button
                        class = { 'button-create-task' }
                        onClick = { onClick } >Новая задача</Button>
                </div>
                <div className = 'wrap'>
                    <div className = 'list empty'></div>
                    { isOpen && <div className = 'task-card'>
                        <TaskCard />
                    </div> }
                </div>
            </MainWrapper>
            <Footer />
        </>
    );
};

