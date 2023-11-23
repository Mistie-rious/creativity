import React from 'react'

const Navbar = () => {
  return (
    <nav className='flex justify-between font-Inter bg-indigo-400 text-white p-8'>
        <a>Creativity & Design</a>
        <div className=''>
        <a className='mr-8'>Home</a>
        <a className='mr-8'>Gallery</a>
        <a className='mr-8'>Teams</a>
        <a className='mr-8'>Contact Us</a>
        </div>
    </nav>
  )
}

export default Navbar