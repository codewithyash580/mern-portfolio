import axios from "axios";

dotenv.config();
const API = axios.create({
  baseURL:import.meta.env.API,
});

export default API;