import axios from "axios";

const BASE_URL = "https://64de2a4b825d19d9bfb23818.mockapi.io/api";

const api = axios.create({
  baseURL: BASE_URL,
});

export const fetchJobData = async (endpoint: any) => {
  try {
    const response = await api.get(endpoint);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const handlePostData = async (endpoint: any, data: any) => {
  try {
    const response = await axios.post(`${BASE_URL}/${endpoint}`, data);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const handleUpdateData = async (endpoint: any, payload: any) => {
  try {
    const response = await axios.put(
      `${BASE_URL}${endpoint}/${payload.id}`,
      payload
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const handleDeleteData = async (endpoint: any, id: any) => {
  try {
    const response = await axios.delete(`${BASE_URL}/${endpoint}/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};
