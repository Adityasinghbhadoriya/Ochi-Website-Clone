"use client"

import { motion } from 'framer-motion'
import React from 'react'

function Marquee() {
  return (
    
    <div data-scroll  data-scroll-speed= '.1' className='w-full py-14 rounded-t-3xl bg-[#004d43]'>
        <div className='text text-white border-t-2 border-b-2 border-zinc-300 flex  overflow-hidden whitespace-nowrap '>
            <motion.h1 initial={{x:0}} animate = {{x: "-100%"}}
            transition ={{ease: "linear",repeat: Infinity,duration:10 }}className='text-[20vw]  leading-none font-semibold pt-1 pb-2'>WE ARE OCHI</motion.h1>
            <motion.h1 initial={{x:0}} animate = {{x: "-100%"}}
            transition ={{ease: "linear",repeat: Infinity,duration: 10}}className='text-[20vw] leading-none font-semibold pt-1 pb-2'>WE ARE OCHI</motion.h1>
        </div>
    </div> 
  )
}

export default Marquee