import { create } from 'zustand'
import { UsersDataInitialState } from '@support-cases-app/types/bears/Users/states';
import { IUsers, IUsersActions } from '@support-cases-app/types/bears/Users';
import { getAllUsers, saveUser, deleteUserById } from '@support-cases-app/services/Users';
import { sendEvent } from '@support-cases-app/services/Events';

const useUsersBears = create<IUsersActions>((set, get) => {
    return {
        ...UsersDataInitialState,
        dispatchUsers: (value: Partial<IUsers>) => {
            console.log('Setting value in localStorage:', value); 
            set({
                ...get(),
                ...value
            })
        },
        getState: () => get(),
        getUsers: async () => {
            const response = await getAllUsers()
            if(response.status === 200){
                set({
                    ...get(),
                    users: response.users
                })

            }
        },

        saveUser: async (user: IUsers) => {
            const response = await saveUser(user)
            if(response.status === 200){
                await sendEvent({
                    action_type: 'CREATED USER',
                    created_at: new Date().toISOString().split('T')[0],
                    user_id: Number(localStorage.getItem('user_id')),
                    information: `User Created with id: ${response.id}`
                })
                set({
                    ...get(),
                    users: [...get().users, response.user]
                })
            }
        },

        deleteUser: async (id: string) => {
            debugger
            const response = await deleteUserById(id)
            if(response.status === 200){
                debugger
                await sendEvent({
                    action_type: 'DELETED USER',
                    created_at: new Date().toISOString().split('T')[0],
                    user_id: Number(localStorage.getItem('user_id')),
                    information: `User Deleted with id: ${id}`
                })
                set({
                    ...get(),
                    users: get().users.filter((user: IUsers) => user.id !== id)
                })
            }
        }
    }
})

export default useUsersBears