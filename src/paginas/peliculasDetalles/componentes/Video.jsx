import { useState } from 'react'

export function Video({ idKey }) {
  const [isVisible, setIsVisible] = useState(false)
  return (
    <>
      <button
        onClick={() => setIsVisible(true)}
        className='relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-gray-50'
      >
        <span className='absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]' />
        <span className='inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-gray-950 px-8 py-1 text-sm font-medium text-gray-50 backdrop-blur-3xl'>
          Ver Trailer
        </span>
      </button>
      {isVisible && (
        <div className='fixed lg:mt-[90px] mx-auto z-[110] inset-0'>
          <div className='modal-box overflow-hidden min-h-[650px] mx-auto max-w-4xl w-full flex justify-center flex-col items-center'>
            <iframe
              className='w-full min-h-[520px]'
              src={'https://www.youtube-nocookie.com/embed/' + idKey}
              title='YouTube video player'
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
              allowFullScreen
            ></iframe>
            <div className='modal-action'>
              <div className='flex flex-col items-center gap-y-2'>
                <p className='font-semibold text-sm text-black/75'>
                  Si no se encuentra disponible el trailer en el idioma elejido,
                  se colocara el trailer por oficial en Ingles.
                </p>
                <button
                  onClick={() => setIsVisible(false)}
                  htmlFor='my_modal_6'
                  className='btn '
                >
                  Cerrar ventana!
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
