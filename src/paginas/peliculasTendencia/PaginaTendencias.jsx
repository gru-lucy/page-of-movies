import { useTendencias } from './useTendencias'
import { StyledPage } from '../componentes/styledPage/StyledPage'

export default function PaginaTendencias() {
  const { titulo, peliculas, paginas, url, isLoading } = useTendencias()

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
