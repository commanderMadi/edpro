import { Link } from "react-router-dom"

function CoursesList({ courses }) {

  return (
    <div className='flex justify-evenly'>
      {courses.map((course) => (
        <Link to={`${course.id}`} key={course.id} className="card">
          <img src={course.imgURL} className="object-cover w-full h-60"/>
          <div className="text-accent font-bold text-sm my-4">{course.title}</div>
        </Link>
      ))}
    </div>
  )
}

export default CoursesList