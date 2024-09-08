import { IEvents } from "@support-cases-app/types/bears/Events";
import api from "../../config/api.config";

export const sendEvent = async (event: IEvents) => {
  try {
    const response = await api.post(`/events/`, event);
    return response.data;
  } catch (error) {
    console.error('Error fetching user:', error);
    throw error;
  }
}

export const getAllEvents = async () => {
  try {
    const response = await api.get(`/events/`);
    if(response.status === 200){
      
    }
    return response.data;
  } catch (error) {
    console.error('Error fetching user:', error);
    throw error;
  }
}


export const deleteEvent = async (id: string) => {
  try {
    const response = await api.delete(`/events/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching user:', error);
    throw error;
  }
}