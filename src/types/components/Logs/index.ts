export interface ILogs{
    id: string,
    data: string
}

export interface ILogsProps{
    logs: ILogs[]
}

export interface ILogsActions extends ILogsProps{
    getState: () => ILogsActions,
    getAllLogs: () => void,
}