import { Link } from 'react-router-dom'

export function PeliculaCard({ pelicula }) {
  return (
    <div className="max-w-[160px] mx-auto sm:max-w-[200px] text-center px-1">
      <Link to={`/pelicula/${pelicula.id}`}>
        <div className="p-2 rounded-md space-y-1">
          <img
            className="rounded-md w-full object-cover min-h-[185px] xl:min-h-[260px]"
            src={pelicula.posterImg}
            alt={pelicula.titulo}
          />
          <p className="text-white font-light text-base-">{pelicula.titulo}</p>
        </div>
      </Link>
    </div>
  )
}
