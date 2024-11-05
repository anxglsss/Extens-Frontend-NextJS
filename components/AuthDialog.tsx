'use client'

import { loginSchema, registerSchema } from '@/app/schemas/user.schema'
import { IUser, IUserLogin } from '@/app/types/user.types'
import { Button } from '@/components/ui/button'
import {
	Dialog,
	DialogContent,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from '@/components/ui/dialog'
import { zodResolver } from '@hookform/resolvers/zod'
import { Label } from '@radix-ui/react-label'
import { Lock, Mail, User } from 'lucide-react'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Input } from './ui/input'

export function AuthDialog({ children }: { children: React.ReactNode }) {
	const [isRegister, setIsRegister] = useState<boolean>(true)
	const schema = isRegister ? registerSchema : loginSchema
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm<IUser | IUserLogin>({
		resolver: zodResolver(schema),
	})

	const onSubmit = (data: IUser | IUserLogin) => {
		if (isRegister) {
			console.log(data)
		} else {
			console.log(data)
		}
		reset()
	}

	return (
		<Dialog>
			<DialogTrigger asChild>{children}</DialogTrigger>
			<DialogContent className='sm:max-w-[425px] bg-white rounded-xl shadow-lg p-6'>
				<DialogHeader className='flex flex-col gap-3 items-center'>
					<DialogTitle className='text-center font-mont font-bold text-3xl text-gray-800'>
						{isRegister ? 'Register' : 'Login'}
					</DialogTitle>
					<hr className='w-[60%] h-1' />
				</DialogHeader>
				<form
					onSubmit={handleSubmit(onSubmit)}
					className='grid gap-12 py-4 font-mont'
				>
					{isRegister && (
						<div className='grid gap-2'>
							<Label htmlFor='name' className='text-sm text-gray-600'>
								Name
							</Label>
							<div className='flex items-center border-b border-gray-300'>
								<User className='text-gray-500 mr-2' />
								<Input
									id='name'
									{...register('name')}
									placeholder='Your Name'
									className='focus:outline-none border-none w-full bg-transparent'
								/>
							</div>
							{errors && (
								<p className='text-red-500 absolute mt-[72px] text-sm'>
									Name is required
								</p>
							)}
						</div>
					)}
					<div className='grid gap-2'>
						<Label htmlFor='email' className='text-sm text-gray-600'>
							Email
						</Label>
						<div className='flex items-center border-b border-gray-300'>
							<Mail className='text-gray-500 mr-2' />
							<Input
								id='email'
								type='email'
								{...register('email')}
								placeholder='you@example.com'
								className='focus:outline-none w-full bg-transparent'
							/>
						</div>
						{errors.email && (
							<p className='text-red-500 absolute mt-20 text-sm'>
								Email is required
							</p>
						)}
					</div>
					<div className='grid gap-2'>
						<Label htmlFor='password' className='text-sm text-gray-600'>
							Password
						</Label>
						<div className='flex items-center border-b border-gray-300'>
							<Lock className='text-gray-500 mr-2' />
							<Input
								id='password'
								type='password'
								{...register('password', { required: true, minLength: 6 })}
								placeholder='••••••••'
								className='focus:outline-none w-full bg-transparent'
							/>
						</div>
						{errors.password && (
							<p className='text-red-500 absolute mt-20 text-sm'>
								{errors.password && 'Password must be at least 6 characters'}
							</p>
						)}
					</div>
					<DialogFooter className='flex flex-col items-center gap-2'>
						<Button
							type='submit'
							className='w-full text-white font-medium bg-gradient-to-r from-blue-500 to-purple-500 rounded-full py-2 hover:from-blue-600 hover:to-purple-600 focus:outline-none'
						>
							{isRegister ? 'Register' : 'Login'}
						</Button>
						<Button
							variant='link'
							type='button'
							onClick={() => setIsRegister(!isRegister)}
							className='text-blue-500 mt-2'
						>
							{isRegister
								? 'Already have an account? Login'
								: "Don't have an account? Register"}
						</Button>
					</DialogFooter>
				</form>
			</DialogContent>
		</Dialog>
	)
}
