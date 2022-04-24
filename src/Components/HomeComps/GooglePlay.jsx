import React from 'react'
import { Link } from 'react-router-dom'

export default function GooglePlay() {
  return (
    <div className='relative w-full mt-10 h-[65vh] bg-cyan flex justify-center items-center text-black overflow-hidden'>

        {/* BACKGROUND IMAGES */}
        <div className="w-full h-full absolute top-0 left-0">
            {/* Clouds */}
            <img className='w-[15%] absolute top-[25%] cloudOne' src="/images/section--get-started__cloud.svg" alt="cloud" />
            <img className='w-[7%] absolute top-[5%] right-[-30%] cloudTwo' src="/images/section--get-started__cloud.svg" alt="cloud" />
            <img className='w-[10%] absolute top-[65%] right-[10%] cloudThree' src="/images/section--get-started__cloud.svg" alt="cloud" />

            {/* Grasshopper Mother */}
            <img className='absolute right-[15%] bottom-[-75%] w-[18%]' src="/images/section--get-started__grasshopper-mama.svg" alt="grasshopper" />
        </div>


        <div className="w-[70%] h-[60%] z-30">
            <div className="flex w-[60%] flex-col">
                <h1 className='text-[2.5rem] font-bold mb-10'>Get started on your adventure in coding with Grasshopper.</h1>
                <div className="flex h-fit items-center">
                    <Link to='/start-coding-today' className='text-white rounded-full text-[1.1rem] bg-green w-fit px-10 py-4 mx-4 font-bold h-fit'>Get Started</Link>
                    <Link to='/googleplay'><img className='w-[50%]' src="/images/button--google-play.png" alt="google play" /></Link>
                </div>
            </div>
        </div>
    </div>
  )
}
