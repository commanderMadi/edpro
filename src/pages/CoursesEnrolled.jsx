import { useOutletContext } from 'react-router-dom';

import OwnedCourseCard from '../components/OwnedCourseCard';

function CoursesEnrolled() {
    const { userDoc: user, courses } = useOutletContext();

    let enrolled = [];
    courses.forEach((course) => {
        user.courses.forEach(async (e) => {
            if (!e.isComplete && e.id == course.id) {
                enrolled.push({ ...course, progress: e.progress });
            }
        });
        console.log(enrolled);
    });

    return (
        <div>
            {enrolled.map((enrolledCourse) => (
                <OwnedCourseCard key={enrolledCourse.id} course={enrolledCourse} />
            ))}
            {enrolled.length == 0 && <div>You are not enrolled in any courses yet.</div>}
        </div>
    );
}

export default CoursesEnrolled;
