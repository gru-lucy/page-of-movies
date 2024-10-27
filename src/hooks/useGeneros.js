import { useDataContext } from './useDataContext'

export function useGeneros() {
  const { generos } = useDataContext()

  return { generos }
}
