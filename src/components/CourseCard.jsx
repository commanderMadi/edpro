import { Link } from "react-router-dom";

function CourseCard({ course }) {

  return (
    <Link to={`${course.id}`} className="card">
      <img src={course.imgURL} className="object-cover w-full h-52"/>
      <div className="text-accent font-bold text-sm my-4">{course.title}</div>
    </Link>
  )
}

export default CourseCard