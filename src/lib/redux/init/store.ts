// Core
import { createStore, applyMiddleware, AnyAction } from 'redux';
import { useDispatch, useSelector, TypedUseSelectorHook } from 'react-redux';
import { ThunkAction, ThunkDispatch } from 'redux-thunk';

// Instruments
import { rootReducer } from './rootReducer';
import {
    composeEnhancers,
    middleware,
} from './middleware';

export const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(...middleware)),
);

// eslint-disable-next-line
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
// eslint-disable-next-line
export type Action = { type: string; payload: unknown; error?: boolean };
// eslint-disable-next-line
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, AnyAction>;
export type TDispatch = ThunkDispatch<RootState, void, AnyAction>;
