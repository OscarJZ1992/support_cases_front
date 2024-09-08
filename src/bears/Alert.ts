import {create} from 'zustand';
interface IAlertActions{
    setAlert: (alert: Partial<IAlert>) => void;
    getState: () => IAlert;
}

interface IAlert extends IAlertActions{
    show: boolean;
    message: string;
    type: string;

}
const useAlertBears = create<IAlert>((set, get) => ({
    show: false,
    message: '',
    type: '',
    setAlert: (alert: Partial<IAlert>) => {
        set((state) => ({
            ...state,
            ...alert
        }));
    },
    getState: () => get()
}));

export default useAlertBears;