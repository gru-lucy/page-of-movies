const { VITE_API_KEY } = import.meta.env
const URL = 'https://api.themoviedb.org/3/movie/'
const api = 'api_key=' + VITE_API_KEY

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
