import { ILike } from '../types/global.types'
import { axiosInstance } from './axios.instance'

export async function likePost(likeData: ILike): Promise<void> {
	try {
		await axiosInstance.post(`/like/post/${likeData.postId}`, likeData)
	} catch (error) {
		console.error('Failed to like post:', error)
		throw new Error('Failed to like post')
	}
}

export async function unlikePost(likeData: ILike): Promise<void> {
	try {
		await axiosInstance.delete(`/like/post/${likeData.postId}`, {
			data: likeData,
		})
	} catch (error) {
		console.error('Failed to unlike post:', error)
		throw new Error('Failed to unlike post')
	}
}

export async function getLikesByPost(postId: number): Promise<ILike[]> {
	try {
		return (await axiosInstance.get(`/like/post/${postId}`)).data
	} catch (error) {
		console.error('Failed to fetch likes by post:', error)
		throw new Error('Failed to fetch likes by post')
	}
}

export async function getLikesByUser(userId: number): Promise<ILike[]> {
	try {
		return (await axiosInstance.get(`/like/user/${userId}`)).data
	} catch (error) {
		console.error('Failed to fetch likes by user:', error)
		throw new Error('Failed to fetch likes by user')
	}
}
