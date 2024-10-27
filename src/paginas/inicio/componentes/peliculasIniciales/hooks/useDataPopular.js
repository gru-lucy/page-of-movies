import useSWR from 'swr'
import { useDataContext } from '../../../../../hooks/useDataContext'
import { getMoviesByCategory } from '../../../../../servicios/getMoviesByCategory'
import { peliculasMapeadas } from './../../../../../adaptadores/mappedMovies'

export function useDataPopular() {
  const { idioma } = useDataContext()

  const { data, isLoading } = useSWR(['getDataPopularInicial', idioma], () =>
    getMoviesByCategory({ category: 'popular', lang: idioma })
  )
  const peliculas = data && peliculasMapeadas({ originalMovies: data.results })
  return { peliculas, isLoading }
}
