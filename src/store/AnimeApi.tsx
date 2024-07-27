import axios from "axios"
import { makeAutoObservable } from "mobx"


export default new class anim{
  animes = []

  constructor() {
    makeAutoObservable(this)
  }

  async fetchAnime() {
    try {
      const response = await axios.get('https://api.jikan.moe/v4/top/anime')
      this.animes = response.data;
    }
    catch(e) {
      console.error(e)
    }
  }
}

