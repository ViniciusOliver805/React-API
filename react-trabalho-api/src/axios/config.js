import axios from "axios"

const productFetch = axios.create({
    baseURL: "https://dummyjson.com"
})

export default productFetch