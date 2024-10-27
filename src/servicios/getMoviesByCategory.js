const URL = 'https://api.themoviedb.org/3/movie/'
const api = 'api_key=' + 'cbad74847d63fd64867bfb3fe06ef4dc'

export async function getMoviesByCategory(
  { category = 'now_playing', lang = 'es-MX', page = 1 },
  controller = {}
) {
  const categoria = category + '?'
  const idioma = '&language=' + lang
  const pagina = '&page=' + page
  const res = await fetch(URL + categoria + api + idioma + pagina, {
    signal: controller.signal,
  })
  const json = await res.json()
  return json
}
