import { baseInstance } from "../api"

export const getTopAnime = async () => await baseInstance.get('/v4/top/anime')