import { createBrowserRouter } from 'react-router-dom';
import AppLayout from '@/components/layouts/AppLayout';
import ProtectedRoute from './protectedRoute.tsx';
import LoginPage from "@/pages/auth/login/LoginPage.tsx";
import NotFound from "@/pages/NotFound.tsx";
import StatisticsPage from "@/pages/app/statistics/StatisticsPage.tsx";
import ProjectsPage from "@/pages/app/projects/ProjectsPage.tsx";
import BoardsPage from "@/pages/app/boards/BoardsPage.tsx";
import TasksPage from "@/pages/app/tasks/TasksPage.tsx";

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
                    { index: true, element: <StatisticsPage /> },
                    { path: 'projects', element: <ProjectsPage /> },
                    { path: 'projects/:projectId/boards', element: <BoardsPage /> },
                    { path: 'projects/:projectId/boards/:boardId/tasks', element: <TasksPage /> },
                    { path: 'kanban', element: <div>kanban</div> },
                    { path: 'boards/:boardId', element: <div>boards ID</div> },
                    { path: 'calendar', element: <div>calendar</div> },
                    {
                        path: '*',
                        element: <NotFound />,
                    },
                ],
            }
        ],
    },
    {
        path: '*',
        element: <NotFound />,
    },
]);