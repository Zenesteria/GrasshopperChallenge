import React from 'react'

export default function SiteHighlights({caption, img}) {
  return (
    <div className='flex flex-col items-center w-full h-full'>
        <img src={`/images/${img}`} alt="coding" className='w-[75%] my-5 rounded-full bg-cyan' />
        <p className='my-5 text-[1.5rem] text-center font-semibold'>
            {caption}
        </p>
    </div>
  )
}
