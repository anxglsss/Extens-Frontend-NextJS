import { IUser } from '../types/user.types'
import { axiosInstance } from './axios.instance'

export async function getUsers(): Promise<IUser[]> {
	try {
		return (await axiosInstance.get('/user/all')).data
	} catch (err) {
		console.error(err)
		throw new Error('Failed to get users')
	}
}

export async function getUser(id: number): Promise<IUser> {
	try {
		return (await axiosInstance.get(`/user/${id}`)).data
	} catch (err) {
		console.error(err)
		throw new Error('Failed to get user')
	}
}

export async function updateUser(
	id: number,
	data: Partial<IUser>
): Promise<IUser> {
	try {
		return (await axiosInstance.put(`/user/${id}`, data)).data
	} catch (err) {
		console.error(err)
		throw new Error('Failed to update user')
	}
}

export async function deleteUser(id: number): Promise<void> {
	try {
		await axiosInstance.delete(`/user/${id}`)
	} catch (err) {
		console.error(`Failed to delete user with ID ${id}:`, err)
		throw new Error('Failed to delete user')
	}
}

export async function setAvatarUrl(
	id: number,
	avatarUrl: string
): Promise<IUser> {
	try {
		const response = await axiosInstance.put(`/user/${id}/avatar`, {
			avatarUrl,
		})
		return response.data
	} catch (err) {
		console.error(`Failed to set avatar URL for user with ID ${id}:`, err)
		throw new Error('Failed to set avatar URL')
	}
}
