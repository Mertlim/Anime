import { getTopAnime } from "@/shared/api/anime/api"
import { ApiAnimeData, SimplifiedAnimeData } from "@/shared/api/anime/types"
import { makeAutoObservable } from "mobx"

class AnimeStore {
  constructor() { makeAutoObservable(this) }

  animes: SimplifiedAnimeData[] = []
  searchQuery: string = "";
  staticAnimeList: SimplifiedAnimeData[] = []

  // ========================== FETCH ==============================
  fetchAnime = async () => {
    try {
      const res = await getTopAnime()
      if (res.data) this.setAnimes(res.data.data)
    } catch (_) { console.log }
  }

  // ========================== OTHER MOVES ==============================
  setSearchQuery = (query: string) => {
    this.searchQuery = query
    if (this.searchQuery == '') this.animes = this.staticAnimeList
  }
  filteredAnime = () => this.setSearchedAnimes(this.staticAnimeList.filter((anime) => anime.title.toLowerCase().includes(this.searchQuery.toLowerCase())))
  setSearchedAnimes = (newAnimeList: SimplifiedAnimeData[]) => this.animes = newAnimeList
  setAnimes = (animeData: ApiAnimeData[]) => {
    const animeList = animeData.map(anime => ({
      mal_id: anime.mal_id,
      title: anime.title,
      title_english: anime.title_english,
      year: anime.year,
      image: anime.images.jpg.image_url || '',
      episodes: anime.episodes
    }))
    this.animes = animeList
    this.staticAnimeList = animeList
  }

}
export const animeStore = new AnimeStore()