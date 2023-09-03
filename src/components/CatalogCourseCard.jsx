import { Link } from 'react-router-dom';

function CatalogCourseCard({ course }) {
    return (
        <Link to={`/courses/${course.id}/`} className='card'>
            <img src={course.imgURL} className='object-cover w-full h-52' />
            <div className='text-accent font-bold text-sm my-4'>{course.title}</div>

            {course.progress >= 0 && (
                <div className='w-full px-5 mb-4'>
                    <div className='bg-gray-200 h-1.5 rounded-md'>
                        <div className='bg-accent h-1.5 rounded-md' style={{ width: course.progress + '%' }}></div>
                    </div>
                    <div className='text-sm text-gray-600 mt-2'>{course.progress}% Complete</div>
                </div>
            )}
        </Link>
    );
}

export default CatalogCourseCard;
