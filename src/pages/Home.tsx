
import { Movies } from '@/components/Movies'
import { observer } from 'mobx-react-lite'

export const Home = observer(() => {
	return (
		<div className='w-full flex justify-center'>
			<div className='w-[1440px]'>
				<Movies />
			</div>
		</div>
	)
})
