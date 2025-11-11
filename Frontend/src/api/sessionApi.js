import axiosInstance from "./axiosInstance";

export const startSession = async () => {
  const response = await axiosInstance.post("/start-session");
  return response.data.data;
};

export const getSessionById = async (unique_id) => {
  const response = await axiosInstance.get(`/session/${unique_id}`);
  return response.data.data;
};
