import React from 'react'
import NavLink from './NavLink'
import { Link } from 'react-router-dom'
import { FaBars } from 'react-icons/fa'

export default function Nav() {
  return (
    <nav className='flex items-center px-10 py-4 h-fit w-full'>
        {/* BRAND LINK */}
        <div className="flex p-4 mr-4">
            <Link to='/' className='font-bold text-[#002c43] text-[2rem] mb-2'>grasshopper</Link>
        </div>

        {/* NAV LINKS */}
        <ul className='hidden lg:flex w-fit h-fit items-center'>
            <NavLink text='What is coding' path='/what-is-coding'/>
            <NavLink text='Curriculum' path='/curriculum'/>
            <NavLink text='Glossary' path='/glossary'/>
            <NavLink text='About Us' path='/about'/>
            <NavLink text='FAQ' path='/faq'/>
        </ul>

        {/* AUX LINKS */}
        <ul className="hidden lg:flex ml-auto">
            <NavLink text={'Sign In'} path='/signin'/>
        </ul>

        {/* Mobile Button */}
        <FaBars className='lg:hidden text-[2rem] ml-auto'/>
    </nav>
  )
}
