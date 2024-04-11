import axios from "axios";

console.log('URL','http://127.0.0.1');


const api = axios.create({
  baseURL: "http://127.0.0.1:3000/api/"
});

export default api;
