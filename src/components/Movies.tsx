import { categories } from '@/shared/utils/constants'
import { animeStore } from '@/store/AnimeApi'
import { observer } from 'mobx-react-lite'
import { useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { Card } from './Card'

export const Movies = observer(() => {
	const { fetchAnime, animes } = animeStore

	useEffect(() => { fetchAnime() }, [])

	return (
		<main className='mt-5 flex justify-center'>
			<div className='w-[1440px] flex flex-col'>
				<hr className='bg-slate-300 text-gray-200 h-[1px] w-full' />
				{/* Categories */}
				<nav className='space-x-8 border-b pb-3 justify-start flex w-full mt-8'>
					{categories.map((cat, i) => (
						<NavLink
							className='text-gray-400 font-normal text-[1.3em] hover:text-gray-200 transition duration-300'
							key={i}
							to='#'
						>
							{cat}
						</NavLink>
					))}
				</nav>
				<section className='pt-6'>
					<h1 className='text-[1.3em] text-gray-400 font-normal pb-6'>
						Пользователи рекомендуют
					</h1>
					{/* card */}
					<div className=''>
						<Card animes={animes} />
					</div>
				</section>
				<div className='mt-[35px] gap-y-[10px] grid'>
					<h2 className='text-[20px] text-gray-400'>Смотреть аниме онлайн</h2>
					<p className='text-gray-300 font-serif tracking-[1px]'>
						Наш сайт предоставляет прекрасную возможность смотреть аниме онлайн. Сама японская анимации обладает способностью мгновенно захватывать внимание и может
						открыть для зрителей совершенно новый мир.
						Мы предлагаем невероятный выбор аниме сериалов и фильмов, каждая из которых имеет свои преимущества:
					</p>
					<ul className='gap-y-[5px] grid text-gray-300'>
						<li> ✓ Последние новинки и выход новых серий аниме.</li>
						<li> ✓ Качественная озвучка и приятный плеер.</li>
						<li> ✓ Большая база видео сериалов, фильмов, онгоингов аниме.</li>
						<li> ✓ Удобная мобильная версия сайта.</li>
					</ul>
				</div>
				<div>
					<div className='mt-[35px] gap-y-[10px] grid'>
						<h2 className='text-[20px] text-gray-400'>Сайт для просмотра аниме</h2>
						<p className='text-gray-300 font-serif tracking-[1px]'>
							Раньше пользователи скачивали различные приложение на мобильный телефон, но большая часть аудитории хочет смотреть аниме онлайн на ПК или ТВ. Для таких целей мы создали наш сайт Anixart.net, чтобы аудитории и любителям аниме было комфортно смотреть свои любимые сериалы. В нашей коллекции аниме можно найти сериалы и фильмы на любой вкус. Мы готовы открыть для зрителя и любителей анимации новый мир с
							яркими красками. Все видео на
							сайте в хорошем качестве, а озвучка героев аниме выражает искриние эмоции. Желаем Вам приятного просмотра!
						</p>
					</div>
				</div>
			</div>
		</main>
	)
})
