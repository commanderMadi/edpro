import { NavLink } from "react-router-dom"
import { Outlet } from "react-router-dom"

import { useAuthContext } from "../hooks/useAuthContext"
import { useDocument } from "../hooks/useDocument"
import { useCollection } from "../hooks/useCollection"

function MyCourses() {
  const { user } = useAuthContext()
  const { document: userDoc, userDocError } = useDocument('users', user.uid)
  const { documents: courses, CoursesError } = useCollection('courses')

  return (
    <div className="page">
      <h1 className="h1">My Courses</h1>
      <div className="flex">
        <NavLink to='enrolled' className="tab">Enrolled</NavLink>
        <NavLink to='completed' className="tab">Completed</NavLink>
      </div>
        {(userDoc && courses) && <Outlet context={{userDoc, courses}}/>}
        {(userDocError || CoursesError) && <div>Something went wrong...</div>}
    </div>
  )
}

export default MyCourses