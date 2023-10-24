import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { IAppState } from './slices.defs';

export const initialState: IAppState = {
    appLoading: true,
};

export const appSlice = createSlice({
    name: 'app',
    initialState,
    reducers: {
        setAppLoading: (state, { payload }: PayloadAction<boolean>) => {
            state.appLoading = payload;
        },
    },
});

export const { setAppLoading } = appSlice.actions;
