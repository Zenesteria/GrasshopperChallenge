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
    autoplay: false,
    appendDots: dots => (
      <div>
        <ul className='dots' style={{ margin: "0px" }}> {dots} </ul>
      </div>)
  };
  return (
    <div className='w-full h-full flex flex-col items-center justify-center my-5 overflow-hidden'>
        <div className='w-[160%]'>
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
