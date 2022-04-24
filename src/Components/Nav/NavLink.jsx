import React from 'react'
import { Link } from 'react-router-dom'

export default function NavLink({text, path}) {
  return (
    <li>
        <Link to={path} className='text-[rgb(178,178,178)] font-bold mx-3 text-[0.9rem] hover:text-black'>{text}</Link>
    </li>
  )
}
