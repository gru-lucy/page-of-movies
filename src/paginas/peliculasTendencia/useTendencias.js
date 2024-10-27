import { useParams } from 'react-router-dom'
import useSWR from 'swr'
import { paginasAdaptadas } from '../../adaptadores/adaptedPages'
import { peliculasMapeadas } from '../../adaptadores/mappedMovies'
import { useDataContext } from '../../hooks/useDataContext'
import { getTrendingMovies } from '../../servicios/getTrendingMovies'

const TITULOS_TENDENDIAS = {
  del_dia: 'Del dia',
  de_la_semana: 'De la semana',
}

const VALORES_TENDENCIAS = {
  del_dia: 'day',
  de_la_semana: 'week',
}

export function useTendencias() {
  const { idioma } = useDataContext()
  const { query, page = 1 } = useParams()
  const categoria = query || 'del_dia'
  const dateValue = VALORES_TENDENCIAS[categoria]
  const url = '/peliculas/tendencias/' + categoria
  const titulo = TITULOS_TENDENDIAS[categoria]
  let paginas = {}

  const { data, isLoading } = useSWR(
    ['useDataPeliculasPorTendencia', idioma, categoria, page],
    () => getTrendingMovies({ date: dateValue, lang: idioma, page: page })
  )
  window.scrollTo(0, 0)

  const peliculas = data && peliculasMapeadas({ originalMovies: data.results })
  paginas = data && paginasAdaptadas({ pagesObject: data })

  return { titulo, peliculas, paginas, url, isLoading }
}
