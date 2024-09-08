export interface IUsers{
    id?: string,
    username: string,
}

export interface IUsersData{
    users: IUsers[]
}

export interface IUsersActions extends IUsersData{
    dispatchUsers: (value: IUsers) => void,
    getUsers: () => void
    getState: () => IUsersData,
    deleteUser: (id: string) => void
    saveUser: (user: IUsers) => void
}