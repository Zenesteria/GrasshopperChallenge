import React from 'react'

export default function CodeBanner() {
  return (
    <div className='w-full h-fit bg-cyan text-black flex items-center justify-center p-10'>
        <div className="flex flex-wrap justify-around items-center w-[100%]">
            <img src="/images/grasshopper__practice__meditate.svg" className='w-[200px]' alt="grasshopper" />
            <div className="flex flex-col text-center items-center min-w-[300px] max-w-[500px] my-10 md:my-0">
                <h1 className='text-[2rem] font-bold mb-3'>Learn to code anywhere.</h1>
                <p style={{fontSize:'calc(1rem + 0.5vw)'}}>Grasshopper is available on Android and all web browsers. Your progress syncs seamlessly between devices.</p>
            </div>
            <img src="/images/devices.svg" className='w-[200px]' alt="devices" />
        </div>
    </div>
  )
}
