import { Bell, Search, Settings, User } from 'lucide-react'
import { AuthDialog } from './AuthDialog'

export const Header = () => {
	return (
		<header className='bg-white h-16 flex items-center justify-between px-6 shadow-lg'>
			<div className='relative w-1/4'>
				<input
					type='text'
					placeholder='Search...'
					className='w-full py-2 pl-5 pr-4 bg-gray-200 rounded-[10px] focus:outline-none font-mont'
				/>
				<Search className='absolute right-5 top-2.5 text-gray-600' size={20} />
			</div>

			<div className='flex space-x-8 items-center'>
				<Settings
					className='text-blue-500 hover:text-blue-700 duration-300 cursor-pointer'
					size={24}
				/>
				<Bell
					className='text-blue-500 hover:text-blue-700 duration-300 cursor-pointer'
					size={24}
				/>
				<div className='flex items-center cursor-pointer gap-4'>
					<h2 className='font-mont font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500'>
						Guest
					</h2>
					<AuthDialog>
						<User
							className='text-blue-500 hover:text-blue-700 duration-300 cursor-pointer'
							size={24}
						/>
					</AuthDialog>
				</div>
			</div>
		</header>
	)
}
