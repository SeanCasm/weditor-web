import axios from "axios";
export const levelApi = axios.create({
  baseURL: "http://localhost:4000/api/level",
});
export const levelInfoApi = axios.create({
  baseURL: "http://localhost:4000/api/levelInfo",
});
levelApi.interceptors.request.use((config) => {
  config.headers = {
    ...config.headers,
    "x-token": localStorage.getItem("x-token"),
  };
  return config;
});
levelInfoApi.interceptors.request.use((config) => {
  config.headers = {
    ...config.headers,
    "x-token": localStorage.getItem("x-token"),
  };
  return config;
});
