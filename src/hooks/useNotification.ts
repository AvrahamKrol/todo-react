import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { getNotification } from '../lib/redux/selectors';
import { toastOptions } from '../constants';
import { toastActions } from '../lib/redux/actions';

export const useNotification = () => {
    const data = useSelector(getNotification);
    const dispatch = useDispatch();

    useEffect(() => {
        if (data.type === 'error') {
            toast.error(data.notificationMessage, toastOptions);
            dispatch(toastActions.reset());
        }
        if (data.type === 'success') {
            toast.success(data.notificationMessage, toastOptions);
            dispatch(toastActions.reset());
        }
        if (data.type === 'info') {
            toast.info(data.notificationMessage, toastOptions);
            dispatch(toastActions.reset());
        }
    }, [data]);
};
