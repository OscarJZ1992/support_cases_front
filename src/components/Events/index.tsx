import useEventsBears from "@support-cases-app/bears/components/Events/Events.bears";
import { useCallback, useEffect, useState } from "react";
import Label from "../Shared/Label";
import Table from "../Shared/Table/Table";
import { HEADERS_EVENTS } from "@support-cases-app/utils/constants/constants";
import { IEvents } from "@support-cases-app/types/bears/Events";
import IconTrash from "../Shared/Icons/IconTrash";
import useAlertBears from "@support-cases-app/bears/Alert";
import { InputVariant } from "@support-cases-app/utils/constants/tailwind/tv/tailwind.constants";
import Input from "../Shared/Input";


const EventsComponent: React.FC = () => {
    const { getState, getEvents, deleteEvent } = useEventsBears()
    const {setAlert} = useAlertBears()
    const eventsState = getState()
    const [filterData, setFilterData] = useState<string>('')
    const [filteredEvents, setFilteredEvents] = useState(eventsState.events);


    useEffect(() => {
        getEvents()
    }, [getEvents]);
    
    const handleClickedRow = (row: IEvents) => {
       console.log(row)
    }

    const handleClickAction = useCallback((row: IEvents) => {
        deleteEvent(row.id as string)
        setAlert({
            message: 'Event deleted',
            type: 'success'
        })
    }, [deleteEvent, setAlert]) 



    useEffect(() => {
        if (filterData === '') {
            setFilteredEvents(eventsState.events);
        } else {
            const filtered = eventsState.events.filter(event =>
                Object.values(event).some(value =>
                    String(value).toLowerCase().includes(filterData.toLowerCase())
                )
            );
            setFilteredEvents(filtered);
        }
    }, [filterData, eventsState.events]);

    const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFilterData(e.target.value);
    };

    return (
        <div className="space-y-4">
            <Label text="Events"/>
            <div className="max-h-[800px] overflow-y-scroll space-y-2">
                <Input onChange={(e) => handleFilterChange(e)} placeholder="Filter" className={InputVariant({
                    size: 'md',
                    variant: 'outline'
                })}/>
                <Table data={filteredEvents.map((item: IEvents) => {
                    return {
                        ...item,
                        action: <IconTrash stroke="#FF0000" />
                    }
                })} headers={HEADERS_EVENTS} onRowClick={handleClickedRow} handleClickAction={handleClickAction}/>
            </div>
        </div>
    );
}

export default EventsComponent