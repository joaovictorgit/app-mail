import axios from "axios";

const api = axios.create({
  baseURL: "http://172.168.10.182:4000/api",
});

export default api;
