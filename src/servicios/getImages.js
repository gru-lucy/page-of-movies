const api = '?api_key=' + 'cbad74847d63fd64867bfb3fe06ef4dc'
import { imagenes } from '../adaptadores/imagenes'

export async function getImages({ id }, controlador = {}) {
  const url = `https://api.themoviedb.org/3/movie/${id}/images`
  const res = await fetch(url + api, { signal: controlador.signal })
  const json = await res.json()
  const formatedImages = imagenes({ arrayImgs: json.backdrops })
  const sortedImages = formatedImages
    .sort((a, b) => a.puntuacion - b.puntuacion)
    .filter((img) => img.iso === null)
  return sortedImages
}
