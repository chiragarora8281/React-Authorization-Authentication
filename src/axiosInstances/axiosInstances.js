import axios, { Axios } from "axios";
let BASE_URL = "http://localhost:3000"
let AxiosInstances = axios.create({
    baseURL : BASE_URL,
})

export default AxiosInstances