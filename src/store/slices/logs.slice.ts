import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { ILogState } from './slices.defs';

export const initialState: ILogState = {
    logs: [],
};

export const logsSlice = createSlice({
    name: 'logs',
    initialState,
    reducers: {
        setLogs: (
            state,
            { payload }: PayloadAction<{ type: 'VİEW_PROFILE' | 'VOTE'; id: string; message: string }>,
        ) => {
            const { type, id, message } = payload;
            const log = { id, type, message, date: new Date().toISOString() };
            state.logs.push(log);
        },
    },
});

export const { setLogs } = logsSlice.actions;
