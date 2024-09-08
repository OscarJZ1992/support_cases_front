import { IEvents } from "../Events"
import { IUsers } from "../Users"

export interface ISupport{
    id?: string,
    case_name: string,
    description: string,
    username?: string,
    action?: React.ReactNode
}

export interface ISupportCases {
    cases: ISupport[]
    users: IUsers[]
    events: IEvents[]
}

export interface ISupportActions extends ISupportCases{
    getSupportCases: () => void,
    getState: () => ISupportCases
    createSupport: (support: ISupport) => void
    deleteSupport: (id: string) => void
}