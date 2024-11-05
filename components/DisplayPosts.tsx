'use client'

import { postStore } from '@/app/stores/post.store'
import { Bookmark, Heart } from 'lucide-react'
import { observer } from 'mobx-react-lite'
import Image from 'next/image'
import { useEffect } from 'react'
import testImage from '../app/public/girl_rain_anime_153417_3840x2160.jpg'

export const DisplayPosts = observer(() => {
	useEffect(() => {
		// toast.success('Look at my styles.', {
		// 	style: {
		// 		border: '',
		// 		padding: '16px',
		// 		color: '#ffffff',
		// 		fontFamily: 'Montserrat, sans-serif',
		// 		fontWeight: 'semibold',
		// 		background: 'linear-gradient(80deg, #0000ff -40%, #00ffff 100%)',
		// 	},
		// 	iconTheme: {
		// 		primary: '#ffffff',
		// 		secondary: '#00ffff',
		// 	},
		// })
		postStore.getPosts()
		console.log('UseEffect: ', postStore.posts)
	}, [])

	return (
		<div className='posts-container max-h-[76vh] font-mont mt-4 overflow-auto flex flex-col gap-6 p-1 rounded-lg '>
			{postStore.posts.map(post => (
				<div
					key={post.id}
					className='relative flex items-center bg-white rounded-lg shadow-md p-4 gap-4 min-h-44 3xl:min-h-[218px] cursor-pointer'
				>
					<div className='absolute top-4 right-4 flex gap-3 items-center'>
						<div className='flex gap-1 items-center'>
							<h1 className='font-medium text-[18px] text-gray-700 text-opacity-80'>
								23
							</h1>
							<Heart
								color='#ff0000'
								fill='#ff0000'
								strokeWidth={1.5}
								size={22}
							/>
						</div>
						<Bookmark
							color='#ffdd00'
							fill='#ffdd00'
							strokeWidth={1.5}
							size={22}
						/>
					</div>

					<Image
						src={testImage}
						alt={post.title}
						width={160}
						height={100}
						className='rounded-lg w-[180px] h-[120px] 3xl:w-[240px] 3xl:h-[160px]'
					/>

					<div className='flex-1 flex flex-col justify-between'>
						<h2 className='text-lg 3xl:text-xl font-bold text-gray-800'>
							{post.title}
						</h2>
						<p className='text-sm text-gray-600 my-2 line-clamp-3 mb-10 3xl:mb-20'>
							{post.content}
						</p>
					</div>
				</div>
			))}
		</div>
	)
})
