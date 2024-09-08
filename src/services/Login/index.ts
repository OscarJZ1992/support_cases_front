import api from "../../config/api.config";

export const getUserByNameService = async (userName: string) => {
  try {
    const response = await api.get(`/user?user_name=${userName}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching user:', error);
    throw error;
  }
}