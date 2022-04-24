import React from 'react'
import SiteHighlights from './SiteHighlights'

export default function SubShowcase() {
  return (
    <div className='w-full flex flex-col h-fit bg-lightgreen text-deepblack items-center'>
        <h1 className=' text-center text-[2rem] font-bold'>The best way to start your coding adventure.</h1>
        <div className="grid grid-cols-3 gap-10 w-[80%] h-[60vh] my-5 p-5">
            <SiteHighlights 
                caption='Learn with fun, quick lessons on your phone that teach you to write real JavaScript.'
                img='adventure__waving.svg'
            />
            <SiteHighlights
                caption='Move through progressively challenging levels as you develop your abilities.'
                img='adventure__coding.svg'
            />
            <SiteHighlights
                caption='Graduate with fundamental programming skills for your next step as a coder.'
                img='adventure__journey.svg'
            />
        </div>
    </div>
  )
}
