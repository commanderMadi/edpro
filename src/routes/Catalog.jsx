import { useCollection } from '../hooks/useCollection'

import CoursesList from '../components/CoursesList'

function Catalog() {
  const { documents, error } = useCollection('courses')

  //Filter courses
  const courses = documents ? documents.filter(course => {
    return course.students >= 1000
  }) : null

  //Group courses by category
  let categories = {}
  courses ? courses.forEach(course => {
    const cat = course.category
    
    //add a key if the category does not exist
    !(cat in categories) && (categories[cat] = [])

    categories[cat].push(course)
  }) : null

  return (
    <div className="p-8 mr-5">
      <div className="flex justify-between">
        <h1 className="text-xl font-bold">Course Catalog</h1>
        <div>Searchbar</div>
      </div>

      {Object.keys(categories).map((cat) => (
        <div key={cat}>
          <h2 className="font-bold text-accent py-5">{cat}</h2>
          <div>
            {error && <p>{error}</p>}
            {courses && <CoursesList courses={categories[cat]} />}
          </div>
        </div>
      ))}
    </div>
  )
}

export default Catalog