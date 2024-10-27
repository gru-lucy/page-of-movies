import { useParams } from 'react-router-dom'
import { paginasAdaptadas } from '../../adaptadores/adaptedPages'
import { peliculasMapeadas } from '../../adaptadores/mappedMovies'
import { useDataContext } from '../../hooks/useDataContext'
import { useGeneros } from '../../hooks/useGeneros'
import { getMoviesByGeners } from '../../servicios/getMoviesByGeners'
import useSWR from 'swr'

export function usePaginaGeneros() {
  const { idioma } = useDataContext()
  const { query, page = 1 } = useParams()
  const id = query || '28'
  const { generos } = useGeneros()
  const findGenero = generos?.find((obj) => obj.id === parseInt(id))
  const titulo = findGenero?.name ?? 'Sin generos'
  const url = '/peliculas/generos/' + id
  let paginas = {}

  const { data, isLoading } = useSWR(
    ['getDataPeliculasPorGenero', idioma, page, id],
    () => getMoviesByGeners({ gener: id, lang: idioma, page: page })
  )
  window.scrollTo(0, 0)

  const peliculas = data && peliculasMapeadas({ originalMovies: data.results })
  paginas = data && paginasAdaptadas({ pagesObject: data })

  return { titulo, peliculas, isLoading, paginas, url }
}
