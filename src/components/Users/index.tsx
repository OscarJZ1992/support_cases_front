import { ButtonVariant } from "@support-cases-app/utils/constants/tailwind/tv/tailwind.constants";
import Label from "../Shared/Label";
import Button from "../Shared/Button";
import { useNavigate } from "react-router-dom";
import Table from "../Shared/Table/Table";
import IconTrash from "../Shared/Icons/IconTrash";
import { HEADERS_USERS, TYPES_ALERTS } from "@support-cases-app/utils/constants/constants";
import { IUsers } from "@support-cases-app/types/bears/Users";
import useUsersBears from "@support-cases-app/bears/components/Users/Users.bears";
import { useEffect } from "react";
import useAlertBears from "@support-cases-app/bears/Alert";

const UsersComponent = () => {
    const {getState, getUsers, deleteUser} = useUsersBears()
    const {setAlert} = useAlertBears()

    const usersState = getState()
    const navigate = useNavigate()

    const createUser = () => {
        navigate('/users/create')
    }

    const handleClickedRow = (row: IUsers) => {
        console.log(row)
    }
    const handleClickAction = (row: IUsers) => {
        deleteUser(row.id ? row.id : '')
        setAlert({message: "User deleted successfully", type: TYPES_ALERTS.SUCCESS})
    }

    useEffect(() => {
        getUsers()
    }, [getUsers])

    return (
        <div className="space-y-4">
            <div className="flex justify-between">
                <Label text="Users"/>
                <Button text="Create user" onClick={() => createUser()} className={ButtonVariant({
                    color: 'primary',
                    size: 'md'
                })}/> 
            </div>
            <div className="max-h-[800px] overflow-y-scroll ">
                <Table data={usersState.users.map((item: IUsers) => {
                    return {
                        ...item,
                        action: <IconTrash stroke="#FF0000" />
                    }
                })} headers={HEADERS_USERS} onRowClick={handleClickedRow} handleClickAction={handleClickAction}/>
            </div>
        </div>
    );
};

export default UsersComponent
