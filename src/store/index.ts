import { configureStore } from '@reduxjs/toolkit';
import { appSlice } from './slices/app.slice';
import { employeesSlice } from './slices/employees.slice';
import { logsSlice } from './slices/logs.slice';

export const createStore = () => {
    const store = configureStore({
        reducer: {
            app: appSlice.reducer,
            employees: employeesSlice.reducer,
            logs: logsSlice.reducer,
        },
    });

    return store;
};

export const store = createStore();

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
