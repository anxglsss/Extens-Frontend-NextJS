import { IPost } from './global.types'

export interface IUser {
	id: number
	email: string
	name: string
	password: string
	avatarUrl?: string
	posts: IPost[]
}

export interface IUserLogin {
	email: string
	password: string
}

export interface IUserRegister {
	name: string
	email: string
	password: string
}
