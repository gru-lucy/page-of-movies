import { usePaginaGeneros } from './usePaginaGeneros'
import { StyledPage } from '../componentes/styledPage/StyledPage'

export default function PaginaGeneros() {
  const { titulo, peliculas, isLoading, paginas, url } = usePaginaGeneros()

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
