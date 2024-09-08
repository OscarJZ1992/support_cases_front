import { ISupport } from "@support-cases-app/types/bears/Support";
import api from "../../config/api.config";

export const saveSupport = async (support: ISupport) => {
  try {
    debugger
    const response = await api.post(`/support/`, {
      case_name: support.case_name, 
      description: support.description, 
      user_id: localStorage.getItem('user_id'),
      created_at: new Date().toISOString().split('T')[0]
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching user:', error);
    throw error;
  }
}

export const getAllSupports = async () => {
  try {
    const response = await api.get(`/support/`);
    return response.data;
  } catch (error) {
    console.error('Error fetching user:', error);
    throw error;
  }
}


export const deleteSupportById = async (id: string) => {
  try {
    const response = await api.delete(`/support/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching user:', error);
    throw error;
  }
}