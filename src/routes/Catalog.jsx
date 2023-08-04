import { useCollection } from '../hooks/useCollection'

import CoursesList from '../components/CoursesList'

function Catalog() {
  const { documents: courses, error } = useCollection('courses')

  let categories = new Set()
  if (courses && !error) {
    courses.forEach(course => categories.add(course.category));
  }

  return (
    <div className="p-8 mr-5">
      <div className="flex justify-between">
        <h1 className="text-xl font-bold">Course Catalog</h1>
        <div>Searchbar</div>
      </div>

      {[...categories].map((category) => (
        <div key={category}>
          <h2 className="font-bold text-accent py-5">{category}</h2>
          <div>
            {error && <p>{error}</p>}
            {courses && <CoursesList courses={courses} category={category} />}
          </div>
        </div>
      ))}

    </div>
  )
}

export default Catalog