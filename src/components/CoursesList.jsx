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

function CoursesList({ courses }) {

  return (
    <Carousel
      swipeable={true}
      draggable={false}
      showDots={false}
      responsive={responsive}
      infinite={true}
    >
      {courses.map((course) => (
        <Link to={`${course.id}`} key={course.id} className="card">
          <img src={course.imgURL} className="object-cover w-full h-52"/>
          <div className="text-accent font-bold text-sm my-4">{course.title}</div>
        </Link>
      ))}
    </Carousel>
  )
}

export default CoursesList