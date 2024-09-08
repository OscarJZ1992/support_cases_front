import { InputVariant } from "@support-cases-app/utils/constants/tailwind/tv/tailwind.constants"
import Input from "../Shared/Input"
import { IInputFormSupport } from "@support-cases-app/types/components/Support/ContainerInput.types"

const InputFormSupport: React.FC<IInputFormSupport> = ({label, handleChange, ide}) => {
    return (
        <div className="flex flex-col">
            <label className="text-blue-500">{label}</label>
            <Input
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChange({ide, value: e.target.value})}
                placeholder={`Enter ${label}`}
                className={InputVariant({
                    variant: "outline",
                    size: "lg",
                    width: "xl"
                })}
            />
        </div>
    )
}

export default InputFormSupport