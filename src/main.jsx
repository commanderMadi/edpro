import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'

import Root from './routes/Root'
import Catalog from './routes/Catalog'
import Course from './routes/Course'
import Signin from './routes/Signin'
import Register from './routes/Register'
import ErrorPage from "./error-page"


const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/courses',
        element: <Catalog />,
      },
      {
        path: '/courses/:id',
        element: <Course />,
      },
      {
        path: '/signin',
        element: <Signin />,
      },
      {
        path: '/register',
        element: <Register />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
