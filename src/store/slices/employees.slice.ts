import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { IEmployeeState } from './slices.defs';

export const initialState: IEmployeeState = {
    list: null,
};

export const employeesSlice = createSlice({
    name: 'employees',
    initialState,
    reducers: {
        setVotes: (state, { payload }: PayloadAction<{ id: string; votes: number }>) => {
            const { id, votes } = payload;
            const employee = state.list?.find((employee) => employee.id === id);
            if (employee) {
                employee.votes = votes;
            }
        },
        setEmployees: (state, { payload }: PayloadAction<IEmployeeState['list']>) => {
            state.list = payload;
        },
    },
});

export const { setVotes, setEmployees } = employeesSlice.actions;
