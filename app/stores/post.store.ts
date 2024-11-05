import { makeAutoObservable, runInAction } from 'mobx'
import { getPosts } from '../instances/post.instance'
import { IPost } from '../types'

class PostStore {
	posts: IPost[] = []
	loading: boolean = false
	error: string | null = null

	constructor() {
		makeAutoObservable(this)
	}

	async getPosts() {
		this.loading = true
		this.error = null
		try {
			const posts = await getPosts()
			runInAction(() => {
				this.posts = posts
				this.loading = false
			})
		} catch (error: any) {
			runInAction(() => {
				this.error = error.message || 'Error with fetching posts'
				this.loading = false
			})
		}
	}
}

export const postStore = new PostStore()
