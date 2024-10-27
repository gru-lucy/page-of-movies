import { usePeliculaDelDia } from './usePeliculaDelDia'
import { Loading } from '../../../../componentes/loading/Loading'
import { Link } from 'react-router-dom'

export function PeliculaDelDia() {
  const { objPelicula, isLoading } = usePeliculaDelDia()

  if (isLoading) {
    return <Loading />
  }

  return (
    <section
      style={{ backgroundImage: `url(${objPelicula.imgFondo})` }}
      className='relative min-h-[75vh] bg-cover bg-top'
    >
      <div className='absolute inset-0 bg-gradient-to-b from-gray-900/70 via-gray-900/70  to-gray-900'></div>

      <div className='relative mx-auto max-w-7xl px-4 py-28 text-white'>
        <h1 className='text-4xl sm:text-5xl'>
          <span className='text-[30px] font-light'>Pelicula Del Dia:</span>
          <strong className='block text-rose-700 font-extrabold'>
            {objPelicula.titulo}
          </strong>
        </h1>

        <p className='mt-4 max-w-xl font-extralight'>{objPelicula.desc}</p>

        <Link
          to={'/pelicula/' + objPelicula.id}
          className='inline-flex h-12 animate-background-shine items-center justify-center rounded-md border border-gray-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-gray-400 transition-colors focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-gray-50 mt-5'
        >
          Ver más detalles
        </Link>
      </div>
    </section>
  )
}
