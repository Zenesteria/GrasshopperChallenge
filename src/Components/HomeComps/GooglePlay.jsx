import React from 'react'
import { Link } from 'react-router-dom'

export default function GooglePlay() {
  return (
    <div className='relative w-full mt-10 h-screen lg:h-[65vh] bg-cyan flex justify-center items-center text-black overflow-hidden'>

        {/* BACKGROUND IMAGES */}
        <div className="w-full h-full absolute top-0 left-0">
            {/* Clouds */}
            <img className='w-[7%] absolute top-[5%] right-[-30%] cloudTwo min-w-[100px]' src="/images/section--get-started__cloud.svg" alt="cloud" />
            <img className='w-[15%] absolute top-[25%] cloudOne min-w-[200px]' src="/images/section--get-started__cloud.svg" alt="cloud" />
            <img className='w-[10%] absolute top-[65%] right-[10%] cloudThree min-w-[70px]' src="/images/section--get-started__cloud.svg" alt="cloud" />

            {/* Grasshopper Mother */}
            <img className='absolute right-[30%] bottom-[-35%] md:right-[10%] lg:right-[15%] lg:bottom-[-75%] w-[25%] lg:w-[18%] min-w-[150px]' src="/images/section--get-started__grasshopper-mama.svg" alt="grasshopper" />
        </div>


        <div className="w-fit min-w-[330px] flex justify-center lg:justify-start p-5 h-[60%] z-30">
            <div className="flex w-[60%] text-center lg:text-left min-w-[330px] flex-col">
                <h1 className='font-bold mb-10' style={{fontSize:'calc(1.5rem + 1.5vw)'}}>Get started on your adventure in coding with Grasshopper.</h1>
                <div className="flex flex-wrap justify-center">
                    <Link to='/start-coding-today' className='text-white rounded-full min-w-[200px] text-center text-[1.1rem] bg-green w-fit px-10 py-4 mx-4 font-bold h-fit'>Get Started</Link>
                    <Link to='/googleplay' className='flex-[1] min-w-[150px] max-w-[200px] m-3'><img className='w-full m-0' src="/images/button--google-play.png" alt="google play" /></Link>
                </div>
            </div>
        </div>
    </div>
  )
}
