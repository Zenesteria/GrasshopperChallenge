import React from 'react'

export default function Slide({data}) {
  return (
    <div className='relative flex items-center flex-col sm:flex-row opacity-50 transition-all duration-300 min-w-[200px] rounded-md min-h-[350px] my-5 p-10 bg-[rgb(251,251,251)] border-[rgb(202,202,202)] border-[0.5px] mx-4 '>
        <div className="h-fit w-fit flex flex-[0.3] items-center justify-center">
            <img src={`${data.img}`} alt="user" className='w-[10vw] min-w-[100px]' />
        </div>
        <div className="flex h-full flex-col flex-[0.7] ml-auto">
            <p className='text-black caption' style={{fontSize:'calc(0.4rem + 1vw)'}}>{data.caption}</p>
        </div>
    </div>
  )
}
