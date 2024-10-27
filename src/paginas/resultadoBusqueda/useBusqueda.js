import { useSearchParams } from 'react-router-dom'
import useSWR from 'swr'
import { peliculasMapeadas } from '../../adaptadores/mappedMovies'
import { useDataContext } from '../../hooks/useDataContext'
import { getMoviesBySearch } from '../../servicios/getMoviesBySearch'
import { paginasAdaptadas } from './../../adaptadores/adaptedPages'

export function useBusqueda() {
  const { idioma } = useDataContext()
  const [parametros] = useSearchParams()
  const busqueda = parametros.get('query').split('/')[0]
  const page = parametros.get('query').split('/')[2]
  const url = '/busqueda?query=' + busqueda
  let paginas = {}

  const { data, isLoading } = useSWR(
    ['useDataBusquedaPeliculas', idioma, busqueda, page],
    () => getMoviesBySearch({ query: busqueda, lang: idioma, page: page })
  )
  window.scrollTo(0, 0)

  const peliculas = data && peliculasMapeadas({ originalMovies: data.results })
  paginas = data && paginasAdaptadas({ pagesObject: data })

  return { peliculas, titulo: busqueda, paginas, url, isLoading }
}
