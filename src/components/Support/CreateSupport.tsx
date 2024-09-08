import { useState } from "react";
import Label from "../Shared/Label";
import { ISupport } from "@support-cases-app/types/bears/Support";
import { ButtonVariant } from "@support-cases-app/utils/constants/tailwind/tv/tailwind.constants";
import InputFormSupport from "./ContainerInput";
import Button from "../Shared/Button";
import useSupportBears from "@support-cases-app/bears/components/Support";
import useAlertBears from "@support-cases-app/bears/Alert";
import { useNavigate } from "react-router-dom";

const CreateSupportComponent = () => {
    const { createSupport} = useSupportBears();
    const { setAlert } = useAlertBears();
    const navigate = useNavigate();
    const [support, setSupport] = useState<ISupport>({
        case_name: "",
        description: "",
    });

    const handleChange = (e: {ide: string, value: string}) => {
        const { ide, value } = e;
        setSupport(prevState => ({ 
            ...prevState,
            [ide]: value 
        }));
    }

    const createNewSupport = () => {
        createSupport(support)
        setAlert({message: "Support created successfully", type: "success"})
        navigate('/support')
    }

    return (
        <div className="space-y-5 ">
            <Label text="Support Cases List > Create Support" />
            <div className="justify-between space-y-3">
                <div className="flex space-x-10">
                    <InputFormSupport ide="case_name" label="Case Name" handleChange={handleChange}/>
                    <InputFormSupport ide="description" label="Description" handleChange={handleChange}/>
                </div>
            </div>
            <div>
                <Button disabled={support.case_name.trim() === '' || support.description.trim() === ''} className={
                    ButtonVariant({
                        size: "md",
                        color: (support.case_name.trim() === '' || support.description.trim() === '') ? "disabled" : "primary"
                    })} 
                    text="Create Support" 
                    onClick={() => createNewSupport()}
                />
            </div>
        </div>
    )
}

export default CreateSupportComponent;