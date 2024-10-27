const { VITE_API_KEY } = import.meta.env
const api = '?api_key=' + VITE_API_KEY
import { equipo } from './../adaptadores/equipo'

export async function getCredits({ movieId, lang }, controlador) {
  const url = `https://api.themoviedb.org/3/movie/${movieId}/credits`
  const idio = '&language=' + lang
  const res = await fetch(url + api + idio, { signal: controlador.signal })
  const json = await res.json()
  const results = equipo(json)
  return results
}
