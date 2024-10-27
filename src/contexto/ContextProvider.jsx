import { useState } from 'react'
import { getListOfGeners } from '../servicios/getListOfGeners'
import { dataContext } from './data'
import useSWR from 'swr'

export function ContextProvider({ children }) {
  const [idioma, setIdioma] = useState('es-MX')
  const updateLanguage = (evento) => {
    setIdioma(evento.target.value)
  }

  const { data } = useSWR(['listaDeGeneros', idioma], () =>
    getListOfGeners({ lang: idioma })
  )

  return (
    <dataContext.Provider value={{ idioma, updateLanguage, generos: data }}>
      {children}
    </dataContext.Provider>
  )
}
