import axios from "axios";

const api = axios.create({
  baseURL: "https://perfume-1-zm0w.onrender.com/api", 
});

export default api;
