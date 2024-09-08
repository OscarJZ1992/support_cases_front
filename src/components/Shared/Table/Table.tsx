import { ITableProps } from "@support-cases-app/types/components/Shared";
import THead from "./Thead";
import TBody from "./Tbody";

const Table = <T,>({ data, headers, onRowClick, handleClickAction }: ITableProps<T>): JSX.Element => {
    return (
        <table className="min-w-full table-auto border-collapse border border-gray-300 rounded-sm">
            <THead headers={headers} />
            <TBody data={data} onRowClick={onRowClick} columns={headers.map(header => header.accessor)} handleClickAction={handleClickAction} />  
        </table>
    )
}

export default Table;