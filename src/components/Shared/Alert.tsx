import useAlertBears from "@support-cases-app/bears/Alert";
import { TYPES_ALERTS } from "@support-cases-app/utils/constants/constants";
import { useEffect, useState } from "react";

const Alert = () => {
    const style: React.CSSProperties = {
        position: "absolute",
        bottom: "40px",
        right: "220px"
    }
    
    const { getState } = useAlertBears()
    const [showAlert, setShowAlert] = useState<boolean>(false)
    
    useEffect(() => {
        if(getState().message && getState().type){
            setShowAlert(true)
            setTimeout(() => {
                setShowAlert(false)
            }, 5000)
        }
    }, [getState().message, getState().type]);

    if(!showAlert) return null;

    return (
        <>
            {
                getState().type === TYPES_ALERTS.WARNING ? <div style={style} className="bg-yellow-200 w-[300px] text-center text-yellow-600 p-4 border border-yellow-600 rounded-xl">
                    {getState().message}
                </div> : getState().type === TYPES_ALERTS.ERROR ? <div style={style} className="bg-red-200 w-[300px] text-center text-red-600 p-4 border border-red-600 rounded-xl">
                    {getState().message}
                </div> : getState().type === TYPES_ALERTS.SUCCESS ? <div style={style} className="bg-green-200 w-[300px] text-center text-green-600 p-4 border border-green-600 rounded-xl">
                    {getState().message}
                </div> : null
            }
        </>
    )
}

export default Alert;