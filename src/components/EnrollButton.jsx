import { useDocument } from "../hooks/useDocument"
import { useEnroll } from "../hooks/useEnroll"

function EnrollButton({ userID, course }) {
  const { document: user, error } = useDocument('users', userID)
  const { enroll } = useEnroll()

  const isEnrolled = () => {
    return user && user.courses.inProgress.includes(course.id) ? true : false
  }

  const handleEnroll = (e) => {
    e.preventDefault()
    enroll(user, course)
  }

  console.log(isEnrolled())

  return (
  <>
    {!isEnrolled() && 
      <button
        className="btn-primary"
        onClick={handleEnroll}
      >
        Enroll
      </button>
    }
    {isEnrolled() && 
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