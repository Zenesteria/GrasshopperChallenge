import React from 'react'
// import { Link } from 'react-router-dom'
import TextSliderUp from '../TextSliderUp'
import Bg from './Bg'

export default function Showcase() {
  return (
    <div className='w-full h-[100vh] lg:h-[120vh] flex justify-center relative'>
        <Bg/>
        <div className="flex flex-col items-center justify-center text-center lg:text-left lg:items-start w-[95%] min-w-[300px] px-[5rem] py-[3rem] h-fit mx-[2rem] text-deepblack">
            <h1 className='text-[2rem] font-bold'>
              Welcome to Grasshopper, <br />
              the coding app for beginners
            </h1>
            <div className="flex items-center h-[40px] font-semibold">
                <h1>Learning to code</h1>
                <div className="mx-2 h-fit">
                    <TextSliderUp/>
                </div>
            </div>
            {/* <Link to='/start-coding-today' className='text-white rounded-full bg-green w-fit px-7 py-3 font-bold mr-auto'>Start Coding Today</Link> */}
        </div>
    </div>
  )
}
