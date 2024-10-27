export function movideDetails({ obj }) {
  const isResponsive = screen.width
  const img = isResponsive <= 800 ? 'w300' : 'w1280'
  return {
    id: obj.id,
    titulo: obj.title,
    posterImg: 'https://image.tmdb.org/t/p/w400' + obj.poster_path,
    fondoImg: 'https://image.tmdb.org/t/p/' + img + obj.backdrop_path,
    descripcion: obj.overview,
    generos: obj.genres,
    subTitulo: obj.tagline,
    lanzamiento: obj.release_date,
    popularidad: obj.popularity,
    calificacion: obj.vote_average,
    duracion: obj.runtime,
  }
}
