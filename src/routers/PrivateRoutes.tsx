import { Navigate, Outlet } from 'react-router-dom';
import useLoginBears from '@support-cases-app/bears/components/Login/Login.bears';

const PrivateRoute = () => {
    const { getState } = useLoginBears();
    const isAuthenticated = getState().value;

    return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoute;