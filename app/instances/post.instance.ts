import { IPost } from '../types'
import { axiosInstance } from './axios.instance'

export async function getPosts(): Promise<IPost[]> {
	try {
		return (await axiosInstance.get('/post/all')).data
	} catch (err) {
		console.log(err)
		throw new Error('Failed to fetch posts')
	}
}
