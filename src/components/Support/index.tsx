import useEventsBears from "@support-cases-app/bears/components/Events/Events.bears";
import { useCallback, useEffect } from "react";
import Label from "../Shared/Label";
import Table from "../Shared/Table/Table";
import { HEADERS_SUPPORT_CASES } from "@support-cases-app/utils/constants/constants";
import { IEvents } from "@support-cases-app/types/bears/Events";
import IconTrash from "../Shared/Icons/IconTrash";
import useAlertBears from "@support-cases-app/bears/Alert";
import { ISupport } from "@support-cases-app/types/bears/Support";
import useSupportBears from "@support-cases-app/bears/components/Support";
import Button from "../Shared/Button";
import { ButtonVariant } from "@support-cases-app/utils/constants/tailwind/tv/tailwind.constants";
import { useNavigate } from "react-router-dom";


const SupportCasesList: React.FC = () => {
    const {setAlert} = useAlertBears()
    const { getState, getSupportCases, deleteSupport } = useSupportBears()
    const supportState = getState()

    const navigate = useNavigate()

    const createSupport = () => {
        navigate('/support/create')
    }

    useEffect(() => {
        getSupportCases()
    }, [getSupportCases]);
    
    const handleClickedRow = (row: ISupport) => {
       console.log(row)
    }

    const handleClickAction = useCallback((row: ISupport) => {
        deleteSupport(`${row.id}`)
        setAlert({
            message: 'Support deleted',
            type: 'success'
        })
    }, []) 

    return (
        <div className="space-y-4">
            <div className="flex justify-between">
                <Label text="Support Cases List"/>
                <Button text="Create support" onClick={() => createSupport()} className={ButtonVariant({
                    color: 'primary',
                    size: 'sm'
                })}/> 
                
            </div>
            <div className="max-h-[800px] overflow-y-scroll ">
                <Table data={supportState.cases.map((item: ISupport) => {
                    return {
                        ...item,
                        action: <IconTrash stroke="#FF0000" />
                    }
                })} headers={HEADERS_SUPPORT_CASES} onRowClick={handleClickedRow} handleClickAction={handleClickAction}/>
            </div>
        </div>
    );
}

export default SupportCasesList