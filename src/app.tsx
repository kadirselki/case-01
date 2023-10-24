import { Routes } from '@routes/app.router';

import { Suspense } from 'react';

export const App = () => {
    return (
        <Suspense fallback={<p>Loading...</p>}>
            <Routes />
        </Suspense>
    );
};
