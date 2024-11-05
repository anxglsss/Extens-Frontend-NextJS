import { makeAutoObservable } from 'mobx'
import { runInAction } from 'mobx/dist/internal'
import { logout, refreshToken, register } from '../instances/auth.instance'
import { IToken } from '../types/token.types'
import { IUser } from '../types/user.types'

class AuthStore {
	user: IUser | null = null
	accessToken: string = localStorage.getItem('accessToken') || ''
	refreshToken: string = localStorage.getItem('refreshToken') || ''
	isLoading: boolean = false
	error: string | null = null

	constructor() {
		makeAutoObservable(this)
	}

	setTokens(tokens: IToken) {
		this.accessToken = tokens.accessToken
		this.refreshToken = tokens.refreshToken
		localStorage.setItem('accessToken', tokens.accessToken)
		localStorage.setItem('refreshToken', tokens.refreshToken)
	}

	saveUserToStorage() {
		if (this.user) {
			localStorage.setItem('user', JSON.stringify(this.user))
		}
	}

	loadUserFromStorage() {
		const storedUser = localStorage.getItem('user')
		if (storedUser) {
			this.user = JSON.parse(storedUser)
		}
	}

	clearAuthData() {
		this.user = null
		this.accessToken = ''
		this.refreshToken = ''
		localStorage.removeItem('user')
		localStorage.removeItem('accessToken')
		localStorage.removeItem('refreshToken')
	}

	setUser(user: IUser) {
		this.user = user
		this.saveUserToStorage()
	}

	async register(user: IUser) {
		this.isLoading = true
		this.error = null
		try {
			const tokens = await register(user)
			runInAction(() => {
				this.setTokens(tokens)
				this.setUser(user)
			})
		} catch (e: any) {
			this.error = e.message || 'Error with registration'
		} finally {
			runInAction(() => {
				this.isLoading = false
			})
		}
	}

	async login(user: IUser) {
		this.isLoading = true
		this.error = null
		try {
			const tokens = await register(user)
			runInAction(() => {
				this.setTokens(tokens)
				this.setUser(user)
			})
		} catch (e: any) {
			this.error = e.message || 'Error with login'
		} finally {
			runInAction(() => {
				this.isLoading = false
			})
		}
	}

	async logout() {
		try {
			await logout()
			runInAction(() => {
				this.clearAuthData()
			})
		} catch (e: any) {
			console.error('Logout failed:', e.message)
		}
	}

	async refreshAccessToken() {
		try {
			const tokens = await refreshToken()
			runInAction(() => {
				this.setTokens(tokens)
			})
		} catch (e: any) {
			console.error('Token refresh failed:', e.message)
			this.logout()
		}
	}
}

export const authStore = new AuthStore()
