import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { IAppState } from './slices.defs';

export const initialState: IAppState = {
    appLoading: true,
    appError: false,
};

export const appSlice = createSlice({
    name: 'app',
    initialState,
    reducers: {
        setLoading: (state, { payload }: PayloadAction<boolean>) => {
            state.appLoading = payload;
        },
        setError: (state, { payload }: PayloadAction<boolean>) => {
            state.appLoading = false;
            state.appError = payload;
        },
    },
});

export const { setLoading, setError } = appSlice.actions;
