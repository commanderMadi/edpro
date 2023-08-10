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
    <div>
      <label>
        <span>Min Students</span>
        <input 
          type='range'
          min='0'
          max={studentsMax}
          value={filter.minStudents}
          onChange={e => filterCourses({...filter, minStudents: e.target.value})}
        />
      </label>
      <label>
        <span>Min Rating</span>
        <input 
          type='range'
          min='0'
          max='5'
          value={filter.minRating}
          step='0.5'
          onChange={e => filterCourses({...filter, minRating: e.target.value})}
        />
      </label>
      <div>
        {categories.map(cat => (
          <label key={cat}>
            <input 
              type='checkbox'
              value={cat}
              checked={filter.categories.includes(cat)}
              onChange={selectCategories}
            />
            <span>{cat}</span>
          </label>
        ))}
      </div>
      <label>
        <span>Search</span>
        <input 
          type='text'
          value={filter.searchStr}
          onChange={e => filterCourses({...filter, searchStr: e.target.value})}
        />
      </label>
      <button onClick={resetFilter}>Clear</button>
    </div>
  )
}

export default CoursesFilter