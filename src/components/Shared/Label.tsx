import { ILabelProps } from "@support-cases-app/types/components/Shared";

const Label: React.FC<ILabelProps> = ({ text }: ILabelProps) => {
    return (
        <div>
            <h1 className="text-2xl font-bold">{text}</h1>
        </div>
    );
}

export default Label