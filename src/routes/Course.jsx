import { Link, useParams } from "react-router-dom"
import { useDocument } from "../hooks/useDocument"

import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'


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
      <img src={course.imgURL} className="object-cover w-full h-80"/>
      <div className="p-5">
        <div className="flex">
          <h1 className="text-2xl font-bold ">{course.title}</h1>
          <div className="px-4">
            <Rating 
              style={{ maxWidth: 180 }}
              value={course.rating}
              readOnly
            />
          </div>
        </div>
        <div className="text-slate-500">
          <p>{course.months} months, at {course.weeklyHours} hours per week</p>
          <p>{course.students} students enrolled</p>
        </div>
        <div className="py-5 mr-96">
          <p className="text-2xl pb-4">What's in it for you?</p>
          <p className="text-lg">{course.description}</p>
        </div>
        <div className="flex justify-end">
          <Link to='/signin' className="btn-primary mr-4">Sign In To Enroll</Link>
          <Link to='/courses' className="btn-secondary">Go Back</Link>
        </div>
      </div>
    </div>
  )
}

export default Course