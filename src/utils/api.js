import axios from "axios";

const api = axios.create({
  baseURL: "https://m3-capstone-api.herokuapp.com"
});

export default api;

