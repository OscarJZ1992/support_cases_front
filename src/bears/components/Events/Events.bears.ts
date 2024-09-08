import { create } from 'zustand'
import { EventsData } from '@support-cases-app/types/bears/Events/states'
import { IEvents, IEventsActions } from '@support-cases-app/types/bears/Events';
import { deleteEvent, getAllEvents, sendEvent } from '@support-cases-app/services/Events';

const useEventsBears = create<IEventsActions>((set, get) => {
    return {
        ...EventsData,
        dispatchEvents: (value: Partial<IEvents>) => {
            console.log('Setting value in localStorage:', value); 
        },
        getState: () => get(),
        getEvents: async () => {
            const response = await getAllEvents()
            if(response.status === 200){
                const currentEvents = get().events
                const eventsResponse = JSON.parse(response.events)
                set({
                    ...currentEvents,
                    events: eventsResponse
                })
            }
        },
        deleteEvent: async (id: string) => {
            const response = await deleteEvent(id)
            if(response.status === 200){
                const currentEvents = get().events
                const eventsResponse = JSON.parse(response.events)
                await sendEvent({
                    action_type: 'DELETE',
                    created_at: new Date().toISOString().split('T')[0],
                    user_id: Number(localStorage.getItem('user_id')),
                    information: `Event deleted with id: ${id}`
                })
                get().getEvents()
                set({
                    ...currentEvents,
                    events: eventsResponse
                })
            
            }
        },
        sendEvent: async (event: IEvents) => {
            const response = await sendEvent(event)
            if(response.status === 200){
                debugger
                const currentEvents = get().events
                const eventsResponse = JSON.parse(response.events)
                set({
                    ...currentEvents,
                    events: eventsResponse
                })
            }
        }
    }
})

export default useEventsBears