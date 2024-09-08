import { ITBodyProps } from "@support-cases-app/types/components/Shared"

const TBody = <T, >({ data, columns, onRowClick, handleClickAction }: ITBodyProps<T>) => {
    return (
        <tbody>
            {data.map((row, index) => (
                <tr className="bg-white cursor-pointer hover:bg-slate-600 hover:text-white" key={index} onClick={() => onRowClick(row)}>
                    {columns.map((column, index) => (
                        column === 'action' ? 
                        <td className="flex justify-center border border-gray-300 px-4 py-2" title="Delete event" onClick={() => handleClickAction({...row})} key={index}>{(row as any)[column]}</td> 
                        : 
                        <td className="border border-gray-300 px-4 py-2" key={index}>{(row as any)[column]}</td>
                    ))}
                </tr>
            ))}
        </tbody>
    )
}
export default TBody