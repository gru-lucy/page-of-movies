export function Tabs({ palabraActiva, updateFunction }) {
  const isDayClass = palabraActiva === 'day' && ' border-white/80'
  const isWeekClass = palabraActiva === 'week' && ' border-white/80'

  return (
    <div className="tabs bg-transparent ">
      <button
        className={`tab tab-bordered ${isDayClass} text-white`}
        onClick={updateFunction}
        value={'day'}
      >
        Del Dia
      </button>
      <button
        className={`tab tab-bordered  ${isWeekClass} text-white`}
        onClick={updateFunction}
        value={'week'}
      >
        De La Semana
      </button>
    </div>
  )
}
