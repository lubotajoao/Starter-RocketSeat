import axios from "axios";

const api = axios.create({ baseURL: "http://localhost:30013/api" });

export default api;
