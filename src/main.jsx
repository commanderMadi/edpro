import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'

import Root from './routes/Root'
import Catalog from './routes/Catalog'
import Course from './routes/Course'
import Login from './routes/Login'
import Register from './routes/Register'
import MyCourses from './routes/MyCourses'
import Account from './routes/Account'
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
        path: '/login',
        element: <Login />,
      },
      {
        path: '/register',
        element: <Register />,
      },
      {
        path: '/my-courses',
        element: <MyCourses />
      },
      {
        path: '/forums',
      },
      {
        path: '/account',
        element: <Account />
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
