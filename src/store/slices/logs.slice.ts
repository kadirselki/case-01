import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { ILogState } from './slices.defs';

export const initialState: ILogState = {
    list: [],
};

export const logsSlice = createSlice({
    name: 'logs',
    initialState,
    reducers: {
        addLog: (
            state,
            { payload }: PayloadAction<{ type: 'VİEW_PROFILE' | 'VOTE'; employeeId: string; message: string }>,
        ) => {
            const { type, employeeId, message } = payload;
            const log = { employeeId, type, message, date: new Date().toISOString() };
            state.list.push(log);
        },
    },
});

export const { addLog } = logsSlice.actions;
