import { ICreatePost, IPost } from '../types/global.types'
import { axiosInstance } from './axios.instance'

export async function getPosts(): Promise<IPost[]> {
	try {
		return (await axiosInstance.get('/post/all')).data
	} catch (err) {
		console.log(err)
		throw new Error('Failed to fetch posts')
	}
}

export async function getPost(id: number): Promise<IPost> {
	try {
		return (await axiosInstance.get(`/posts/${id}`)).data
	} catch (err) {
		console.error(err)
		throw new Error('Failed to fetch post')
	}
}

export async function createPost(post: ICreatePost): Promise<IPost> {
	try {
		return (await axiosInstance.post('/post/create', post)).data
	} catch (err) {
		console.error(err)
		throw new Error('Failed to create post')
	}
}

export async function updatePost(
	id: number,
	data: Partial<ICreatePost>
): Promise<IPost> {
	try {
		return (await axiosInstance.put(`/post/${id}`, data)).data
	} catch (err) {
		console.error(err)
		throw new Error('Failed to create post')
	}
}

export async function deletePost(id: number): Promise<void> {
	try {
		await axiosInstance.delete(`/${id}`)
	} catch (err) {
		console.error(err)
		throw new Error('Failed to delete post')
	}
}

export async function getPostsByDateRecent(): Promise<IPost[]> {
	try {
		return (await axiosInstance.get('/sort/date/recent')).data
	} catch (err) {
		console.error(err)
		throw new Error('Failed to fetch posts by recent date')
	}
}

export async function getPostsByDateOldest(): Promise<IPost[]> {
	try {
		return (await axiosInstance.get('/sort/date/oldest')).data
	} catch (err) {
		console.error(err)
		throw new Error('Failed to fetch posts by oldest date')
	}
}

export async function getPostsByLikes(): Promise<IPost[]> {
	try {
		return (await axiosInstance.get('/sort/likes')).data
	} catch (err) {
		console.error(err)
		throw new Error('Failed to fetch posts by likes')
	}
}

export async function getPostsByFavorites(): Promise<IPost[]> {
	try {
		return (await axiosInstance.get('/sort/favorites')).data
	} catch (err) {
		console.error(err)
		throw new Error('Failed to fetch posts by favorites')
	}
}

export async function getPostsByFriends(friendIds: number[]): Promise<IPost[]> {
	try {
		return (
			await axiosInstance.get('/filter/friends', {
				params: { friendIds },
			})
		).data
	} catch (err) {
		console.error(err)
		throw new Error('Failed to fetch posts by friends')
	}
}

export async function getPostsByContainsImage(
	hasImage: boolean
): Promise<IPost[]> {
	try {
		return (
			await axiosInstance.get('/filter/containsImage', {
				params: { hasImage },
			})
		).data
	} catch (err) {
		console.error(err)
		throw new Error('Failed to fetch posts by image presence')
	}
}

export async function getPostsByNotContainsImage(): Promise<IPost[]> {
	try {
		return (await axiosInstance.get('/filter/notContainsImage')).data
	} catch (err) {
		console.error(err)
		throw new Error('Failed to fetch posts by absence of image')
	}
}
