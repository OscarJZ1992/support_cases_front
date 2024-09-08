import { IChildrenRoute } from "@support-cases-app/types/routes.types";
import { Routes } from "react-router-dom";

const CustomRoutes: React.FC<IChildrenRoute> = ({children}: IChildrenRoute) => {
    return (
        <Routes>
            {children}
        </Routes>
    );
}

export default CustomRoutes