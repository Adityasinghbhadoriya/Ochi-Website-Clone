"use client"

import React from 'react'
import Cards1 from './ComponentsCards/Cards1'
import Cards2 from './ComponentsCards/Cards2'

function Cards() {
  return (
    <div>

      <div className='w-full h-screen flex gap-5 items-center px-20'>
        <Cards1/>
        <Cards2/>
      </div>
        {/* <div className=' border-b-[1px] border-zinc-800 '></div> */}
    </div>
  )
}

export default Cards