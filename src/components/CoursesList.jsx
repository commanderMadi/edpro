import { Link } from "react-router-dom"

import Carousel from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css"

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  }
}

function CoursesList({ courses, category }) {

  let coursesToDisplay = []
  courses.forEach(course => {
    if (course.category == category) coursesToDisplay.push(course)
  })

  return (
    <Carousel
      swipeable={false}
      draggable={false}
      showDots={false}
      responsive={responsive}
      infinite={true}
    >
      {coursesToDisplay.map((course) => (
        <Link to={`${course.id}`} key={course.id} className="card">
          <img src={course.imgURL} className="object-cover w-full h-52"/>
          <div className="text-accent font-bold text-sm my-4">{course.title}</div>
        </Link>
      ))}
    </Carousel>
  )
}

export default CoursesList