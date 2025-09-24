import axios from "axios";

const API_URL = "http://localhost:30081/tasks"; // K8s NodePort

export const getTasks = () => axios.get(API_URL);
export const getTaskById = (id: string) => axios.get(`${API_URL}/${id}`);
export const searchTasks = (name: string) =>
  axios.get(`${API_URL}/search?name=${name}`);
export const createTask = (task: any) => axios.put(API_URL, task);
export const deleteTask = (id: string) => axios.delete(`${API_URL}/${id}`);
export const runTask = (id: string) => axios.put(`${API_URL}/${id}/execute`);
