const api = '?api_key=' + 'cbad74847d63fd64867bfb3fe06ef4dc'
import { equipo } from './../adaptadores/equipo'

export async function getCredits({ movieId, lang }, controlador) {
  const url = `https://api.themoviedb.org/3/movie/${movieId}/credits`
  const idio = '&language=' + lang
  const res = await fetch(url + api + idio, { signal: controlador.signal })
  const json = await res.json()
  const results = equipo(json)
  return results
}
