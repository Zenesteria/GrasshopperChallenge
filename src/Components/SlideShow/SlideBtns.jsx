import React from 'react'

export default function SlideBtns({dots}) {
  return (
    <div
      style={{
        backgroundColor: "#ddd",
        borderRadius: "10px",
        padding: "10px"
      }}
    >
      <ul className='dots' style={{ margin: "0px" }}> {dots} </ul>
    </div>
  )
}
