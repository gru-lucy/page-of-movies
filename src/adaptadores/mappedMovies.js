export function peliculasMapeadas({ originalMovies }) {
  return originalMovies?.map((movie) => ({
    id: movie.id,
    titulo: movie.title,
    posterImg: 'https://image.tmdb.org/t/p/w200' + movie.poster_path,
  }))
}
