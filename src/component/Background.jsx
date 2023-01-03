import React from 'react'

import Img from "../assets/astro.svg"

const Background = () => {
  return (
    <div className='fixed bg-black w-full h-full -z-10'>
        <img src={Img} alt='/' className='w-full h-full object-cover fixed'/>
    </div>
  )
}

export default Background