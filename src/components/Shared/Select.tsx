import Select from 'react-select'

interface IOptionsSelect<T>{
    value: string,
    label: string
}

interface ISelect <T>{
    options: IOptionsSelect<T>[]
}

const SelectComponent = <T,>({options}: ISelect<T>): JSX.Element => {
    return (
        <Select options={options}/>
    )
}

export default SelectComponent