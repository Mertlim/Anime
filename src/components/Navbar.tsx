import { FC, useState } from 'react'
import Burger from '../assets/Burger.svg'
import Logo from '../assets/Logo.png'
import tg from '../assets/telegram.svg'
import { observer } from 'mobx-react-lite'
import { animeStore } from '@/store/AnimeApi'
import IModal from './IModal'

export const Navbar: FC = observer(() => {
	const [isOpen, setOpen] = useState(false)

	const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		animeStore.setSearchQuery(e.target.value)
	}

	return (
		<header className='w-full flex justify-center mt-3 '>
			<div className='w-[1440px] flex justify-between items-center'>
				<div className='flex items-center gap-6'>
					<button>
						<img src={Burger} alt="#" />
					</button>
					<div className='flex items-center'>
						<img src={Logo} alt="#" />
						<h1 className='text-2xl tracking-widest font-black text-gray-300'>ANIXART.NET</h1>
					</div>
					<div className=''>
						<input
							className='bg-slate-200 w-[501px] pl-[20px] h-9 rounded-xl '
							type="text"
							placeholder='Найти аниме...'
							onChange={handleSearchChange} />
					</div>
				</div>
				<div>
					<div className='flex gap-8'>
						<a href="https://t.me/MertlimCoding" target='blank'>
							<img className='w-8 cursor-pointer' src={tg} alt="#" />
						</a>
						<button onClick={() => setOpen(true)}>Войти</button>
					</div>
					<IModal isOpen={isOpen} setOpen={setOpen}/>
				</div>
			</div>

		</header>
	)
})
