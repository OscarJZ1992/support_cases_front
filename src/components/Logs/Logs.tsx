import useEventsBears from "@support-cases-app/bears/components/Events/Events.bears";
import { useCallback, useEffect } from "react";
import Label from "../Shared/Label";
import Table from "../Shared/Table/Table";
import { HEADERS_LOGS } from "@support-cases-app/utils/constants/constants";
import { IEvents } from "@support-cases-app/types/bears/Events";
import IconTrash from "../Shared/Icons/IconTrash";
import useAlertBears from "@support-cases-app/bears/Alert";
import useLogsBears from "@support-cases-app/bears/components/Logs";
import { ILogs } from "@support-cases-app/types/components/Logs";


const LogsComponent: React.FC = () => {
    const { getState, getAllLogs } = useLogsBears()
    const logsState = getState()

    useEffect(() => {
        console.log("entro")
        getAllLogs()
    }, [getAllLogs]);
    

    return (
        <div className="space-y-4">
            <Label text="Logs"/>
            <div className="max-h-[800px] overflow-y-scroll ">     
                <Table data={logsState.logs.map((item: ILogs) => {
                    return {
                        ...item
                    }
                })} headers={HEADERS_LOGS}/>
            </div>
        </div>
    );
}

export default LogsComponent