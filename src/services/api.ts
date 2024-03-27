import axios from "axios";

const api = axios.create({
  baseURL: "https://54.82.15.55:3000/api/"
});

export default api;
