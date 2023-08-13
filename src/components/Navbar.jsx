import { NavLink } from "react-router-dom"
import { useLogout } from "../hooks/useLogout"
import { useAuthContext } from "../hooks/useAuthContext"

function Navbar() {
  const { logout } = useLogout()
  const { user } = useAuthContext()

  return (
    <div className="flex justify-between px-8 py-5 bg-accent text-white text-lg">
      <NavLink to='/' className="text-2xl font-bold">EdPro</NavLink>
      <nav className="flex space-x-8 mr-5">
        <NavLink to='courses' className=''>Catalog</NavLink>
        {!user && (
          <>
            <NavLink to='login'>Login</NavLink>
            <NavLink to='register'>Register</NavLink>
          </>
        )}
        {user && (
          <>
            <NavLink to='my-courses'>My Courses</NavLink>
            <NavLink to='forums'>Forums</NavLink>
            <NavLink to='account'>Account</NavLink>
            <div className="cursor-pointer" onClick={logout}>Logout</div>
          </>
        )}
      </nav>
    </div>
  )
}

export default Navbar