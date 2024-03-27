import axios from "axios";

const api = axios.create({
  baseURL: "https://18.214.89.62:3000/api/"
});

export default api;
