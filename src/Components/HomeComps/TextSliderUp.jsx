import React, { useState } from 'react'

export default function TextSliderUp() {
    const [text, setText] = useState(['textone','texttwo','textthree'])
    return (
        <div className="h-[20px] w-full overflow-hidden">
            <div className='text-animate'>
                <h4>text one</h4>
                <h4>text two</h4>
            </div>
        </div>
    )
}
