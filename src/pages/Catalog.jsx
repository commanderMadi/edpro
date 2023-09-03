import { useState } from 'react';
import { useCollection } from '../hooks/useCollection';

import CoursesFilter from '../components/CoursesFilter';
import CourseCard from '../components/CatalogCourseCard';
import CoursesCarousel from '../components/CoursesCarousel';

function Catalog() {
    const { documents: courses, error } = useCollection('courses');
    const [filtered, setFiltered] = useState(null);

    //Group the courses by categories
    let categories = {};
    if (courses) {
        courses.forEach((c) => {
            const cat = c['category'];

            //add a key if the group does not exist
            !(cat in categories) && (categories[cat] = []);

            //add the course to the relevant group
            categories[cat].push(c);
        });
    }

    return (
        <div className='page'>
            <div className='flex justify-between'>
                <h1 className='h1'>Course Catalog</h1>
                {courses && <CoursesFilter courses={courses} setFiltered={setFiltered} />}
            </div>

            {courses &&
                !filtered &&
                Object.keys(categories).map((cat) => (
                    <div key={cat} className='mb-4'>
                        <h2 className='font-bold text-accent'>{cat}</h2>
                        <CoursesCarousel courses={categories[cat]} />
                    </div>
                ))}

            {filtered && filtered.length != 0 && (
                <div className='grid grid-flow-row grid-cols-3 auto-rows-max'>
                    {filtered.map((c) => (
                        <CourseCard course={c} key={c.id} />
                    ))}
                </div>
            )}

            {filtered && filtered.length == 0 && (
                <div className='flex justify-center my-12 text-lg'>No courses matching search criteria...</div>
            )}

            {error && <p>{error}</p>}
        </div>
    );
}

export default Catalog;
