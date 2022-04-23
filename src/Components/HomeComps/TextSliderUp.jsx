// import React, { useState } from 'react'

export default function TextSliderUp() {
    // const [text, setText] = useState(['textone','texttwo','textthree'])
    const options = ['expands your network','develops new skills','launches new careers','creates new hobbies','opens new doors','expands your network','develops new skills','launches new careers','creates new hobbies','opens new doors']
    return (
        <div className="h-[34px] w-full overflow-hidden">
            <div className='text-animate flex flex-col'>
                {options.map((option) => {
                    return <h4>{option}</h4>
                })}
            </div>
        </div>
    )
}
