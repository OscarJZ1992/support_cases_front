import api from "../../config/api.config";

export const getLogs = async () => {
  try {
    const response = await api.get(`/logs/`);
    return response.data;
  } catch (error) {
    console.error('Error fetching user:', error);
    throw error;
  }
}