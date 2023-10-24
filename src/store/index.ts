import { configureStore } from '@reduxjs/toolkit';
import { appSlice } from './slices/app.slice';

export const createStore = () => {
    const store = configureStore({
        reducer: {
            app: appSlice.reducer,
        },
    });

    return store;
};

export const store = createStore();

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
