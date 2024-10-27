import { CambiarIdioma } from './componentes/CambiarIdioma'
import { MenuResponsive } from './componentes/MenuResponsive'
import { Link } from 'react-router-dom'

export function Header() {
  return (
    <header className='sticky navbar top-0 left-0 text-white/80 z-50 bg-[#011222]'>
      <nav className='w-full max-w-7xl mx-auto flex'>
        <MenuResponsive />
        <ul className='flex-1 font-bold hidden sm:flex px-4 gap-x-7 [&_li:hover]:text-rose-500'>
          <li>
            <Link to={'/'}>Inicio</Link>
          </li>
          <li>
            <Link to={'/peliculas'}>Peliculas</Link>
          </li>
          <li>
            <Link to={'/series'}>Series</Link>
          </li>
        </ul>
        <CambiarIdioma />
      </nav>
    </header>
  )
}
