import { ITheadProps } from "@support-cases-app/types/components/Shared"

export const TYPES_ALERTS: {[key: string]: string} = {
    WARNING: 'warning',
    ERROR: 'error',
    SUCCESS: 'success',
}

export const ACTIONS_PLATFORM: {[key: string]: string} = {
    LOGIN: 'login',
    LOGOUT: 'logout',
    VIEW_DETAIL: 'viewDetail',
    GET_USER_BY_NAME: 'getUserByName',
    GET_USER_BY_NAME_SERVICE: 'getUserByNameService',
    SEND_EVENT: 'sendEvent',
    GET_STATE: 'getState',
    DISPATCH_LOGIN: 'dispatchLogin',
    SET_VALUE: 'setValue',
}

export const HEADERS_EVENTS: ITheadProps[] = [{
    Header: 'Id',
    accessor: 'id'
},{
    Header: 'Action Type',
    accessor: 'action_type'
},{
    Header: 'Created At',
    accessor: 'created_at'
},{
    Header: 'User Id',
    accessor: 'user_id'
},{
    Header: 'User Name',
    accessor: 'username'
},{
    Header: 'Information',
    accessor: 'information'
},{
    Header: 'Action',
    accessor: 'action'
}]


export const HEADERS_USERS: ITheadProps[] = [{
    Header: 'Id',
    accessor: 'id'
},{
    Header: 'User Name',
    accessor: 'userName'
},{
    Header: 'Action',
    accessor: 'action'
}]


export const HEADERS_SUPPORT_CASES: ITheadProps[] = [{
    Header: 'Id',
    accessor: 'id'
},{
    Header: 'Case Name',
    accessor: 'case_name'
},{
    Header: 'Description',
    accessor: 'description'
},{
    Header: 'Created At',
    accessor: 'created_at'
},{
    Header: 'User Id',
    accessor: 'user_id'
},{
    Header: 'User Name',
    accessor: 'username'
},{
    Header: 'Action',
    accessor: 'action'
}]

export const HEADERS_LOGS: ITheadProps[] = [{
    Header: 'Id',
    accessor: 'id'
},{
    Header: 'Data',
    accessor: 'data'
}]