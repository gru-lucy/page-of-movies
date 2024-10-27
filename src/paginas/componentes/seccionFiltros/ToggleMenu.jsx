import { Icono } from '../svgMenu/Icono'

export function ToggleMenu({ value, setValue }) {
  return (
    <>
      <label className='btn btn-circle swap swap-rotate'>
        <input
          onChange={() => setValue(!value)}
          type='checkbox'
          value={value}
        />
        <Icono />
      </label>
    </>
  )
}
