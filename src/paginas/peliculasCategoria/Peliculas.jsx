import { usePeliculas } from './usePeliculas'
import { StyledPage } from '../componentes/styledPage/StyledPage'

export default function Peliculas() {
  const { titulo, peliculas, paginas, url, isLoading } = usePeliculas()

  return (
    <StyledPage
      titulo={titulo}
      peliculas={peliculas}
      paginas={paginas}
      url={url}
      isLoading={isLoading}
    />
  )
}
