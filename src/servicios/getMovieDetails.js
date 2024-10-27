const { VITE_API_KEY } = import.meta.env
const URL = 'https://api.themoviedb.org/3/movie/'
import { movideDetails } from './../adaptadores/movieDetails'

export async function getMovieDetails(
  { id, lang = 'es-MX' },
  controlador = {}
) {
  const idioma = '&language=' + lang
  const api = '?api_key=' + VITE_API_KEY
  const res = await fetch(URL + id + api + idioma, {
    signal: controlador.signal,
  })
  const json = await res.json()
  const mapeado = movideDetails({ obj: json })
  return mapeado
}
