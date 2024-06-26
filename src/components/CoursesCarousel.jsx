import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import CatalogCourseCard from './CatalogCourseCard';

const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3,
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2,
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
    },
};

function CoursesCarousel({ courses }) {
    return (
        <Carousel swipeable={true} draggable={false} showDots={false} responsive={responsive} infinite={true}>
            {courses.map((c) => (
                <CatalogCourseCard course={c} key={c.id} />
            ))}
        </Carousel>
    );
}

export default CoursesCarousel;
