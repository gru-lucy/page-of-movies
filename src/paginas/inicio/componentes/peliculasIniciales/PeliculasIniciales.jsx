import { useDataTrending } from './hooks/useDataTrending'
import { useDataPopular } from './hooks/useDataPopular'
import { Carrusel } from './componentes/Carrusel'
import { Tabs } from './componentes/Tabs'

export function PeliculasIniciales() {
  const { peliculas, isLoading, clave, updateTrendingMovies } =
    useDataTrending()
  const { peliculas: peliculas2, isLoading: isLoading2 } = useDataPopular()

  return (
    <section className='bg-gray-900/80'>
      <Carrusel
        peliculas={peliculas}
        titulo={'Tendencias'}
        urlLink={'/peliculas/tendencias/del_dia'}
        isLoading={isLoading}
      >
        <Tabs palabraActiva={clave} updateFunction={updateTrendingMovies} />
      </Carrusel>
      <Carrusel
        isLoading={isLoading2}
        peliculas={peliculas2}
        titulo={'Lo Más Popular'}
        urlLink={'/peliculas'}
      />
    </section>
  )
}
