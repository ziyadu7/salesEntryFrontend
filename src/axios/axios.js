import axios from "axios";

const axiosInstance = axios.create({
    baseURL:import.meta.VITE_SERVERURL
})

axiosInstance.interceptors.request.use(config=>{
    const token = localStorage.getItem('token')

    if(token){
        config.headers.Authorization = `Bearer ${token}`
    }
})

export default axiosInstance