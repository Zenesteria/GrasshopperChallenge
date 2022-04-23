import React from 'react'
import { Link } from 'react-router-dom'
import TextSliderUp from './TextSliderUp'

export default function Showcase() {
  return (
    <div className='w-full h-[120vh] px-[10rem] py-[4rem] relative'>
        <div className="absolute top-0 left-0 w-full h-full z-[-1] overflow-hidden">

            {/* Macbook */}
            <img src="/images/macbook.png" alt="macbook" className=' w-[32%] absolute left-[33%] top-[32%] z-30' />

            {/* Phone */}
            <img src="/images/hero__pixel.png" alt="phone" className=' w-[20%] absolute mt-10 z-40 right-[22%] top-[7%]' />

            {/* Big light green bush at the back */}
            <img src="/images/hero__background-hills.svg" alt="background hills" className=' w-full absolute bottom-0' />

            {/* Round Tree with dark green color */}
            <img src="/images/hero__tree-dark.svg" alt="dark green tree" className=' w-[20%] absolute top-[40%] left-[-2%]' />
            
            {/* Skinny Tree with light green color */}
            <img src="/images/hero__tree-skinny.svg" alt="light green tree" className=' w-[12%] absolute top-[40%] left-[15%]' />

            {/* Grasshopper */}
            <img src="/images/hero__grasshopper.svg" alt="background hills" className=' w-[40%] absolute top-[30%] right-[6%]' />
        </div>
        <div className="flex flex-col w-fit min-w-[300px] text-deepblack">
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
            <Link exact to='/start-coding-today' className='text-white rounded-full text-[1.1rem] bg-green w-fit px-10 py-4 font-bold'>Start Coding Today</Link>
        </div>
    </div>
  )
}
