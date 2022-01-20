import { RootState } from '../init/store';

type Props = {
    type: string;
    notificationMessage: string;
};

export const getNotification = (state: RootState): Props => {
    return {
        type:                state.toast.type,
        notificationMessage: state.toast.notificationMessage,
    };
};
