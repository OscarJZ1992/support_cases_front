import { IItemsSideBar } from "@support-cases-app/types/components/Shared";
import { ROUTES } from "./routes";
import HomeIcon from "@support-cases-app/components/Shared/Icons/Home";

export const SIDE_BAR_LIST: IItemsSideBar[] = [{
    name: 'Home',
    path: ROUTES.HOME
},{
    name: 'Events',
    path: ROUTES.EVENTS
},{
    name: 'Users',
    path: ROUTES.USERS
},{
    name: 'Support',
    path: ROUTES.SUPPORT
},{
    name: 'Logs',
    path: ROUTES.LOGS
},{
    name: 'Logout',
    path: "/logout"
}]
