import { INotification } from '../types/global.types'
import { axiosInstance } from './axios.instance'

export async function sendNotification(
	receiverId: number
): Promise<INotification> {
	try {
		return (await axiosInstance.post(`/notifications/send/${receiverId}`)).data
	} catch (error) {
		console.error('Failed to send notification:', error)
		throw new Error('Failed to send notification')
	}
}
