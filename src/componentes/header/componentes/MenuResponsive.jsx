import { Icono } from '../../svgMenu/Icono'
import { Link } from 'react-router-dom'

export function MenuResponsive() {
  return (
    <div className='dropdown w-full sm:hidden'>
      <label tabIndex={0} className='btn btn-ghost btn-circle'>
        <Icono />
      </label>
      <ul
        tabIndex={0}
        className='menu overflow-hidden menu-lg w-full bg-black/95 dropdown-content mt-3 shadow'
      >
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
    </div>
  )
}
