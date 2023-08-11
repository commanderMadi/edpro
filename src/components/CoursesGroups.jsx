import Carousel from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css"

import CourseCard from "./CourseCard"

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


function CoursesGroups({ courses, groupBy }) {
  
  let groups = {}
  courses.forEach(c => {
    const g = c[groupBy]

    //add a key if the group does not exist
    !(g in groups) && (groups[g] = [])

    //add the course to the relevant group
    groups[g].push(c)
  });

  return (
    <div>
      {Object.keys(groups).map(g => (
        <div key={g}>
          <h2 className="font-bold text-accent">{g}</h2>
          <Carousel
            swipeable={true}
            draggable={false}
            showDots={false}
            responsive={responsive}
            infinite={true}
          >
            {groups[g].map(c => (
              <CourseCard course={c} key={c.id}/>
            ))}
          </Carousel>
        </div>
      ))}
    </div>
  )
}

export default CoursesGroups