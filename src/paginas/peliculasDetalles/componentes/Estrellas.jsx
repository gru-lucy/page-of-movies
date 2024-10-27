export function Estrellas({ calificacion }) {
  const array = Array(10).fill(1)
  const soloEntero = Math.trunc(calificacion) || 0

  const estrellitas = array.map((itm, index) => {
    if ((index + 1) % 2 === 0) {
      return (
        <input
          key={index}
          readOnly
          type='radio'
          name='rating-10'
          className='bg-rose-700 mask mask-star-2 mask-half-2'
          checked={index + 1 === soloEntero}
        />
      )
    }
    return (
      <input
        key={index}
        readOnly
        type='radio'
        name='rating-10'
        className='bg-rose-700 mask mask-star-2 mask-half-1'
        checked={index + 1 === soloEntero}
      />
    )
  })

  return (
    <div className=''>
      <div className='flex items-center gap-x-2'>
        <div className='rating rating-md rating-half'>{estrellitas}</div>
        <p className='text-lg font-semibold'> {calificacion} </p>
      </div>
    </div>
  )
}
