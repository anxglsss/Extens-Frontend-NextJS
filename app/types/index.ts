export interface IPost {
	id: number
	title: string
	content: string
	imageUrl?: string
	likes: number
	favorites: number
}
export interface IUser {
	email: string
	name: string
	password: string
	avatarUrl?: string
}
export interface IUserLogin {
	email: string
	password: string
}
