import axios from "axios";
export const userApi = axios.create({
  baseURL: `${process.env.REACT_APP_API_URL}/users`,
});