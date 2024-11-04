"use client"

import React from 'react'

function Cards1() {
  return (
    <div className='cardcontainer h-[50vh] w-1/2 '>
      <div className='card relative rounded-xl w-full h-full bg-[#004D43] text-white flex items-center justify-center'>
        <img className='w-32' src='https://ochi.design/wp-content/uploads/2022/04/logo001.svg'/>
        <button className='absolute px-5 py-1 rounded-full border-2 left-10 bottom-5'>&copy;2019-2024</button>
      </div>
    </div>
  )
}

export default Cards1