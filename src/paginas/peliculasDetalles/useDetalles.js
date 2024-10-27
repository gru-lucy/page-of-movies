import { useEffect, useState } from 'react'
import { useLocation, useParams } from 'react-router-dom'
import useSWR from 'swr'
import { useDataContext } from '../../hooks/useDataContext'
import { getCredits } from '../../servicios/getCredits'
import { getMovieDetails } from '../../servicios/getMovieDetails'
import { getVideo } from '../../servicios/getVideo'
import { formatedHours } from '../../utils/formatedHours'

export function useDetalles() {
  const { pathname } = useLocation()
  const { peliId } = useParams()
  const { idioma } = useDataContext()
  const { data, isLoading } = useSWR([idioma, peliId], () =>
    getMovieDetails({ id: peliId, lang: idioma })
  )

  const [equipo, setEquipo] = useState([])
  const [key, setKey] = useState('')

  useEffect(() => {
    window.scrollTo(0, 0)
    const controller = new AbortController()
    getCredits({ movieId: peliId, lang: idioma }, controller).then((res) =>
      setEquipo(res)
    )
    getVideo({ id: peliId, lang: idioma }).then((res) => setKey(res[0]))
    return () => controller.abort()
  }, [peliId, idioma, pathname])

  const generos = data && data.generos?.map((obg) => obg.name)
  const listaGeneros = generos?.join('-')
  const hora = data && formatedHours({ minutos: data.duracion })
  const fecha = data && data.lanzamiento?.split('-').reverse().join('-')

  return { detalles: data, listaGeneros, hora, fecha, isLoading, equipo, key }
}
