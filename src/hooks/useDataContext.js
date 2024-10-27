import { useContext } from 'react'
import { dataContext } from '../contexto/data'

export function useDataContext() {
  const { idioma, updateLanguage, generos } = useContext(dataContext)

  return { idioma, updateLanguage, generos }
}
