import axios from "axios";
export const levelApi = axios.create({
  baseURL: "http://localhost:4000/api/level",
});
