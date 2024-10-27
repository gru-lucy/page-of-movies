import AliceCarousel from 'react-alice-carousel'
import 'react-alice-carousel/lib/alice-carousel.css'
import { Link } from 'react-router-dom'
import { PeliculaCard } from './../../../../../componentes/pelicula/PeliculaCard'

export function Carrusel({ peliculas, urlLink, titulo, children, isLoading }) {
  const peliItems = peliculas?.map((peli) => (
    <PeliculaCard key={peli.id} pelicula={peli} />
  ))

  return (
    <section className='max-w-6xl mx-auto py-5 '>
      <h2 className='text-2xl text-rose-700 sm:text-3xl px-6 my-4 font-extrabold'>
        {titulo}
      </h2>
      <div className='px-6'>{children}</div>
      <div className='p-3 sm:py-4 sm:rounded-sm'>
        {isLoading && <Loader />}
        <AliceCarousel
          autoWidth={true}
          autoPlay={true}
          items={peliItems}
          infinite={true}
          autoPlayInterval={1300}
          disableButtonsControls={true}
        />
        <Link
          className='inline-flex h-12 animate-background-shine items-center justify-center rounded-md border border-gray-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-gray-400 transition-colors focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-gray-50 w-full'
          to={urlLink}
        >
          Ver más
        </Link>
      </div>
    </section>
  )
}

function Loader() {
  return (
    <div className='min-h-[280px] flex justify-center items-center'>
      <span className='loading loading-bars loading-lg'></span>
    </div>
  )
}
