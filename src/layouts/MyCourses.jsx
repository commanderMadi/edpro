import { NavLink } from "react-router-dom"
import { Outlet } from "react-router-dom"

function MyCourses() {

  return (
    <div className="page">
      <h1 className="h1">My Courses</h1>
      <div className="flex">
        <NavLink to='enrolled' className="tab">Enrolled</NavLink>
        <NavLink to='completed' className="tab">Completed</NavLink>
      </div>
      <Outlet />
    </div>
  )
}

export default MyCourses