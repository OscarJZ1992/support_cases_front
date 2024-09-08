import { IButtonProps } from "@support-cases-app/types/components/Shared";

const Button: React.FC<IButtonProps> = ({ text, ...props }) => {
  return <button {...props}>{text}</button>;
}

export default Button