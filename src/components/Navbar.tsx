import { BurgerIcon } from '@/assets/icons/BurgerIcon'
import { TelegramIcon } from '@/assets/icons/TelegramIcon'
import { animeStore } from '@/store/AnimeApi'
import { observer } from 'mobx-react-lite'
import { useEffect, useState } from 'react'
import Logo from '../assets/Logo.png'
import { IModal } from './IModal'

export const Navbar = observer(() => {
	const { setSearchQuery, filteredAnime, searchQuery } = animeStore
	const [isOpen, setOpen] = useState(false)

	useEffect(() => { filteredAnime() }, [searchQuery])


	return (
		<header className='w-full flex justify-center mt-3 '>

			{/* MODALS */}
			<IModal
				isOpen={isOpen}
				setOpen={setOpen}
			/>

			<div className='w-[1440px] flex justify-between items-center'>
				<div className='flex items-center gap-6'>
					<button>
						<BurgerIcon />
					</button>
					<div className='flex items-center'>
						<img src={Logo} alt="logo" />
						<h1 className='text-2xl tracking-widest font-black text-gray-300 select-none'>ANIXART.NET</h1>
					</div>
					<div>
						<input
							className='bg-slate-200 w-[501px] pl-[20px] h-9 rounded-xl '
							type="text"
							placeholder='Найти аниме...'
							value={searchQuery}
							onChange={e => {
								setSearchQuery(e.target.value)
							}}
						/>
					</div>
				</div>
				<div>
					<div className='flex gap-8'>
						<a href="https://t.me/MertlimCoding" target='blank'>
							<TelegramIcon />
						</a>
						<button onClick={() => setOpen(true)}>Войти</button>
					</div>
				</div>
			</div>
		</header>
	)
})
