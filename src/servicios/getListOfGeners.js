const { VITE_API_KEY } = import.meta.env
const URL = 'https://api.themoviedb.org/3/genre/movie/list?api_key='

export async function getListOfGeners({ lang = 'es' }) {
  const idioma = '&language=' + lang
  const res = await fetch(URL + VITE_API_KEY + idioma)
  const json = await res.json()
  const { genres } = json
  return genres
}
