import axios from "axios";

let BASE_URL = "https://dummyjson.com/";

 export let USER_API_INSTANCE = axios.create({
    baseURL : BASE_URL,
})



