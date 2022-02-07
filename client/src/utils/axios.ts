import axios, { AxiosInstance } from 'axios'

export const gitHubClient: AxiosInstance = axios.create({
  baseURL: 'https://api.github.com/',
  headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
})

export const localClient: AxiosInstance = axios.create({
  baseURL: 'http://localhost:3001/',
  headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
})
