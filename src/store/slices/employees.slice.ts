import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { IEmployeeState } from './slices.defs';

export const initialState: IEmployeeState = {
    employees: null,
};

export const employeesSlice = createSlice({
    name: 'employees',
    initialState,
    reducers: {
        setVotes: (state, { payload }: PayloadAction<{ id: string; votes: number }>) => {
            const { id, votes } = payload;
            const employee = state.employees?.find((employee) => employee.id === id);
            if (employee) {
                employee.votes = votes;
            }
        },
    },
});

export const { setVotes } = employeesSlice.actions;
