import axios from "axios";

const api = axios.create({
    baseURL: "https://notes-app-bpro.onrender.com/api"
})

export default api