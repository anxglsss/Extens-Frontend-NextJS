'use client'

import {
	BookOpen,
	Handshake,
	LogOut,
	Settings,
	Star,
	UserRoundPen,
} from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useMemo } from 'react'
import { Button } from './ui/button'

export const Sidebar = () => {
	const pathname = usePathname()

	const sidebarItems = useMemo(
		() => [
			{
				href: '/all-posts',
				label: 'All posts',
				image: <BookOpen color='#006eff' strokeWidth={1.5} size={20} />,
			},
			{
				href: '/friends',
				label: 'My Friends',
				image: <Handshake color='#006eff' strokeWidth={1} size={20} />,
			},
			{
				href: '/favorites',
				label: 'Favorites',
				image: <Star color='#006eff' strokeWidth={1} size={20} />,
			},
			{
				href: '/profile',
				label: 'My Profile',
				image: <UserRoundPen color='#006eff' strokeWidth={1} size={20} />,
			},
			{
				href: '/settings',
				label: 'Settings',
				image: <Settings color='#006eff' strokeWidth={1} size={20} />,
			},
		],
		[]
	)

	return (
		<div
			className='bg-white text-black flex flex-col justify-between items-center fixed h-full z-10 transition-all duration-300
						w-1/6 shadow-lg'
		>
			<div>
				<div
					className='px-8 py-8 text-4xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-500
					to-sky-300'
				>
					<h1 className='title font-mont'>Extense</h1>
				</div>

				<nav className='px-2'>
					<ul>
						{sidebarItems.map((item, index) => {
							const selected = pathname === item.href
							return (
								<li
									key={index}
									className={`group px-6 py-3 rounded-lg cursor-pointer font-mont font-medium relative transition duration-300 ${
										selected
											? 'text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500'
											: 'hover:bg-clip-text hover:text-transparent hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-500'
									}`}
								>
									<div className='flex items-center gap-2'>
										{item.image}
										<Link href={item.href}>{item.label}</Link>
									</div>

									<span
										className={`absolute left-0 top-0 bottom-0 w-1 bg-blue-500 transition duration-300 ${
											selected
												? 'opacity-100'
												: 'opacity-0 group-hover:opacity-100'
										}`}
									></span>
								</li>
							)
						})}
					</ul>
				</nav>
			</div>

			<div className='flex items-center mb-8'>
				<Button className='w-full rounded-[10px] bg-custom-blue-white flex items-center px-12 py-5'>
					<LogOut strokeWidth={2} color='white' size={20} />
					<h1 className='text-white text-sm font-mont font-medium'>Logout</h1>
				</Button>
			</div>
		</div>
	)
}
