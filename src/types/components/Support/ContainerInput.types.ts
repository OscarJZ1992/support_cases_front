export interface IInputFormSupport {
    label: string,
    ide: string,
    handleChange: (e: {ide: string, value: string}) => void,
}