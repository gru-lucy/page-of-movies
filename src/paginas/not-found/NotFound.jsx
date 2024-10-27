import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div className='grid h-screen px-4  place-content-center'>
      <div className='text-center'>
        <h1 className='font-black text-gray-200 text-9xl'>404</h1>

        <p className='text-2xl font-bold tracking-tight text-gray-400 sm:text-4xl'>
          Uh-oh!
        </p>

        <p className='mt-4 text-lg text-white'> pero que ha pasao? </p>

        <Link
          to='/'
          className='inline-block px-5 py-3 mt-6 text-sm font-medium text-white bg-indigo-600 rounded hover:bg-indigo-700 focus:outline-none focus:ring'
        >
          Volver al Inicio
        </Link>
      </div>
    </div>
  )
}
