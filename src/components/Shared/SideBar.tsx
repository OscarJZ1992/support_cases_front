import useLoginBears from "@support-cases-app/bears/components/Login/Login.bears";
import { SideBarProps } from "@support-cases-app/types/components/Shared"
import { useLocation, useNavigate } from "react-router-dom"
import "../../assets/styles/sideBar.css"

const SideBar: React.FC<SideBarProps> = ({ list }: SideBarProps) => {
    const { dispatchLogin } = useLoginBears();
    const navigate = useNavigate();
    const location = useLocation();

    const redirectTo = (path: string) => {
        if(path === '/logout'){
            dispatchLogin(false);
            localStorage.removeItem('token');
            localStorage.removeItem('user_id');
            navigate('/login');
            return;
        }else{
            navigate(path);
        }
    }
    
    return (
        <>
            <div style={{ boxShadow: '0px 0px 13px 1px #7e7e7e' }} className="p-5 w-[300px] bg-indigo-600 h-[95vh] rounded-l-md shadow-[0px 0px 13px 1px #7e7e7e] flex flex-col justify-between">
                <div>
                    {
                        list.slice(0, -1).map((item, index) => (
                            <div onClick={() => redirectTo(item.path)} key={index} className={`text-white rounded-lg py-2 px-4 flex items-center space-x-2 cursor-pointer hover:bg-indigo-700 hover:text-white ${location.pathname === item.path ? 'active' : ''}`}>
                                <div>{item.name}</div>
                            </div>
                        ))
                    }
                </div>
                <div onClick={() => redirectTo("/logout")} className={`text-white rounded-lg py-2 px-4 flex items-center space-x-2 cursor-pointer hover:bg-indigo-700 hover:text-white ${location.pathname === '/logout' ? 'active' : ''}`}>
                    <div>{list[list.length - 1]?.name}</div>
                </div>
            </div>
        </>
    )
}

export default SideBar;