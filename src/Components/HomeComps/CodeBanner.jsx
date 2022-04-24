import React from 'react'

export default function CodeBanner() {
  return (
    <div className='w-full h-fit bg-cyan text-black flex items-center justify-center p-10'>
        <div className="flex justify-around items-center w-[95%]">
            <img src="/images/grasshopper__practice__meditate.svg" alt="grasshopper" />
            <div className="flex flex-col text-center items-center flex-[0.7]">
                <h1 className='text-[2rem] font-bold'>Learn to code anywhere.</h1>
                <p className='text-[1.5rem]'>Grasshopper is available on Android and all web browsers. Your progress syncs seamlessly between devices.</p>
            </div>
            <img src="/images/devices.svg" alt="devices" />
        </div>
    </div>
  )
}
