import { useParams } from 'react-router-dom'
import useSWR from 'swr'
import { paginasAdaptadas } from '../../adaptadores/adaptedPages'
import { peliculasMapeadas } from '../../adaptadores/mappedMovies'
import { useDataContext } from '../../hooks/useDataContext'
import { getMoviesByCategory } from '../../servicios/getMoviesByCategory'

const TITULOS_CATEGORIAS = {
  populares: 'Populares',
  en_vivo: 'En Vivo',
  estrenos: 'Estrenos',
  mas_valoradas: 'Mas Valoradas',
}

const VALORES_CATEGORIAS = {
  populares: 'popular',
  en_vivo: 'now_playing',
  estrenos: 'upcoming',
  mas_valoradas: 'top_rated',
}

export function usePeliculas() {
  const { query, page = 1 } = useParams()
  const { idioma } = useDataContext()
  const url = '/peliculas/' + (query || 'popular')
  const categoria = VALORES_CATEGORIAS[query] || 'popular'
  const titulo = TITULOS_CATEGORIAS[query] || 'Populares'
  let paginas = {}

  const { data, isLoading } = useSWR(
    ['getDataPeliculasPorCategoria', categoria, idioma, page],
    () => getMoviesByCategory({ category: categoria, lang: idioma, page: page })
  )
  window.scrollTo(0, 0)

  const peliculas = data && peliculasMapeadas({ originalMovies: data.results })
  paginas = data && paginasAdaptadas({ pagesObject: data })

  return { titulo, peliculas, isLoading, paginas, url }
}
