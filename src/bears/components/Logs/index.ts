import { ILogsActions } from '@support-cases-app/types/components/Logs'
import { create } from 'zustand'
import { LogsInitialState } from './states'
import { getLogs } from '@support-cases-app/services/Logs'

const useLogsBears = create<ILogsActions>((set, get) => {
    return {
        ...LogsInitialState,
        getState: () => get(),
        getAllLogs: async () => {
            const response = await getLogs()
            if(response.status === 200){
                set({
                    logs: JSON.parse(response.logs)
                })
            }
        }
    }
})

export default useLogsBears