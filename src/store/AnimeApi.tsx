import { getTopAnime } from "@/shared/api/anime/api";
import { SimplifiedAnimeData, ApiAnimeData } from "@/shared/api/anime/types";
import { makeAutoObservable } from "mobx"

class AnimeStore {
  constructor() { makeAutoObservable(this) }

  animes: SimplifiedAnimeData[] = []

  setAnimes = (animeData: ApiAnimeData[]) => {
    const arr = animeData.map(anime => ({
      mal_id: anime.mal_id,
      title: anime.title,
      title_english: anime.title_english,
      year: anime.year,
      image: anime.images.jpg.image_url || '',
      episodes: anime.episodes
    }))
    console.log(arr)
    this.animes = arr
  }
  // api
  fetchAnime = async () => {
    console.log('Вызван fetchAnime'); // Лог для проверки вызова
    try {
      const res = await getTopAnime()
      console.log(res.data.data)
      if (res.data) this.setAnimes(res.data.data);
    } catch (e) { console.error(e) }
  }

  // search

  searchQuery: string = "";

  setSearchQuery = (query: string) => {
    this.searchQuery = query
  }

  get filteredAnime() {
    return this.animes.filter((anime) => anime.title.toLowerCase().includes(this.searchQuery.toLowerCase()))
  }
}
export const animeStore = new AnimeStore()
