import EmployeePage from '@views/employee';
import ErrorPage from '@views/error';
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
    ]);
    return <RouterProvider router={router} />;
};
