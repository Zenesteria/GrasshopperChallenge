import React from 'react'

export default function Bg() {
  return (
    <div className="absolute top-0 left-0 w-full h-full z-[-1] overflow-hidden">

        {/* Macbook */}
        <img src="/images/macbook.png" alt="macbook" className=' w-[32%] absolute left-[33%] top-[32%] z-30' />

        {/* Phone */}
        <img src="/images/hero__pixel.png" alt="phone" className=' w-[20%] absolute mt-10 z-40 right-[22%] top-[7%]' />

        {/* Big light green bush at the back */}
        <img src="/images/hero__background-hills.svg" alt="background hills" className=' w-full absolute bottom-0' />

        {/* Round Tree with dark green color */}
        <img src="/images/hero__tree-dark.svg" alt="dark green tree" className=' w-[20%] absolute top-[40%] left-[-2%]' />
        
        {/* Skinny Tree with light green color */}
        <img src="/images/hero__tree-skinny.svg" alt="light green tree" className=' w-[12%] absolute top-[40%] left-[15%]' />

        {/* Grasshopper */}
        <img src="/images/hero__grasshopper.svg" alt="background hills" className=' w-[40%] absolute top-[30%] right-[6%]' />
    </div>
  )
}
