import axios from "axios";

const API = axios.create({
  baseURL:import.meta.env.API,
});

export default API;