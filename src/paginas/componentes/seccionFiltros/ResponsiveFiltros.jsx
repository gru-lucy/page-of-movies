import { Lista } from './lista/Lista'
import { ListaResponsive } from './lista/ListaResponsive'
import { Form } from 'react-router-dom'

export function ResponsiveFiltros() {
  return (
    <div className='p-5 mb-4 rounded-md'>
      <div className='gap-x-2 space-y-3 xl:flex items-center justify-center xl:space-y-0'>
        <Form
          action='/busqueda'
          className='input-group max-w-md mx-auto xl:mx-0'
        >
          <input
            name='query'
            type='text'
            placeholder='Search…'
            className='input bg-black w-full input-bordered '
          />
          <button className='btn btn-square'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-6 w-6'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
              />
            </svg>
          </button>
        </Form>
        <Lista />
        <ListaResponsive />
      </div>
    </div>
  )
}
