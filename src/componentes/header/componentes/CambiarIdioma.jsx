import { useDataContext } from '../../../hooks/useDataContext'

export function CambiarIdioma() {
  const { idioma, updateLanguage } = useDataContext()

  return (
    <select
      className='select bg-transparent max-w-xs font-bold'
      value={idioma}
      onChange={updateLanguage}
    >
      <option className='bg-black/95' value='es-MX'>
        Español
      </option>
      <option className='bg-black/95' value='en-US'>
        Ingles
      </option>
      <option className='bg-black/95' value='pt-BR'>
        Portugues
      </option>
    </select>
  )
}
