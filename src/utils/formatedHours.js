export function formatedHours({ minutos }) {
  const formato = 'Xh:Ym'
  const horaFormateada = formato.replaceAll(/[XY]/g, (letra) => {
    const horas = Math.trunc(minutos / 60)
    const minutes = minutos - 60 * horas
    if (letra === 'X') {
      return horas
    }
    if (letra === 'Y') {
      return minutes
    }
  })
  return horaFormateada
}
