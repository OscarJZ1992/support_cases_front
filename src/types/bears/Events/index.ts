export interface IEvents{
    id?: string,
    username?: string,
    action_type: string,
    created_at: string,
    user_id: number,
    information: string,
    action?: React.ReactNode
}

export interface IEventsDataState{
    events: IEvents[]
}

export interface IEventsActions extends IEventsDataState{
    dispatchEvents: (value: any) => void,
    getState: () => IEventsActions,
    getEvents: () => void
    deleteEvent: (id: string) => void
}