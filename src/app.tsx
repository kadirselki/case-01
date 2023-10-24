import { Routes } from '@routes/app.router';
import { Suspense } from 'react';
import 'src/scss/main.scss';

export const App = () => {
    return (
        <Suspense fallback={<p>Loading...</p>}>
            <Routes />
        </Suspense>
    );
};
