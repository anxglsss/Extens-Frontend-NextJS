import { IComment } from '../types/global.types'
import { axiosInstance } from './axios.instance'

export async function getCommentsByPostId(postId: number): Promise<IComment[]> {
	try {
		return (await axiosInstance.get(`/comment/${postId}`)).data
	} catch (err) {
		console.error(err)
		throw new Error('Failed to fetch comments')
	}
}

export async function createComment(
	postId: number,
	commentData: IComment
): Promise<IComment> {
	try {
		return (await axiosInstance.post(`/comment/create/${postId}`, commentData))
			.data
	} catch (err) {
		console.error(err)
		throw new Error('Failed to create comment')
	}
}

export async function updateComment(
	id: number,
	commentData: IComment
): Promise<IComment> {
	try {
		return (await axiosInstance.put(`/comment/${id}`, commentData)).data
	} catch (err) {
		console.error(err)
		throw new Error('Failed to update comment')
	}
}

export async function deleteComment(id: number): Promise<void> {
	try {
		await axiosInstance.delete(`/comment/${id}`)
	} catch (err) {
		console.error(err)
		throw new Error('Failed to delete comment')
	}
}
