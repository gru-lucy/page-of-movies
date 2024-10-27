import { ListaDePeliculas } from '../listaDePeliculas/ListaDePeliculas'
import { Paginacion } from '../paginacion/Paginacion'
import { ResponsiveFiltros } from '../seccionFiltros/ResponsiveFiltros'
import { Loading } from './../../../componentes/loading/Loading'

export function StyledPage({ titulo, peliculas, paginas, url, isLoading }) {
  if (isLoading) {
    return <Loading />
  }

  document.title = `Peliculas | ${titulo}`

  return (
    <section className='bg-gray-900/80'>
      <div className='max-w-7xl mx-auto p-1 sm:p-3'>
        <h1 className='text-2xl text-white text-center sm:text-4xl my-2 sm:my-4 py-10 font-extrabold rounded-lg'>
          Películas - <span className='text-rose-700'>{titulo}</span>
        </h1>
        <div className='text-center text-gray-500 text-sm'>
          <p>Ultimos Estrenos en streaming.</p>
          <p>Enterate de todos los estrenos de esta semana.</p>
        </div>
        <ResponsiveFiltros />
        <ListaDePeliculas peliculas={peliculas} />
        <Paginacion paginas={paginas} url={url} />
      </div>
    </section>
  )
}
