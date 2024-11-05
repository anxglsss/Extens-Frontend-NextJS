import { IFriendship } from '../types/global.types'
import { axiosInstance } from './axios.instance'

export const getFriends = async (): Promise<IFriendship[]> => {
	try {
		return (await axiosInstance.get<IFriendship[]>('/friendship/all')).data
	} catch (error: any) {
		console.error('Failed to fetch friends:', error)
		throw new Error('Failed to fetch friends')
	}
}

export const deleteFriendship = async (friendshipId: string): Promise<void> => {
	try {
		await axiosInstance.delete(`/friendship/${friendshipId}`)
	} catch (error: any) {
		console.error('Failed to delete friendship:', error)
		throw new Error('Failed to delete friendship')
	}
}
