// import React, { useState } from 'react'

export default function TextSliderUp() {
    // const [text, setText] = useState(['textone','texttwo','textthree'])
    const options = ['expands your network','develops new skills','launches new careers','creates new hobbies','opens new doors','expands your network','develops new skills','launches new careers','creates new hobbies','opens new doors']
    return (

        // Set height to height of each h4 tag
        <div className="h-[24px] w-full overflow-hidden">
            <div className='text-animate flex flex-col'>
                {options.map((option, index) => {
                    return <h4 key={index}>{option}</h4>
                })}
            </div>
        </div>
    )
}
