import { IFavorite } from '../types/global.types'
import { axiosInstance } from './axios.instance'

export async function favoritePost(favoriteData: IFavorite): Promise<void> {
	try {
		await axiosInstance.post(
			`/favorite/post/${favoriteData.postId}`,
			favoriteData
		)
	} catch (error) {
		console.error('Failed to add post to favorites:', error)
		throw new Error('Failed to add post to favorites')
	}
}

export async function removeFromFavorite(
	favoriteData: IFavorite
): Promise<void> {
	try {
		await axiosInstance.delete(`/favorite/post/${favoriteData.postId}`, {
			data: favoriteData,
		})
	} catch (error) {
		console.error('Failed to remove post from favorites:', error)
		throw new Error('Failed to remove post from favorites')
	}
}

export async function getFavoritesByPost(postId: number): Promise<IFavorite[]> {
	try {
		return (await axiosInstance.get(`/favorite/post/${postId}`)).data
	} catch (error) {
		console.error('Failed to fetch users who favorited this post:', error)
		throw new Error('Failed to fetch users who favorited this post')
	}
}

export async function getFavoritesByUser(userId: number): Promise<IFavorite[]> {
	try {
		return (await axiosInstance.get(`/favorite/user/${userId}`)).data
	} catch (error) {
		console.error('Failed to fetch posts favorited by user:', error)
		throw new Error('Failed to fetch posts favorited by user')
	}
}
