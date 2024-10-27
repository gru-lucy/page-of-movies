export function paginasAdaptadas({ pagesObject }) {
  return {
    paginaActual: pagesObject.page,
    paginasTotales: pagesObject.total_pages,
  }
}
