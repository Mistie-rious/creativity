import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='flex justify-between font-Inter bg-indigo-400 text-white p-8'>
        <a>Creativity & Design</a>
        <div className=''>
        <a className='mr-8'>
          <Link to={`home`}>Home</Link>
          </a>
        <a className='mr-8'>
         <Link to={'gallery'}> Gallery </Link>
          </a>
        <a className='mr-8'>
          <Link to={`teams`}>Teams</Link>
          </a>
        <a className='mr-8'>
          <Link to={`aboutus`}>Contact Us</Link>
          </a>
        </div>
    </nav>
  )
}

export default Navbar