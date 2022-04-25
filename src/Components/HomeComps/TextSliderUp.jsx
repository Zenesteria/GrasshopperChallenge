// import React, { useState } from 'react'

import { useEffect, useState } from "react"

export default function TextSliderUp() {
    const [txtHeight, setTxtHeight] = useState('');
    useEffect(() => {
        const txt = document.getElementById('txtslide');
        const cont = document.getElementById('text-slide-cont');
        const height = txt.getBoundingClientRect().height;
        cont.style.setProperty('--height', `${-height}px`)
        setTxtHeight(height)
    }, [])
    // const [text, setText] = useState(['textone','texttwo','textthree'])
    const options = ['expands your network','develops new skills','launches new careers','creates new hobbies','opens new doors','expands your network','develops new skills','launches new careers','creates new hobbies','opens new doors']
    return (

        // Set height to height of each h4 tag
        <div className="w-full overflow-hidden" style={{height: `${txtHeight}px`}}>
            <div className='text-animate flex flex-col' id="text-slide-cont">
                {options.map((option, index) => {
                    return <h4 className="" key={index} id='txtslide'>{option}</h4>
                })}
            </div>
        </div>
    )
}
