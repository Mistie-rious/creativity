import React from 'react'
import facebook  from './assets/facebook.png'
import youtube from './assets/youtube.png'
import insta  from './assets/insta.png'


const Footer = () => {
  return (
    <footer className ="flex justify-between font-Inter p-8 bg-indigo-200 ">
       

        
        <div >COPYRIGHT © 2023 MISTURA AND ABUNDANCE</div>
        <div className='flex'>
        <img className='mr-7' src={facebook} width={30}></img>
        <img  className='mr-7' src={insta} width={30}></img>
        <img src={youtube} width={30}></img>
        </div>
   
    </footer>
  )
}

export default Footer