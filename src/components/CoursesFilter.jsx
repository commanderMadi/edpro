import { useState } from "react"

function CoursesFilter({ courses, setFiltered }) {

  //Get maximum number of students across all courses
  const studentsMax = courses.reduce((prev, curr) => {
    return prev.students > curr.students ? prev : curr
  }).students

  //Create an array of unique categories
  const categories = [...new Set(courses.map(c => c.category))]

  //setup default filter
  const initialFilter = {
    minStudents: 0,
    minRating: 0,
    categories: categories,
    searchStr: ''
  }
  const [filter, setFilter] = useState(initialFilter)

  const selectCategories = (e) => {
    let activeCat = filter.categories
    
    e.target.checked ? 
      activeCat.push(e.target.value) : 
      activeCat.splice(activeCat.indexOf(e.target.value), 1)
    
    filterCourses({...filter, categories: activeCat})
  }

  const resetFilter = () => {
    setFiltered(null)
    setFilter(initialFilter)
  }

  const filterCourses = (f) => {
    courses = courses.filter(c => {
      return c.students >= f.minStudents &&
             c.rating >= f.minRating &&
             f.categories.includes(c.category) &&
             c.title.match(new RegExp(f.searchStr, 'i'))
    })
    setFiltered(courses)
    setFilter(f)
  }

  return (
    <div className="flex bg-gray-50 rounded-lg p-3">
      <div>
        <label className="labl-sldr">
          <span className="mr-2">Min Students</span>
          <input 
            type='range'
            min='0'
            max={studentsMax}
            value={filter.minStudents}
            onChange={e => filterCourses({...filter, minStudents: e.target.value})}
            className="sldr"
          />
          <input 
            type='text'
            value={filter.minStudents}
            onChange={e => filterCourses({...filter, minStudents: e.target.value})}
            className="sldr-txt"
            />
        </label>
        <label className="labl-sldr">
          <span className="mr-2">Min Rating</span>
          <input 
            type='range'
            min='0'
            max='5'
            value={filter.minRating}
            step='0.5'
            onChange={e => filterCourses({...filter, minRating: e.target.value})}
            className="sldr"
            />
          <input 
            type='text'
            value={filter.minRating}
            onChange={e => filterCourses({...filter, minRating: e.target.value})}
            className="sldr-txt"
            />
        </label>
      </div>
      <div>
        {categories.map(cat => (
          <div key={cat} className="mx-4">
            <label className="labl">
              <input 
                type='checkbox'
                value={cat}
                checked={filter.categories.includes(cat)}
                onChange={selectCategories}
                className="chkb mr-1"
              />
              <span>{cat}</span>
            </label>
          </div>
        ))}
      </div>
      <div className="mr-3">
        <input 
          type='text'
          value={filter.searchStr}
          onChange={e => filterCourses({...filter, searchStr: e.target.value})}
          className="srch mt-3"
          placeholder="Search"
        />
      </div>
      <button onClick={resetFilter} className="reset-btn center mt-3">Clear</button>
    </div>
  )
}

export default CoursesFilter