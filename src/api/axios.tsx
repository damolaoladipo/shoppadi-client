import axios from "axios";
import Auth from "./auth";



const BaseURL = process.env.SHOPERY_API_URL_LOCAL

export const axiosPublic = axios.create({
    baseURL: BaseURL,
})

export const axiosPrivate = axios.create({
    baseURL: BaseURL,
    headers: {
        "Content-Type": "application/json"
    },
})

const api = {
    auth: new Auth(axiosPublic, axiosPrivate)
}

axiosPrivate.interceptors.request.use(
    function (config: any) {
        const authToken = JSON.parse(localStorage.getItem("authToken") as any)

        config.headers.authorization = `Bearer: ${authToken}`
        return config
    },
    function (error: any) {
        return Promise.reject(error)
    }
)

axiosPrivate.interceptors.response.use(
    function (response) {
        return response
    },
    function (error) {
        if (error?.response?.status === 403) {
            localStorage.removeItem("authToken")
            window.location.href = "/login"
        }
        return Promise.reject(error)
    }
)

export default api