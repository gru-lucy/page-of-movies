import { Link } from 'react-router-dom'

export function Paginacion({ paginas, url }) {
  const obgPagina = paginas ?? {
    paginaActual: 1,
    paginasTotales: 1,
  }

  const backLink = `${url}/page/${
    obgPagina.paginaActual - 1 === 0 ? 1 : obgPagina.paginaActual - 1
  }`

  const nextLink = `${url}/page/${
    obgPagina.paginaActual + 1 > obgPagina.paginasTotales
      ? obgPagina.paginasTotales
      : obgPagina.paginaActual + 1
  }`

  return (
    <div className='btn-group w-full flex justify-center py-4 '>
      <Link className='btn btn-outline text-white' to={backLink}>
        «
      </Link>
      <button className='btn btn-outline text-white'>
        Pagina {obgPagina.paginaActual}
      </button>
      <Link className='btn btn-outline text-white' to={nextLink}>
        »
      </Link>
    </div>
  )
}
