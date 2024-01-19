import axios from "axios";

const axiosInstance = axios.create({
    baseURL:import.meta.VITE_SERVERURL,
    headers:{
        "Content-Type":'application/json'
    }
})

export default axiosInstance