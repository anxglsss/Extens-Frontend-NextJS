import { DisplayPosts } from '@/components/DisplayPosts'
import { Filter } from '@/components/Filter'
import { HeaderPostsPage } from '@/components/HeaderPostsPage'

const PostsPage = () => {
	return (
		<>
			<div className='flex gap-8'>
				<div className='w-full'>
					<HeaderPostsPage />
					<DisplayPosts />
				</div>
				<Filter />
			</div>
		</>
	)
}

export default PostsPage
