import { StyledList } from '../styledList/StyledList'
import { StyledLink } from '../styledLink/StyledLink'
import { useGeneros } from './../../../../hooks/useGeneros'

export function Lista() {
  const { generos } = useGeneros()
  return (
    <div className='hidden sm:flex space-x-2 justify-center'>
      <StyledList titulo={'Categorias'}>
        <StyledLink to={'/peliculas/populares'}>Mas Populares</StyledLink>
        <StyledLink to={'/peliculas/en_vivo'}>En Vivo</StyledLink>
        <StyledLink to={'/peliculas/estrenos'}>Estrenos</StyledLink>
        <StyledLink to={'/peliculas/mas_valoradas'}>Mejor Valoradas</StyledLink>
      </StyledList>
      <StyledList titulo={'Tendencias'}>
        <StyledLink to={'/peliculas/tendencias/del_dia'}>Del Dia</StyledLink>
        <StyledLink to={'/peliculas/tendencias/de_la_semana'}>
          De La Semana
        </StyledLink>
      </StyledList>
      <StyledList titulo={'Generos'}>
        {generos?.map((gen) => (
          <StyledLink key={gen.id} to={`/peliculas/generos/${gen.id}`}>
            {gen.name}
          </StyledLink>
        ))}
      </StyledList>
    </div>
  )
}
