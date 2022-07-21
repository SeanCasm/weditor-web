import axios from "axios";
export const authApi = axios.create({
  baseURL: "http://localhost:4000/api/auth",
});

authApi.interceptors.request.use(config => {
  config.headers = {
    ...config.headers,
    "x-token": localStorage.getItem("x-token")
  }
  return config;
});