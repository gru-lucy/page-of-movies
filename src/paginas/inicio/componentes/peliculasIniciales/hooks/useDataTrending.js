import { useState } from 'react'
import useSWR from 'swr'
import { peliculasMapeadas } from '../../../../../adaptadores/mappedMovies'
import { useDataContext } from '../../../../../hooks/useDataContext'
import { getTrendingMovies } from '../../../../../servicios/getTrendingMovies'

export function useDataTrending() {
  const { idioma } = useDataContext()
  const [clave, setClave] = useState('day')

  const { data, isLoading } = useSWR(
    ['getDataTrendingInicial', idioma, clave],
    () => getTrendingMovies({ date: clave, lang: idioma })
  )
  const peliculas = data && peliculasMapeadas({ originalMovies: data.results })
  const updateTrendingMovies = (evento) => {
    setClave(evento.target.value)
  }

  return { peliculas, isLoading, updateTrendingMovies, clave }
}
