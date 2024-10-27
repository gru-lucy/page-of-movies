export function equipo(objeto) {
  const array = objeto.cast
  return array
    .filter((ele) => ele.profile_path !== null)
    .slice(0, 9)
    .map((ele) => ({
      nombre: ele.original_name,
      papel: ele.character,
      foto: 'https://image.tmdb.org/t/p/w154' + ele.profile_path,
    }))
}
