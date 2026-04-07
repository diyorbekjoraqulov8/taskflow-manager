import { createBrowserRouter } from 'react-router-dom';
import AppLayout from '@/components/layouts/AppLayout';
import ProtectedRoute from './protectedRoute.tsx';
import LoginPage from "@/pages/auth/login/LoginPage.tsx";
import NotFound from "@/pages/NotFound.tsx";

export const router = createBrowserRouter([
    {
        path: '/login',
        element: <LoginPage />,
    },
    {
        path: '/',
        element: <AppLayout />,
        errorElement: <NotFound />,
        children: [
            {
                element: <ProtectedRoute />,     // ← Bitta marta yoziladi
                children: [
                    { index: true, element: <div>Home</div> },
                    { path: 'boards', element: <div>boards</div> },
                    { path: 'boards/:boardId', element: <div>boards ID</div> },
                    { path: 'calendar', element: <div>calendar</div> },
                ],
            }
        ],
    },
    {
        path: '*',
        element: <NotFound />,
    },
]);