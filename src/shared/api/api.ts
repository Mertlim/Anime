import axios, { AxiosInstance } from "axios"

function createInstance(): AxiosInstance {
    const instance = axios.create({
        baseURL: 'https://api.jikan.moe',
        headers: {}
    })
    return instance
}
export const baseInstance = createInstance()