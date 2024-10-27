import useSWR from 'swr'
import { getTrendingMovies } from '../../../../servicios/getTrendingMovies'
import { useDataContext } from '../../../../hooks/useDataContext'

export function usePeliculaDelDia() {
  const { idioma } = useDataContext()
  const { data, isLoading } = useSWR(['getPeliculaDelDia', idioma], () =>
    getTrendingMovies({ date: 'day', lang: idioma })
  )
  const pelicula = data && data.results[0]
  const objPelicula = data && {
    id: pelicula.id,
    titulo: pelicula.title,
    imgFondo: 'https://image.tmdb.org/t/p/original' + pelicula.backdrop_path,
    desc: pelicula.overview,
  }

  return { objPelicula, isLoading }
}
