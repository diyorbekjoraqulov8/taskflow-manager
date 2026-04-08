import { createBrowserRouter } from 'react-router-dom';
import AppLayout from '@/components/layouts/AppLayout';
import ProtectedRoute from './protectedRoute.tsx';
import LoginPage from "@/pages/auth/login/LoginPage.tsx";
import NotFound from "@/pages/NotFound.tsx";
import AppHomePage from "@/pages/app/AppHomePage.tsx";

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
                    { index: true, element: <AppHomePage /> },
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