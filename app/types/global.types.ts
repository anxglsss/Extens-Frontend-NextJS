import { RequestStatus } from './enum'

export interface IPost {
	id: number
	title: string
	content: string
	imageUrl?: string
	likes: number
	favorites: number
}

export interface ICreatePost {
	title: string
	content: string
	imageUrl?: string
}

export interface IComment {
	content: string
}

export interface ILike {
	userId: number
	postId: number
}

export interface IFavorite {
	userId: number
	postId: number
}

export interface IFriendRequest {
	receiverId: number
	senderId: number
	status: RequestStatus
}

export interface IFriendship {
	user1Id: number
	user2Id: number
}

export interface INotification {
	receiverId: number
	senderId: number
}
