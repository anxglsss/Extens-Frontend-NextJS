import { IUser } from '../types'
import { axiosInstance } from './axios.instance'

export async function register(user: IUser): Promise<IUser> {
	try {
		return (await axiosInstance.post('/auth/register', user)).data
	} catch (err) {
		console.error('Failed to register user:', err)
		throw new Error('Failed to register user')
	}
}

export async function login(user: IUser): Promise<IUser> {
	try {
		return (await axiosInstance.post('/auth/login', user)).data
	} catch (err) {
		console.error('Failed to login', err)
		throw new Error('Failed to login')
	}
}

export async function logout() {
	try {
		return (await axiosInstance.post('/auth/logout')).data
	} catch (err) {
		console.error('Failed to log out', err)
		throw new Error('Failed to log out')
	}
}

export async function refreshToken() {
	try {
		return (await axiosInstance.post('/auth/refresh-token')).data
	} catch (err) {
		console.error('Failed to refresh token', err)
		throw new Error('Failed to refresh token')
	}
}
