import React from 'react'

export default function Slide({data}) {
  return (
    <div className='relative rounded-md h-[350px] my-5 p-10 shadow-[0_5px_10px_rgb(0,0,0,0.2)] bg-[rgb(251,251,251)] border-[rgb(202,202,202)] border-[0.5px] mx-4 flex'>
        <div className="w-fit">
            <img src={`${data.img}`} alt="user" className='w-[120px] absolute' />
        </div>
        <div className="flex h-full flex-col flex-[0.7] ml-auto">
            <p className='text-[1.4rem] text-black caption'>{data.caption}</p>
        </div>
    </div>
  )
}
