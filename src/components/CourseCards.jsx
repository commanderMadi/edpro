import courseImg from '../assets/course-ph.jpg'

function CourseCards({ title }) {

  return (
    <div className="flex flex-col items-center rounded overflow-hidden shadow-md">
      <img src={courseImg} className="object-cover"/>
      <div className="text-accent font-bold text-sm my-3">{title}</div>
    </div>
  )
}

export default CourseCards