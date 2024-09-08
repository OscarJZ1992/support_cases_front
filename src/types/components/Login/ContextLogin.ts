export interface ILoginDetail{
    value: boolean;
    setValue: (value: boolean) => void;
}

export interface ILogin extends ILoginDetail{
    dispatchLogin: (value: boolean) => void;
    viewDetail: () => void;
    getState: () => ILoginDetail;
    getUserByName: (userName: string) => void;
}

export interface IChildContextLogin{
    children: React.ReactNode;
}