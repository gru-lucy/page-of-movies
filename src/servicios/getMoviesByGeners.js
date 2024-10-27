const { VITE_API_KEY } = import.meta.env
const URL =
  'https://api.themoviedb.org/3/discover/movie?api_key=' + VITE_API_KEY

export async function getMoviesByGeners(
  { gener, lang = 'es-MX', page = 1 },
  controlador = {}
) {
  const genero = '&with_genres=' + gener
  const idioma = '&language=' + lang
  const pagina = '&page=' + page
  const res = await fetch(URL + genero + idioma + pagina, {
    signal: controlador.signal,
  })
  const json = await res.json()
  return json
}
