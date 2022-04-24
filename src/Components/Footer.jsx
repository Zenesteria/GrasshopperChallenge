import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <div className='w-full flex flex-col justify-around items-center h-fit min-h-[300px] text-white bg-deepblack p-10'>
        <ul className="grid w-[70%] grid-cols-3 h-fit text-[1.1rem]">
            <FooterLink text='Home'/>
            <FooterLink text='Email Us'/>
            <FooterLink text='Terms of Service'/>
            <FooterLink text='What is coding'/>
            <FooterLink text='FAQ'/>
            <FooterLink text='Privacy Policy'/>
            <FooterLink text='About'/>
        </ul>
        <div className="flex justify-center items-center w-full h-[100px]">
              <h1>A Code with Google PROGRAM</h1>
        </div>
    </div>
  )
}


export const FooterLink = ({text}) => {
  return(
      <li className=' mx-4 my-1'>
        <Link to='/'>{text}</Link>
      </li>
  )
}
