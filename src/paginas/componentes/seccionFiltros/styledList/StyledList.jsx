export function StyledList({ children, titulo }) {
  return (
    <div className='dropdown dropdown-hover '>
      <label
        tabIndex={0}
        className='btn btn-outline m-1 text-white hover:bg-none'
      >
        <h2>{titulo}</h2>
      </label>
      <ul
        tabIndex={0}
        className='menu menu-sm dropdown-content p-2 shadow rounded-box w-52 bg-black/95'
      >
        {children}
      </ul>
    </div>
  )
}

export function ResponsiveList({ children, titulo }) {
  return (
    <ul className='menu'>
      <li>
        <details>
          <summary>{titulo}</summary>
          <ul>{children}</ul>
        </details>
      </li>
    </ul>
  )
}
