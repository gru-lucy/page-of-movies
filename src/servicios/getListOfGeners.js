const URL = 'https://api.themoviedb.org/3/genre/movie/list?api_key='

export async function getListOfGeners({ lang = 'es' }) {
  const idioma = '&language=' + lang
  const res = await fetch(URL + 'cbad74847d63fd64867bfb3fe06ef4dc' + idioma)
  const json = await res.json()
  const { genres } = json
  return genres
}
