import { useBusqueda } from './useBusqueda'
import { StyledPage } from './../componentes/styledPage/StyledPage'

export default function ResultadoBusqueda() {
  const { peliculas, titulo, paginas, url, isLoading } = useBusqueda()

  return (
    <StyledPage
      paginas={paginas}
      peliculas={peliculas}
      titulo={titulo}
      url={url}
      isLoading={isLoading}
    />
  )
}
