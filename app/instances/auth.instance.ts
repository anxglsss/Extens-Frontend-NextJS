import { IToken } from '../types/token.types'
import { IUser } from '../types/user.types'
import { axiosInstance } from './axios.instance'

export async function register(user: IUser): Promise<IToken> {
	try {
		return (await axiosInstance.post('/auth/register', user)).data
	} catch (err) {
		console.error('Failed to register user:', err)
		throw new Error('Failed to register user')
	}
}

export async function login(user: IUser): Promise<IToken> {
	try {
		return (await axiosInstance.post('/auth/login', user)).data
	} catch (err) {
		console.error('Failed to login', err)
		throw new Error('Failed to login')
	}
}

export async function logout(): Promise<void> {
	try {
		return (await axiosInstance.post('/auth/logout')).data
	} catch (err) {
		console.error('Failed to log out', err)
		throw new Error('Failed to log out')
	}
}

export async function refreshToken(): Promise<IToken> {
	try {
		return (await axiosInstance.post('/auth/refresh-token')).data
	} catch (err) {
		console.error('Failed to refresh token', err)
		throw new Error('Failed to refresh token')
	}
}
