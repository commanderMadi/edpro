import { useCollection } from '../hooks/useCollection';
import { useAuthContext } from '../hooks/useAuthContext';
import { useDocument } from '../hooks/useDocument';
import { useEffect, useState } from 'react';
import { Grid, Box, ListItemButton, Button } from '@mui/material';

function Lesson() {
    const [currentCourse, setCurrentCourse] = useState(null);
    const { documents: courses } = useCollection('courses');
    const { user } = useAuthContext();
    const { document: currentUser } = useDocument('users', user.uid);

    useEffect(() => {
        let courseData = null;
        if (currentUser) {
            currentUser.courses.forEach((enrolledCourse) => {
                courseData = courses.filter((course) => course.id === enrolledCourse.id);
                const course = courseData[0];
                setCurrentCourse(course);
            });
        }
    }, [courses, currentUser]);
    return (
        <Box className='min-h-screen bg-gray-50 p-10  !mx-auto' maxWidth='lg' sx={{ flexGrow: 1 }}>
            <Grid className='' container spacing={2}>
                <Grid className='bg-white min-h-screen !pt-14 shadow-md' item xs={3}>
                    <ListItemButton className=' !text-gray-900 !mb-4' component='a' href='#lesson1'>
                        <div id='lesson-1' className='text-center w-full text-lg hover:text-red-300 font-bold'>
                            What is DOM
                        </div>
                    </ListItemButton>
                    <ListItemButton className='  !text-gray-900 !mb-4' component='a' href='#lesson2'>
                        <div id='lesson-2' className='text-center w-full text-lg hover:text-red-300'>
                            DOM Manipulation
                        </div>
                    </ListItemButton>
                    <ListItemButton className=' !text-gray-900 !mb-4' component='a' href='#lesson3'>
                        <div id='lesson-3' className='text-center w-full text-lg hover:text-red-300'>
                            Dom Traversing
                        </div>
                    </ListItemButton>
                    <ListItemButton className=' !text-gray-900 !mb-4' component='a' href='#lesson4'>
                        <div id='lesson-4' className='text-center w-full text-lg hover:text-red-300'>
                            Accessing Siblings
                        </div>
                    </ListItemButton>
                    <ListItemButton className=' !text-gray-900 !mb-4' component='a' href='#lesson5'>
                        <div id='lesson-5' className='text-center w-full text-lg hover:text-red-300'>
                            JS Events
                        </div>
                    </ListItemButton>
                    <ListItemButton className=' !text-gray-900 !mb-4' component='a' href='#lesson6'>
                        <div id='lesson-6' className='text-center w-full text-lg hover:text-red-300'>
                            Event Bubbling Vs Event Capturing
                        </div>
                    </ListItemButton>
                    <ListItemButton className=' !text-gray-900 !mb-4' component='a' href='#lesson7'>
                        <div id='lesson-7' className='text-center w-full text-lg hover:text-red-300'>
                            Unit Summary
                        </div>
                    </ListItemButton>
                </Grid>
                <Grid item xs={9}>
                    {currentCourse &&
                        currentCourse.lessons.map((lesson) => {
                            console.log(lesson);
                            return (
                                <Box className='!font-sans p-10' key={lesson.id}>
                                    <h1 className='text-4xl text-accent mb-4'>{lesson.lessonTitle}</h1>
                                    <p className='!font-sans'>{lesson.lessonBody}</p>
                                    <Box className='flex justify-between mt-10'>
                                        <Button className='!text-accent'>Previous</Button>
                                        <Button className='!text-accent'>Next</Button>
                                    </Box>
                                </Box>
                            );
                        })}
                </Grid>
            </Grid>
        </Box>
    );
}

export default Lesson;
