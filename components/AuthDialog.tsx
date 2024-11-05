'use client'

import { IUser, IUserLogin } from '@/app/types'
import { Button } from '@/components/ui/button'
import {
	Dialog,
	DialogContent,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from '@/components/ui/dialog'
import { Label } from '@radix-ui/react-label'

import { loginSchema, registerSchema } from '@/app/schemas/user.schema'
import { zodResolver } from '@hookform/resolvers/zod'
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
			<DialogContent className='sm:max-w-[425px]'>
				<DialogHeader>
					<DialogTitle className='text-center font-mont text-4xl'>
						{isRegister ? 'Register' : 'Login'}
					</DialogTitle>
				</DialogHeader>
				<form
					onSubmit={handleSubmit(onSubmit)}
					className='grid gap-6 py-4 font-mont'
				>
					{isRegister && (
						<div className='grid gap-2 font-mont'>
							<Label htmlFor='name' className='font-mont text-sm'>
								Name
							</Label>
							<Input
								id='name'
								{...register('name')}
								placeholder='Your Name'
								className='focus:outline-none'
							/>
							{errors && (
								<p className='text-red-500 text-sm'>Name is required</p>
							)}
						</div>
					)}
					<div className='grid gap-2'>
						<Label htmlFor='email' className='font-mont text-sm'>
							Email
						</Label>
						<Input
							id='email'
							type='email'
							{...register('email')}
							placeholder='you@example.com'
							className='focus:outline-none'
						/>
						{errors.email && (
							<p className='text-red-500 text-sm'>Email is required</p>
						)}
					</div>
					<div className='grid gap-2'>
						<Label htmlFor='password' className='font-mont text-sm'>
							Password
						</Label>
						<Input
							id='password'
							type='password'
							{...register('password', { required: true, minLength: 6 })}
							placeholder='••••••••'
							className='focus:outline-none'
						/>
						{errors.password && (
							<p className='text-red-500 text-sm'>
								{errors.password && 'Password must be at least 6 characters'}
							</p>
						)}
					</div>
					<DialogFooter className='flex flex-col items-center gap-2'>
						<Button
							type='submit'
							className='w-full font-mont text-white font-medium bg-custom-blue-white'
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
