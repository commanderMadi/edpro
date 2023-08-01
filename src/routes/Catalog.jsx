import { useCollection } from '../hooks/useCollection'

import CoursesList from '../components/CoursesList'

function Catalog() {
  const { documents, error } = useCollection('courses')

  return (
    <div className="p-8 mr-5">
      <div className="flex justify-between">
        <h1 className="text-xl font-bold">Course Catalog</h1>
        <div>Searchbar</div>
      </div>

      <div>
        <h2 className="font-bold text-accent py-5">Web Development</h2>
        <div>
          {error && <p>{error}</p>}
          {documents && <CoursesList courses={documents} />}
        </div>
      </div>

    </div>
  )
}

export default Catalog