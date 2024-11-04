import React from 'react'

function Cards2() {
  return (
    <div className='cardcontainer flex gap-5 w-1/2 h-[50vh] '>
    <div className='card1 relative w-1/2 rounded-xl h-full bg-[#010e0c] text-white flex items-center justify-center'>
    <img className='w-32' src='https://ochi.design/wp-content/uploads/2022/04/logo002.svg'/>
    <button className='absolute px-1 py-1 rounded-full border-2 left-10 bottom-5'>Rating 5.0 on CLUTCH</button>
    </div>
    <div className='card2 relative w-1/2 rounded-xl h-full bg-[#1b1f1f] text-white flex items-center justify-center'>
    <img className= 'w-32' src='https://ochi.design/wp-content/uploads/2022/04/logo003.png'/>
    <button className='absolute px-1 py-1 rounded-full border-2 left-5 bottom-5 text-sm'>BUSINESS BOOTCAMP ALUMNI</button>
    </div>
    </div>
  )
}

export default Cards2