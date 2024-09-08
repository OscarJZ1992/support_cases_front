import { Routes as RouterRoutes, Route } from 'react-router-dom';
import { ROUTES } from '@support-cases-app/utils/constants/routes';
import Login from '@support-cases-app/pages/Login/Login';
import Home from '@support-cases-app/pages/Home/Home';
import Events from '@support-cases-app/pages/Events';
import PrivateRoute from './PrivateRoutes';
import Users from '@support-cases-app/pages/Users';
import CreateUser from '@support-cases-app/pages/Users/CreateUser';
import SupportCases from '@support-cases-app/pages/Support';
import CreateSupport from '@support-cases-app/pages/Support/CreateSupport';
import Logs from '@support-cases-app/pages/Logs/Logs';

const Routes = () => {
    return (
        <RouterRoutes>
            <Route path={ROUTES.LOGIN} element={<Login />} />
            <Route element={<PrivateRoute />}>
                <Route path={ROUTES.HOME} element={<Home />} />
                <Route path={ROUTES.EVENTS} element={<Events />} />
                <Route path={ROUTES.USERS} element={<Users />} />
                    <Route path={ROUTES.CREATE_USERS} element={<CreateUser />} />
                <Route path={ROUTES.SUPPORT} element={<SupportCases />} />
                    <Route path={ROUTES.CREATE_SUPPORT} element={<CreateSupport />} />
                <Route path={ROUTES.LOGS} element={<Logs />} />
                
            </Route>
        </RouterRoutes>
    );
};

export default Routes;