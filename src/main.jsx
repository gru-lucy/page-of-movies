import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Inicio from './paginas/inicio/Inicio.jsx'
import Peliculas from './paginas/peliculasCategoria/Peliculas.jsx'
import PeliculaDetalles from './paginas/peliculasDetalles/PeliculaDetalles'
import { Series } from './paginas/series/Series.jsx'

const PaginaTendencias = React.lazy(() =>
  import('./paginas/peliculasTendencia/PaginaTendencias.jsx')
)
const PaginaGeneros = React.lazy(() =>
  import('./paginas/peliculasGenero/PaginaGeneros.jsx')
)
const ResultadoBusqueda = React.lazy(() =>
  import('./paginas/resultadoBusqueda/ResultadoBusqueda')
)
const NotFound = React.lazy(() => import('./paginas/not-found/NotFound'))

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <Inicio />,
      },
      {
        path: '/peliculas/:query?/page?/:page?',
        element: <Peliculas />,
      },
      {
        path: '/peliculas/tendencias/:query?/page?/:page?',
        element: <PaginaTendencias />,
      },
      {
        path: '/peliculas/generos/:query?/page?/:page?',
        element: <PaginaGeneros />,
      },
      {
        path: '/pelicula/:peliId',
        element: <PeliculaDetalles />,
      },
      {
        path: '/busqueda/page?/:page?',
        element: <ResultadoBusqueda />,
      },
      {
        path: '/series',
        element: <Series />,
      },
    ],
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
