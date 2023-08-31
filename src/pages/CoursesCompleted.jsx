import { useOutletContext } from "react-router-dom"

import CoursesCarousel from "../components/CoursesCarousel"

function CoursesCompleted() {
  const {userDoc: user, courses} = useOutletContext()
  
  let completed = []
  courses.forEach(course => {
    user.courses.forEach(e => {
      if (e.isComplete && e.id == course.id) {
        completed.push(course)
      }
    })
  })

  return (
    <div>
      {<CoursesCarousel courses={completed} />}
      {completed.length == 0 && <div>You have not completed any courses yet.</div>}
    </div>
  )
}

export default CoursesCompleted