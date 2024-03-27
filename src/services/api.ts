import axios from "axios";

const api = axios.create({
  baseURL: "http://52.87.222.147:3000/api/"
});

export default api;