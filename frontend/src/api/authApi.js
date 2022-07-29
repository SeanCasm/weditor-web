import axios from "axios";
export const authApi = axios.create({
  baseURL: `${process.env.REACT_APP_API_URL}/auth`,
});

authApi.interceptors.request.use((config) => {
  config.headers = {
    ...config.headers,
    "x-token": localStorage.getItem("x-token"),
  };
  return config;
});
