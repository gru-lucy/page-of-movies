const URL = 'https://api.themoviedb.org/3/trending/movie/'
const api = 'api_key=' + 'cbad74847d63fd64867bfb3fe06ef4dc'

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
