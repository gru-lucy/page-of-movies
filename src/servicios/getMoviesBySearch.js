const { VITE_API_KEY } = import.meta.env
const URL = `https://api.themoviedb.org/3/search/movie?api_key=${VITE_API_KEY}`

export async function getMoviesBySearch(
  { query, lang = 'es-MX', page = 1 },
  controlador = {}
) {
  const busqueda = '&query=' + query
  const idioma = '&language=' + lang
  const pagina = '&page=' + page
  const res = await fetch(URL + busqueda + idioma + pagina, {
    signal: controlador.signal,
  })
  const json = await res.json()
  return json
}
