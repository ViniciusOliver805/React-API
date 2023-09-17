import axios from "axios"

const productFetch = axios.create({
    baseURL: "http://localhost:3001"
})

export default productFetch