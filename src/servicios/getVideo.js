const api = '?api_key=' + 'cbad74847d63fd64867bfb3fe06ef4dc'
import { video } from '../adaptadores/video'

export async function getVideo({ id, lang }) {
  const url = `https://api.themoviedb.org/3/movie/${id}/videos`
  const idioma = '&language=' + lang
  const res = await fetch(url + api + idioma)
  const json = await res.json()
  const keys = video(json)
  if (keys.length === 0) {
    const res = await fetch(url + api + '&language=en-US')
    const json = await res.json()
    const keys = video(json)
    return keys
  }
  return keys
}
