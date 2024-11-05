import { RequestStatus } from '../types/enum'
import { IFriendRequest } from '../types/global.types'
import { axiosInstance } from './axios.instance'

export const sendFriendRequest = async (
	receiverId: string
): Promise<IFriendRequest> => {
	try {
		return (
			await axiosInstance.post<IFriendRequest>(
				`/friend-request/send/${receiverId}`
			)
		).data
	} catch (error: any) {
		console.error('Failed to send friend request:', error)
		throw new Error('Failed to send friend request')
	}
}

export const responseToFriendRequest = async (
	requestId: string,
	status: RequestStatus
): Promise<void> => {
	try {
		return (
			await axiosInstance.put(`/friend-request/response/${requestId}`, {
				status,
			})
		).data
	} catch (error: any) {
		console.error('Failed to respond to friend request:', error)
		throw new Error('Failed to respond to friend request')
	}
}

export const getPendingRequests = async (): Promise<IFriendRequest[]> => {
	try {
		return (
			await axiosInstance.get<IFriendRequest[]>('/friend-request/pending/all')
		).data
	} catch (error: any) {
		console.error('Failed to fetch pending friend requests:', error)
		throw new Error('Failed to fetch pending friend requests')
	}
}

export const getAcceptedRequests = async (): Promise<IFriendRequest[]> => {
	try {
		return (
			await axiosInstance.get<IFriendRequest[]>('/friend-request/accepted/all')
		).data
	} catch (error: any) {
		console.error('Failed to fetch accepted friend requests:', error)
		throw new Error('Failed to fetch accepted friend requests')
	}
}

export const getSentRequests = async (): Promise<IFriendRequest[]> => {
	try {
		const response = await axiosInstance.get<IFriendRequest[]>(
			'/friend-request/send/all'
		)
		return response.data
	} catch (error: any) {
		console.error('Failed to fetch sent friend requests:', error)
		throw new Error('Failed to fetch sent friend requests')
	}
}

export const deleteFriendRequest = async (requestId: string): Promise<void> => {
	try {
		await axiosInstance.delete(`/friend-request/${requestId}`)
	} catch (error: any) {
		console.error('Failed to delete friend request:', error)
		throw new Error('Failed to delete friend request')
	}
}
