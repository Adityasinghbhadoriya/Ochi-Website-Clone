import React from 'react'

function About() {
  return (
    <div className='w-full p-20 bg-[#CDEA6B] rounded-t-3xl'>
        <h1 className='text-[4vw] leading-[3.5vw] tracking-tight'>Ochi is a strategic partner for fast-growing tech businesses that need to raise funds, sell products, explain complex ideas, and hire great people.
        </h1>
        <div className='w-full border-t-[2px] pt-7 mt-16 border-[#525a37] flex'>
            <div className='w-1/2 '>
            <h1 className='text-6xl '>Our Approach:</h1>
            <button className = 'px-8 py-5 bg-zinc-900 rounded-full text-white flex gap-5 items-center uppercase mt-10'>Read More
                <div className='w-2 h-2 bg-zinc-100 rounded-full'></div>
            </button>
            </div>
            <div className='w-1/2 h-[70vh] bg-[#444934] rounded-3xl'></div>
        </div>

    </div>
  )
}

export default About