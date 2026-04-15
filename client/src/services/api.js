import axios from "axios";
import dotenv from "dotenv";

dotenv.config();
const API = axios.create({
  baseURL:import.meta.env.API,
});

export default API;