import { Routes } from '@routes/app.router';
import { Fragment, Suspense, useLayoutEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getEmployees } from './utils/get-employees';
import { RootState } from './store';

import { setEmployees } from './store/slices/employees.slice';
import { IEmployee } from './store/slices/slices.defs';
import { setError, setLoading } from './store/slices/app.slice';

export const App = () => {
    const dispatch = useDispatch();
    const appLoading = useSelector((state: RootState) => state.app.appLoading);
    const { employees, loading: apiLoading, error } = getEmployees();

    useLayoutEffect(() => {
        if (error) {
            dispatch(setError(true));
        }

        if (employees) {
            dispatch(setLoading(false));
            dispatch(setEmployees(employees as IEmployee[]));
        }
    }, [apiLoading, error, employees]);

    if (appLoading) {
        return <p>Uygulama Yükleniyor...</p>;
    }

    return (
        <Suspense fallback={<p>Page loading...</p>}>
            <Routes />
        </Suspense>
    );
};
