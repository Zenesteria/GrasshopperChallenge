import React from 'react'
import Slide from './Slide'
// import SlideBtns from './SlideBtns'

import SliderData from '../../Data/SliderData'

import Slider from 'react-slick'

export default function Slides() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    centerMode: true,
    slidesToScroll: 1
  };
  return (
    <div className='w-full h-full flex flex-col items-center justify-center my-5 overflow-hidden'>
        <div className='w-[160%]'>
            <Slider {...settings}>
              {SliderData.map((data) => {
                  return(
                    <div>
                      <Slide data={data}/>
                    </div>
                  )
              })}
            </Slider>
      </div>
    </div>
  )
}
