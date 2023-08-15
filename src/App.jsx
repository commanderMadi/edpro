import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom'
import { useAuthContext } from './hooks/useAuthContext'

import RootLayout from './layouts/RootLayout'

import Home from './pages/Home'
import Catalog from './pages/Catalog'
import Error from './pages/Error'
import Course from './pages/Course'
import Login from './pages/Login'
import Register from './pages/Register'
import MyCourses from './pages/MyCourses'
import Account from './pages/Account'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route 
      path='/'
      element={<RootLayout />}
      errorElement={<Error />}
    >
      <Route 
        index
        element={<Home />}
      />
      <Route 
        path='courses' 
        element={<Catalog />}
      />
      <Route
        path='courses/:id'
        element={<Course />}
      />
      <Route
        path='login'
        element={<Login />}
      />
      <Route
        path='register'
        element={<Register />}
      />
      <Route 
        path='my-courses'
        element={<MyCourses />}
      />
      <Route
        path='account'
        element={<Account />}
      />
    </Route>
  )
)

function App() {
  const { authIsReady } = useAuthContext()

  return (
    <>
      {authIsReady && <RouterProvider router={router} />}
    </>
  )
}

export default App