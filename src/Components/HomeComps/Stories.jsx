import React from 'react'
import SlideShow from '../SlideShow/SlideShow'

export default function Stories() {
  return (
    <div className='w-full flex flex-col items-center h-[80vh] my-[5rem]'>
        <h1 className='text-[2.3rem] font-bold text-center my-10'>Grasshopper Stories</h1>
        <SlideShow/>
    </div>
  )
}
