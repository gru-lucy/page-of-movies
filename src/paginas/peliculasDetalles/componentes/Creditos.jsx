export function Creditos({ equipo }) {
  return (
    <div className='relative'>
      <h2 className='font-semibold text-xl py-2'>Actores Principales:</h2>
      <div className='flex flex-wrap gap-2 max-w-7xl justify-center xl:justify-normal mx-auto'>
        {equipo.map((ele) => (
          <div key={ele.papel}>
            <img
              src={ele.foto}
              width={200}
              className='w-[90px] rounded-box'
              alt=''
            />
            <p className='max-w-[90px] font-semibold text-sm text-center'>
              {ele.nombre}
            </p>
            <p className='italic max-w-[90px] text-xs text-center'>
              {ele.papel}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}
