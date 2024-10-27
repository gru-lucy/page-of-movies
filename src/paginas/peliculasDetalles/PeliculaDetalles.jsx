import { useDetalles } from './useDetalles'
import { Estrellas } from './componentes/Estrellas'
import { FondoDetalles } from './componentes/FondoDetalles'
import { GaleriaImagenes } from './componentes/GaleriaImagenes'
import { Creditos } from './componentes/Creditos'
import { Video } from './componentes/Video'
import { Loading } from './../../componentes/loading/Loading'

export default function PeliculaDetalles() {
  const { detalles, listaGeneros, hora, fecha, isLoading, equipo, key } =
    useDetalles()

  if (isLoading) {
    return <Loading />
  }
  document.title = detalles.titulo
  return (
    <>
      <section className='relative text-white overflow-hidden'>
        <FondoDetalles img={detalles.fondoImg} />
        <div className='lg:flex px-3 gap-x-7 z-10 relative max-w-7xl mx-auto py-10 lg:py-28 min-h-[85vh]'>
          <div className='lg:min-w-[350px] max-h-[525px] w-[200px] min-h-[300px] lg:min-h-[525px] my-3 lg:my-0 rounded-box bg-base-200 mx-auto lg:mx-0'>
            <img
              className='mx-auto min-h-[300px] lg:min-h-[525px] w-full object-cover rounded-box '
              src={detalles.posterImg}
              alt={detalles.titulo}
              width={200}
            />
          </div>
          <div className='space-y-2'>
            <h1 className='text-4xl sm:text-5xl font-bold text-rose-700'>
              {detalles.titulo}
            </h1>
            <h2 className='text-xl font-semibold italic text-white'>
              {detalles.subTitulo}
            </h2>
            <h2 className='text-lg font-semibold'>
              {fecha} - <span className='font-bold'>{listaGeneros}</span>
              <span className='font-bold'> - {hora} </span>
            </h2>
            <Estrellas calificacion={detalles.calificacion} />
            <div className='text-white'>
              <h2 className='text-xl font-semibold pb-2 pt-3'>Resumen</h2>
              <p className='font-light'> {detalles.descripcion} </p>
            </div>
            <div>
              <Video idKey={key} />
            </div>
            <Creditos equipo={equipo} />
          </div>
        </div>
      </section>
      <GaleriaImagenes />
    </>
  )
}
