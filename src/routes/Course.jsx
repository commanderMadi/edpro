import { useParams } from "react-router-dom"
import { useDocument } from "../hooks/useDocument"

function Course() {
  const { id } = useParams()
  const { document: course, error } = useDocument('courses', id)

  if (error) {
    return <div>{error}</div>
  }
  if (!course) {
    return <div>Loading...</div>
  }

  return (
    <div>
      <h1>{course.title}</h1>
    </div>
  )
}

export default Course