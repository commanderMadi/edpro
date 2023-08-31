import { useOutletContext } from "react-router-dom"

import CoursesCarousel from "../components/CoursesCarousel"

function CoursesEnrolled() {
  const {userDoc: user, courses} = useOutletContext()

  let enrolled = []
  courses.forEach(course => {
    user.courses.forEach(e => {
      if (!e.isComplete && e.id == course.id) {
        enrolled.push({...course, progress: e.progress})
      }
    })
  })

  return (
    <div>
      {<CoursesCarousel courses={enrolled} />}
      {enrolled.length == 0 && <div>You are not enrolled in any courses yet.</div>}
    </div>
  )
}

export default CoursesEnrolled