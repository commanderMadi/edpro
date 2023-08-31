import { useDocument } from "../hooks/useDocument"
import { useEnroll } from "../hooks/useEnroll"

function EnrollButton({ userID, course }) {
  const { document: user, error } = useDocument('users', userID)
  const { enroll } = useEnroll()

  const isEnrolled = () => {
    const enrolledIds = user.courses.map(e => e.id)
    return enrolledIds.includes(course.id)
  }

  const handleEnroll = (e) => {
    e.preventDefault()
    enroll(user, course)
  }

  return (
  <>
    {user && !isEnrolled() && 
      <button
        className="btn-primary"
        onClick={handleEnroll}
      >
        Enroll
      </button>
    }
    {user && isEnrolled() && 
      <button
        className="btn-primary"
        disabled
      >
        Already Enrolled
      </button>
    }
  </>
  )
}

export default EnrollButton