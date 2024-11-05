import { Atom, CirclePlus } from 'lucide-react'
import { Button } from './ui/button'

export const HeaderPostsPage = () => {
	return (
		<div className='bg-white h-[10%] rounded-[10px] py-[10px] shadow-lg w-full flex items-center justify-between px-8'>
			<div className='flex items-center gap-2'>
				<Atom color='#006eff' strokeWidth={1} />
				<h1 className='font-mont text-lg text-gray-900 font-semibold text-opacity-70'>
					All posts
				</h1>
			</div>
			<div>
				<Button className='rounded-[10px] bg-custom-blue-white flex items-center'>
					<h1 className='text-white text-sm font-mont font-medium'>
						Create post
					</h1>
					<CirclePlus color='white' />
				</Button>
			</div>
		</div>
	)
}
