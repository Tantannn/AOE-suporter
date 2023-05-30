import axios from "axios";

const axiosInstance = axios.create({ baseURL: 'https://aoe4world.com/api/' });

export default axiosInstance