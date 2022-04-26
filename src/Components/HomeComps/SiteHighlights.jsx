import React from 'react'

export default function SiteHighlights({caption, img}) {
  return (
    <div className='flex flex-col items-center w-[300px] h-fit m-2'>
        <img src={`/images/${img}`} alt="coding" className='w-[75%] my-5 rounded-full bg-cyan' />
        <p className='my-5 text-center font-semibold' style={{fontSize: 'calc(1rem + 0.3vw)'}}>
            {caption}
        </p>
    </div>
  )
}
