export function imagenes({ arrayImgs }) {
  return arrayImgs?.map((img) => ({
    puntuacion: img.vote_average,
    iso: img.iso_639_1,
    url: 'https://image.tmdb.org/t/p/w400' + img.file_path,
  }))
}
