import axios from "axios";

const api = axios.create({
  baseURL: "https://34.204.60.54:3000/api/"
});

export default api;
