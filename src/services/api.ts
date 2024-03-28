import axios from "axios";

<<<<<<< HEAD
const api = axios.create({
  baseURL: "https://18.214.89.62:3000/api/"
});
=======
const api = axios.create(
  {  
    baseURL: "https://localhost:3000/api/",
    proxy: {
      host: 'localhost',
      port: 3000,
      
    }
  },  
);
>>>>>>> ba55462 (nginx)

export default api;
