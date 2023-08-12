import { Link } from "react-router-dom"
import { useLogout } from "../hooks/useLogout"
import { useAuthContext } from "../hooks/useAuthContext"

function Navbar() {
  const { logout } = useLogout()
  const { user } = useAuthContext()

  return (
    <div className="flex justify-between px-8 py-5 bg-accent text-white text-lg">
      <div className="text-2xl font-bold">EdPro</div>
      <nav className="flex space-x-8 mr-5">
        <Link to={`courses`}>Catalog</Link>
        {!user && (
          <>
            <Link to={`login`}>Login</Link>
            <Link to={`register`}>Register</Link>
          </>
        )}
        {user && (
          <>
            <Link to={`my-courses`}>My Courses</Link>
            <Link to={`forums`}>Forums</Link>
            <Link to={`account`}>Account</Link>
            <div className="cursor-pointer" onClick={logout}>Logout</div>
          </>
        )}
      </nav>
    </div>
  )
}

export default Navbar