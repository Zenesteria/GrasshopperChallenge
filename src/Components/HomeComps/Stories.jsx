import React from 'react'
import SlideShow from '../SlideShow/SlideShow'

export default function Stories() {
  return (
    <div className='w-full flex flex-col items-center h-screen my-[5rem]'>
        <h1 className=' font-bold text-center my-10' style={{fontSize:'calc(1.5rem + 1vw)'}}>Grasshopper Stories</h1>
        <SlideShow/>
    </div>
  )
}
