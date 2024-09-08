import { ITHeadData } from "@support-cases-app/types/components/Shared"

const THead = <T,>({ headers }: ITHeadData<T>): JSX.Element => {
    return (
        <thead >
            <tr className="bg-gray-700 text-white text-left">
                {headers.map((column, index) => (
                    <th className="border border-gray-300 px-4 py-2" key={index}>{column.Header}</th>
                ))}
            </tr>
        </thead>
    )
}

export default THead