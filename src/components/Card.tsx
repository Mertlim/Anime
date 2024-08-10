import { SimplifiedAnimeData } from '@/shared/api/anime/types';
import { animeStore } from '../store/AnimeApi'
import { observer } from 'mobx-react-lite'
import { FC, useEffect } from 'react';

interface CardProps {
	animes: SimplifiedAnimeData[];
}

export const Card: FC<CardProps> = observer(({ animes }) => {

	const { fetchAnime } = animeStore
	useEffect(() => {
		fetchAnime()
	}, []);

	return (
		<article className={`h-auto rounded-xl cursor-pointer card`}>
			<div className='flex flex-wrap justify-between'>
				{animes.map(animeItem => (
					<div key={animeItem.mal_id} className='p-2'>
						<img className='h-80 w-56 rounded-xl' src={animeItem.image} alt={animeItem.title} />
						<div className='w-52 whitespace-nowrap overflow-hidden overflow-ellipsis text-center mt-3'>
							{animeItem.title}
						</div>
						<div className='text-center text-gray-200 mt-[4px]'>
							{animeItem.year}, {animeItem.episodes} серий
						</div>
					</div>
				))}
			</div>
		</article>
	)
})
