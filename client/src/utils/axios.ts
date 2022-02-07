import axios, { AxiosInstance } from 'axios'

const axiosClient: AxiosInstance = axios.create({
  baseURL: 'https://api.github.com/',
  headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
})

export default axiosClient
