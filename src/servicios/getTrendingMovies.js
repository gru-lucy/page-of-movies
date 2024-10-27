const { VITE_API_KEY } = import.meta.env
const URL = 'https://api.themoviedb.org/3/trending/movie/'
const api = 'api_key=' + VITE_API_KEY

export async function getTrendingMovies(
  { date = 'day', lang = 'es-MX', page = 1 },
  controlador = {}
) {
  const fecha = date + '?'
  const idioma = '&language=' + lang
  const pagina = '&page=' + page
  const res = await fetch(URL + fecha + api + idioma + pagina, {
    signal: controlador.signal,
  })
  const json = await res.json()
  return json
}
