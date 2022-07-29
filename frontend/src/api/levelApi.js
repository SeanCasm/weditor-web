import axios from "axios";
export const levelApi = axios.create({
  baseURL: `${process.env.REACT_APP_API_URL}/level`,
});
export const levelInfoApi = axios.create({
  baseURL: `${process.env.REACT_APP_API_URL}/levelInfo`,
});
export const ratingApi = axios.create({
  baseURL: `${process.env.REACT_APP_API_URL}/rating`,
});
ratingApi.interceptors.request.use((config) => {
  config.headers = {
    ...config.headers,
    "x-token": localStorage.getItem("x-token"),
  };
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
