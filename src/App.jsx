import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom'
import { useAuthContext } from './hooks/useAuthContext'

import Root from './layouts/Root'
import MyCourses from './layouts/MyCourses'

import Catalog from './pages/Catalog'
import Error from './pages/Error'
import Course from './pages/Course'
import Login from './pages/Login'
import Register from './pages/Register'
import Account from './pages/Account'
import CoursesEnrolled from './pages/CoursesEnrolled'
import CoursesCompleted from './pages/CoursesCompleted'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route 
      path='/'
      element={<Root />}
      errorElement={<Error />}
    >
      <Route 
        index
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
      >
        <Route
          path='enrolled'
          element={<CoursesEnrolled />}
        />
        <Route
          path='completed'
          element={<CoursesCompleted />}
        />
      </ Route>
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