import api from "../../config/api.config";
import { IUsers } from "@support-cases-app/types/bears/Users";

export const saveUser = async (user: IUsers) => {
  try {
    const response = await api.post(`/user/`, {userName: user.username});
    return response.data;
  } catch (error) {
    console.error('Error fetching user:', error);
    throw error;
  }
}

export const getAllUsers = async () => {
  try {
    const response = await api.get(`/users/`);
    return response.data;
  } catch (error) {
    console.error('Error fetching user:', error);
    throw error;
  }
}


export const deleteUserById = async (id: string) => {
  try {
    const response = await api.delete(`/user/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching user:', error);
    throw error;
  }
}