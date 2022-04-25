import React from 'react'
import { Link } from 'react-router-dom'
import TextSliderUp from '../TextSliderUp'
import Bg from './Bg'

export default function Showcase() {
  return (
    <div className='w-full h-screen flex justify-center relative'>
        <Bg/>
        <div className="flex flex-col items-center justify-center text-center lg:text-left lg:items-start w-[95%] min-w-[330px] sm:px-[5rem] py-[3rem] h-fit mx-[2rem] text-deepblack">
            <h1 className=' font-bold' style={{fontSize: 'calc(1rem + 1.5vw)'}}>
              Welcome to Grasshopper, <br />
              the coding app for beginners
            </h1>
            <div className="flex items-center font-semibold my-3" style={{fontSize: 'calc(0.8rem + 0.5vw)'}}>
                <h1>Learning to code</h1>
                <div className="mx-2 h-fit">
                    <TextSliderUp/>
                </div>
            </div>
            <Link to='/start-coding-today' className='text-white  rounded-full bg-green w-fit px-10 py-4 font-semibold'>Start Coding Today</Link>
        </div>
    </div>
  )
}
