import EmployeePage from '@views/employee';
import ErrorPage from '@views/error';
import Logs from '@views/logs-page';
import VotesPage from '@views/votes';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

export const Routes = () => {
    const router = createBrowserRouter([
        {
            path: '/',
            element: <VotesPage />,
            errorElement: <ErrorPage />,
        },
        {
            path: '/employee/:id',
            element: <EmployeePage />,
            errorElement: <ErrorPage />,
        },
        {
            path: '/logs',
            element: <Logs />,
            errorElement: <ErrorPage />,
        },
        {
            path: '/error',
            element: <ErrorPage />,
            errorElement: <p>APP ERROR!</p>,
        },
    ]);
    return <RouterProvider router={router} />;
};
