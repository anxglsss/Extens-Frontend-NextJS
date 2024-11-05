'use client'

import { RefreshCcw } from 'lucide-react'
import { useState } from 'react'
import { FilterSlider } from './FilterSlider'
import { Button } from './ui/button'
import { Checkbox } from './ui/checkbox'

export const Filter = () => {
	const [sortBy, setSortBy] = useState<string | null>(null)
	const [dateFilter, setDateFilter] = useState<string | null>(null)
	const [imageFilter, setImageFilter] = useState<string | null>(null)
	const [isSliderOpen, setIsSliderOpen] = useState<boolean>(false)
	const [visibilityFilter, setVisibilityFilter] = useState<boolean>(false)

	const handleSortChange = (value: string) => {
		setSortBy(sortBy === value ? null : value)
	}

	const handleDateChange = (value: string) => {
		setDateFilter(dateFilter === value ? null : value)
	}

	const handleImageChange = (value: string) => {
		setImageFilter(imageFilter === value ? null : value)
	}

	return (
		<div className='bg-white px-8 rounded-[10px] font-mont w-1/3 py-[13px] pb-12'>
			<h1 className='text-gray-900 font-semibold text-opacity-70 text-xl 3xl:text-2xl mb-3'>
				Filters
			</h1>
			<hr className='bg-gray-900 bg-opacity-20 h-[1px] mb-2 3xl:mb-6 3xl:mt-6' />
			{/* Sort By Likes / Favorites */}
			<div className='mb-4'>
				<h2 className='text-gray-800 text-opacity-90 font-medium text-md mb-2'>
					Sort by
				</h2>

				<div className='flex flex-col gap-2 font-medium'>
					<div className='flex items-center gap-2'>
						<Checkbox
							checked={sortBy === 'likes'}
							onCheckedChange={() => handleSortChange('likes')}
							id='sort-likes'
						/>
						<label htmlFor='sort-likes' className='text-sm text-gray-700'>
							Likes
						</label>
					</div>
					<div className='flex items-center gap-2'>
						<Checkbox
							checked={sortBy === 'favorites'}
							onCheckedChange={() => handleSortChange('favorites')}
							id='sort-favorites'
						/>
						<label htmlFor='sort-favorites' className='text-sm text-gray-700'>
							Favorites
						</label>
					</div>
				</div>
			</div>
			<hr className='bg-gray-900 bg-opacity-20 h-[1px] mb-2 3xl:mb-6 3xl:mt-6' />
			{/* Sort By Date */}
			<div className='mb-4'>
				<h2 className='text-gray-800 text-opacity-90 font-medium text-md mb-2'>
					By Date
				</h2>
				<div className='flex flex-col gap-2 font-medium'>
					<div className='flex items-center gap-2'>
						<Checkbox
							checked={dateFilter === 'recent'}
							onCheckedChange={() => handleDateChange('recent')}
							id='sort-recent'
						/>
						<label htmlFor='sort-recent' className='text-sm text-gray-700'>
							Recent
						</label>
					</div>
					<div className='flex items-center gap-2'>
						<Checkbox
							checked={dateFilter === 'oldest'}
							onCheckedChange={() => handleDateChange('oldest')}
							id='sort-oldest'
						/>
						<label htmlFor='sort-oldest' className='text-sm text-gray-700'>
							Oldest
						</label>
					</div>
				</div>
			</div>

			<hr className='bg-gray-900 bg-opacity-20 h-[1px] mb-2 3xl:mb-6 3xl:mt-6' />
			{/* Sort By Image */}
			<div className='mb-4'>
				<h2 className='text-gray-800 text-opacity-90 font-medium text-md mb-2'>
					Image
				</h2>
				<div className='flex flex-col gap-2 font-medium'>
					<div className='flex items-center gap-2'>
						<Checkbox
							checked={imageFilter === 'with-image'}
							onCheckedChange={() => handleImageChange('with-image')}
							id='with-image'
						/>
						<label htmlFor='with-image' className='text-sm text-gray-700'>
							With Image
						</label>
					</div>
					<div className='flex items-center gap-2'>
						<Checkbox
							checked={imageFilter === 'without-image'}
							onCheckedChange={() => handleImageChange('without-image')}
							id='without-image'
						/>
						<label htmlFor='without-image' className='text-sm text-gray-700'>
							Without Image
						</label>
					</div>
				</div>
			</div>
			<hr className='bg-gray-900 bg-opacity-20 h-[1px] mb-2 3xl:mb-6 3xl:mt-6' />
			<div className='mb-4'>
				<h2 className='text-gray-800 text-opacity-90 font-medium text-md mb-2'>
					Size of content
				</h2>
				<div className='flex flex-col w-64 font-medium'>
					<div className='flex items-center gap-2'>
						<Checkbox
							checked={isSliderOpen}
							onCheckedChange={() => setIsSliderOpen(!isSliderOpen)}
							id='slider'
						/>
						<label
							htmlFor='slider'
							className='text-gray-800 text-opacity-90 font-medium text-sm'
						>
							Manage size of content
						</label>
					</div>
					<div className='slider-container'>
						{isSliderOpen && (
							<div className='slider-absolute'>
								<FilterSlider />
							</div>
						)}
					</div>
				</div>
			</div>
			<hr className={`bg-gray-900 bg-opacity-20 mb-[60px]`} />
			{/* Posts from Friends */}
			<div className='mb-6'>
				<div className='flex items-center gap-2 font-medium'>
					<Checkbox
						checked={visibilityFilter}
						onCheckedChange={() => setVisibilityFilter(!visibilityFilter)}
						id='friends-only'
					/>
					<label htmlFor='friends-only' className='text-sm text-gray-700'>
						Only Friends
					</label>
				</div>
			</div>
			<div className='flex items-center mb-1'>
				<Button className='w-full rounded-[10px] bg-custom-blue-white flex items-center px-12 py-1'>
					<RefreshCcw strokeWidth={2} color='white' size={20} />
					<h1 className='text-white text-sm font-mont font-medium'>Refresh</h1>
				</Button>
			</div>
		</div>
	)
}
