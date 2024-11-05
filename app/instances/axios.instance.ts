import axios from 'axios'
import { refreshToken } from './auth.instance'

export const axiosInstance = axios.create({
	baseURL: 'http://localhost:5200/api',
	headers: {
		'Content-Type': 'application/json',
	},
})

axiosInstance.interceptors.request.use(
	config => {
		const token = getAccessToken()
		if (token && config.headers) {
			config.headers['Authorization'] = `Bearer ${token}`
		}
		return config
	},
	error => Promise.reject(error)
)

axiosInstance.interceptors.response.use(
	response => response,
	async error => {
		const originalRequest = error.config
		if (
			error.response &&
			error.response.status === 401 &&
			!originalRequest._retry
		) {
			originalRequest._retry = true
			try {
				const refToken = getRefreshToken()
				if (refToken) {
					const { accessToken } = await refreshToken()
					setTokens(accessToken, refToken)
					originalRequest.headers.Authorization = `Bearer ${accessToken}`
					return axiosInstance(originalRequest)
				}
			} catch (refreshError) {
				localStorage.removeItem('accessToken')
				localStorage.removeItem('refreshToken')
				throw new Error('Authentication failed. Please log in again.')
			}
		}
		return Promise.reject(originalRequest)
	}
)

const getAccessToken = () => localStorage.getItem('accessToken')
const getRefreshToken = () => localStorage.getItem('refreshToken')

const setTokens = (accessToken: string, refreshToken: string) => {
	localStorage.setItem('accessToken', accessToken)
	localStorage.setItem('refreshToken', refreshToken)
}
