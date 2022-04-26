import React from 'react'
import Slide from './Slide'
// import SlideBtns from './SlideBtns'

import SliderData from '../../Data/SliderData'

import Slider from 'react-slick'

export default function Slides() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 4000,
    slidesToShow: 3,
    centerMode: true,
    slidesToScroll: 1,
    autoplay: true,
    appendDots: dots => (
      <div>
        <ul> {dots} </ul>
      </div>
      ),
      responsive: [
        {
          breakpoint: 860,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            centerMode:true,
            dots: true,
            autoplay:true
          }
        }
      ]
  };
  return (
    <div className='w-full h-full flex flex-col items-center my-5 overflow-hidden'>
        <div className='w-full lg:w-[160%] h-fit'>
            <Slider {...settings}>
              {SliderData.map((data) => {
                  return(
                      <Slide data={data} key={data.id}/>
                  )
              })}
            </Slider>
      </div>
    </div>
  )
}
