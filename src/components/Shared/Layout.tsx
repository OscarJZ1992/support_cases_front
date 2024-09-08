import { SIDE_BAR_LIST } from "@support-cases-app/utils/constants/sideBarList"
import SideBar from "./SideBar"

const Layout = () => {
    return (
        <div>
            <SideBar list={SIDE_BAR_LIST}/>
        </div>
    )
}

export default Layout