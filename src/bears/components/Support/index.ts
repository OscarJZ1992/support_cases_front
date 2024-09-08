import { sendEvent } from '@support-cases-app/services/Events'
import { getAllSupports, saveSupport, deleteSupportById } from '@support-cases-app/services/Support'
import { ISupport, ISupportActions } from '@support-cases-app/types/bears/Support'
import { SupportInitialState } from '@support-cases-app/types/bears/Support/states'
import {create} from 'zustand'

const useSupportBears = create<ISupportActions>((set, get) => {
    return {
        ...SupportInitialState,
        getSupportCases: async () => {
            const response = await getAllSupports()
            if(response.status === 200) {
                set({
                    cases: JSON.parse(response.supports)
                })

            }
        },
        getState: () => get(),
        createSupport: async ({case_name, description}: ISupport) => {
            const response = await saveSupport({case_name, description})
            if(response.status === 200) {
                await sendEvent({
                    action_type: "SUPPORT CREATED",
                    created_at: new Date().toISOString().split('T')[0],
                    user_id: Number(localStorage.getItem('user_id')),
                    information: 'Created a new support case',
                });
            }
        },
        deleteSupport: async (id: string) => {
            const response = await deleteSupportById(id)
            if(response.status === 200) {
                await sendEvent({
                    action_type: "SUPPORT DELETED",
                    created_at: new Date().toISOString().split('T')[0],
                    user_id: Number(localStorage.getItem('user_id')),
                    information: 'Deleted a support case',
                });
                set({
                    cases: JSON.parse(response.supports)
                })
            }
        }
    }
})

export default useSupportBears