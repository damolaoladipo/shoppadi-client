import axios from "axios";
import Auth from "./auth";
import Address from "./address";
import Cart from "./cart";
import Notification from "./notifcation";
import Order from "./order";
import OrderItem from "./orderitem";
import Product from "./product";
import Shipment from "./shipment";
import User from "./user";
import Wishlist from "./wishlist";



const BaseURL = process.env.FRESHCART_API_URL_LOCAL

console.log("log", process.env.FRESHCART_API_URL_LOCAL)

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
    auth: new Auth(axiosPublic, axiosPrivate),
    address: new Address(axiosPrivate),
    cart: new Cart(axiosPrivate),
    notification: new Notification(axiosPrivate),
    order: new Order(axiosPrivate),
    orderitem: new OrderItem(axiosPrivate),
    product: new Product (axiosPrivate),
    shipment: new Shipment(axiosPrivate),
    user: new User(axiosPrivate),
    wishlist: new Wishlist(axiosPrivate)
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