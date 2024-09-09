import { IEvents } from "@support-cases-app/types/bears/Events";

export interface IItemsSideBar{
    name: string;
    path: string;
}


export interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    text: string
}

export interface IInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    placeholder: string;
}

export interface SideBarProps {
    list: IItemsSideBar[]
}

export interface ILabelProps{
    text: string;
}

export interface ITheadProps{
    accessor: string;
    Header: string
}

export interface ITHeadData<T> extends Pick<ITableProps<T>, 'headers'>{
    
}

export interface ITableProps<T>{
    data: T[];
    headers: ITheadProps[];
    onRowClick: (row: T) => void;
    handleClickAction: (row: T) => void;
}


export interface ITBodyProps<T> extends Pick<ITableProps<T>, 'data' | 'onRowClick' | 'handleClickAction'>{
    columns: string[];
    action?: React.ReactNode
}