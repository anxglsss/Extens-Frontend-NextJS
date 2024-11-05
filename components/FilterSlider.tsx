import { useState } from 'react'
import { Slider } from './ui/slider'

export const FilterSlider = () => {
	const [contentSize, setContentSize] = useState<number[]>([50])

	const handleSliderChange = (value: number[]) => {
		setContentSize(value)
	}

	return (
		<div className='bg-white py-6 rounded-[10px] '>
			<div className='flex flex-col gap-2'>
				<Slider
					className='h-[1px] w-[90%] 3xl:w-full'
					min={10}
					max={100}
					step={1}
					value={contentSize}
					onValueChange={handleSliderChange}
				/>
				<div className='text-gray-700 font-medium text-sm'>
					Current size: {contentSize}
				</div>
			</div>
		</div>
	)
}
