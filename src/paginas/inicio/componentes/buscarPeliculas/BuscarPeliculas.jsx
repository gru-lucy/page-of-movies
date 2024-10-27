import { Form } from 'react-router-dom'

export function BuscarPeliculas() {
  return (
    <section className='bg-gradient-to-b from-gray-900 to-gray-900/80 text-center py-16 sm:pt-32 text-white'>
      <h1 className='font-bold text-4xl sm:text-5xl'>Buscar Peliculas</h1>
      <p className='py-4 text-sm font-normal text-white/40 uppercase'>
        solo peliculas
      </p>
      <Form action='/busqueda' className='flex gap-x-2 mx-auto px-2 max-w-3xl'>
        <div className='relative w-full'>
          <div className='absolute top-0 flex w-full justify-center'>
            <div className='h-[1px] animate-border-width rounded-full bg-gradient-to-r from-[rgba(17,17,17,0)] via-white to-[rgba(17,17,17,0)] transition-all duration-1000' />
          </div>
          <input
            className='block h-12 w-full rounded-md border border-gray-800 bg-gray-950 px-3 py-2 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 focus:ring-offset-gray-50'
            placeholder='Madagascar...'
            required
            autoComplete='off'
            name='query'
          />
        </div>
        <button className='relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-gray-50'>
          <span className='absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]' />
          <span className='inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-gray-950 px-8 py-1 text-sm font-medium text-gray-50 backdrop-blur-3xl'>
            Buscar
          </span>
        </button>
      </Form>
    </section>
  )
}
