import { sendEvent } from '@support-cases-app/services/Events';
import { getUserByNameService } from '@support-cases-app/services/Login';
import { LoginInitialState } from '@support-cases-app/types/bears/Login'
import { ILogin } from '@support-cases-app/types/components/Login/ContextLogin'
import { ACTIONS_PLATFORM } from '@support-cases-app/utils/constants/constants';
import { create } from 'zustand'

const useLoginBears = create<ILogin>((set, get) => {
    const storedValue = JSON.parse(localStorage.getItem('auth') || 'false');
    return {
            ...LoginInitialState,
            value: storedValue,
            dispatchLogin: (value: boolean) => {
                console.log('Setting value in localStorage:', value); 
                localStorage.setItem('auth', JSON.stringify(value));
                set({ value })
            } ,
            getState: () => get(),
            viewDetail: () => console.log('viewDetail'),
            getUserByName: async (userName: string) => {
                try {
                    const response = await getUserByNameService(userName);
                    if(response.status === 200){
                        get().dispatchLogin(true);
                        localStorage.setItem('user_id', response.id);
                        await sendEvent({
                            action_type: ACTIONS_PLATFORM.LOGIN.toUpperCase(),
                            created_at: new Date().toISOString().split('T')[0],
                            user_id: response.id,
                            information: 'User logged in'
                        });
                    }else{
                        alert('User not found')
                    }
                } catch (error) {
                    console.error('Error fetching user:', error);
                    throw error;
                }
            }
    }
})

export default useLoginBears