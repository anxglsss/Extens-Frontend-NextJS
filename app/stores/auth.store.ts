import { makeAutoObservable } from 'mobx'
import { IUser } from '../types'
import { isPlainObject, runInAction } from 'mobx/dist/internal'

class AuthStore {
	user: IUser | null = null
	accessToken: string = localStorage.getItem('accessToken') || ''
	refreshToken: string = localStorage.getItem('refreshToken') || ''
	isLoading: boolean = false
	error: string | null = null

	constructor() {
		makeAutoObservable(this)
	}

	setUser(user: IUser) {
		this.user = user
	}

	setTokens(accessToken: string, refreshToken: string) {
		this.accessToken = accessToken
		this.refreshToken = refreshToken
		localStorage.setItem('accessToken', accessToken)
		localStorage.setItem('refreshToken', refreshToken)
	}

	clearAuthData() {
		this.user = null
		this.accessToken = ''
		this.refreshToken = ''
		localStorage.removeItem('accessToken')
		localStorage.removeItem('refreshToken')
	}

	async register(user:IUser){
		this.isLoading = true
        this.error = null
		try{

		}catch(e:any){
			this.error = e.message || "Error with registration"
		}finally{
			runInAction(()=>{
				this.isLoading = false
			})
		}
	}
}

export const authStore = new AuthStore()
