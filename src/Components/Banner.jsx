import React from 'react'

export default function Banner({text}) {
  return (
    <div className='w-full h-fit bg-cus-darkgreen flex justify-center items-center p-[0.7rem] text-cus-white font-bold'>
        <h4 className='text-[0.8rem]'>{text}</h4>
    </div>
  )
}
