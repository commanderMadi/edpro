import { useState } from 'react'
import { useCollection } from '../hooks/useCollection'

import CoursesFilter from '../components/CoursesFilter'
import CoursesGroups from '../components/CoursesGroups'
import CourseCard from '../components/CourseCard'

function Catalog() {
  const { documents:courses, error } = useCollection('courses')
  const [filtered, setFiltered] = useState(null)

  return (
    <div className="page">

      <div className="flex justify-between">
        <h1 className="h1">Course Catalog</h1>
        {courses && <CoursesFilter courses={courses} setFiltered={setFiltered} />}
      </div>

      {courses && !filtered && <CoursesGroups courses={courses} groupBy={'category'} />}

      {filtered && filtered.length != 0 &&
        <div className='grid grid-flow-row grid-cols-3 auto-rows-max'>
          {filtered.map(c => (
            <CourseCard course={c} key={c.id}/>
          ))}
        </div>
      }

      {filtered && filtered.length == 0 && 
        <div className='flex justify-center my-12 text-lg'>
          No courses matching search criteria...
        </div>
      }

      {error && <p>{error}</p>}
    </div>
  )
}

export default Catalog