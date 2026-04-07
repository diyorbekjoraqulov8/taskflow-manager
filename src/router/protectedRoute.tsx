import { Navigate, Outlet, useLocation } from 'react-router-dom';

interface ProtectedRouteProps {
    children?: React.ReactNode;
}

export default function ProtectedRoute({ children }: ProtectedRouteProps) {
    // const { user } = useAuthStore();
    // const location = useLocation();
    //
    // if (!user) {
    //     return <Navigate to="/login" replace state={{ from: location }} />;
    // }

    return children ? <>{children}</> : <Outlet />;
}