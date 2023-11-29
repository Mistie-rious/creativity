
import { useState } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'


const Root = () => {
  return (
    <>
    <div className='flex flex-col min-h-screen'>
    <main className='flex-1'>
    <Navbar/>
    <div className='p-10 font-lusitana'>
      <p className='m-5'>Hi!</p>
      <p className='m-5'>This is the Creativity & Design Website for EDS 2023.</p>
      <p className='m-5'>Click Here to view our works.</p>
    </div>
    </main>
    <Footer/>
    </div>
    </>
  )
}

export default Root