import { IInputProps } from "@support-cases-app/types/components/Shared";

const Input: React.FC<IInputProps> = ({ placeholder, ...props }) => {
    return <input placeholder={placeholder} {...props} />;
};

export default Input
