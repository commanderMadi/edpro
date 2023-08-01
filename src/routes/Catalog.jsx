import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import CourseCards from '../components/CourseCards';

import prevIcon from '../assets/chevron_left.svg'
import nextIcon from '../assets/chevron_right.svg'

const responsive = {
  0: { items: 1 },
  568: { items: 2 },
  1024: { items: 3 },
};

const items = [
  <CourseCards title={'Frontend Developer'}/>,
  <CourseCards title={'Backend Developer'}/>,
  <CourseCards title={'Mobile Developer'}/>,
];

function Catalog() {

  return (
    <div className="p-8 mr-5">
      <div className="flex justify-between">
        <h1 className="text-xl font-bold">Course Catalog</h1>
        <div>Searchbar</div>
      </div>

      <div>
        <h2 className="font-bold text-accent py-5">Web Development</h2>
        <AliceCarousel 
          mouseTracking
          items={items}
          infinite
          responsive={responsive}
          disableDotsControls
          renderPrevButton={() => {
            return <img src={prevIcon} alt='previous icon' className='h-1/3 absolute left-0 top-0'/>
          }}
          renderNextButton={() => {
            return <img src={nextIcon} alt='previous icon' className='h-1/3 absolute right-0 top-0'/>
          }}
        />
      </div>

    </div>
  )
}

export default Catalog