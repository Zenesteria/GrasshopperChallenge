import React from 'react'
import { Link } from 'react-router-dom'
import TextSliderUp from './TextSliderUp'

export default function Showcase() {
  return (
    <div className='w-full h-[100vh] px-[10rem] py-[4rem]'>
        <div className="flex flex-col w-fit min-w-[300px] text-cus-deepblack">
            <h1 className='text-[2.2rem] font-bold'>
              Welcome to Grasshopper, <br />
              the coding app for beginners
            </h1>
            <div className="flex items-center h-[50px] text-[1.4rem] my-2 font-semibold">
                <h1>Learning to code</h1>
                <div className="mx-2 h-fit">
                    <TextSliderUp/>
                </div>
            </div>
            <Link exact to='/start-coding-today' className='text-cus-white rounded-full text-[1.1rem] bg-cus-darkgreen w-fit px-10 py-4 font-bold'>Start Coding Today</Link>
        </div>
    </div>
  )
}
