import axios from "axios";

const token = localStorage.getItem('token')
const VITE_BASE_URL = import.meta.env.VITE_BASE_URL

const axiosConfig = axios.create({
  baseURL: VITE_BASE_URL,
  hedears: {
    'Content-Type': 'application/json; charset=UTF-8',
    'access-token': token,
  }

});

export default axiosConfig
