import { motion,  useAnimation } from 'framer-motion';
import { Power4 } from 'gsap/all';
import React, { useState } from 'react';

function Featured() {

    const cards = [useAnimation(), useAnimation()];
  const handleHover = (index) =>{
   cards[index].start({y: "0"})
  }

  

    return (
        
        <div className='w-full py-20'>
            <div className='w-full px-10 pb-20 border-b-[1px] border-zinc-800  '>
                <h1 className='text-6xl tracking-tight '>Featured Projects</h1>

            </div>
            <div className='px-20'>
                <div className='cards w-full flex gap-7 mt-10'>
                 
                    <motion.div onHoverStart={()=> handleHover(0)}  className='cardcontainer relative w-1/2 h-[75vh]  '>
                    <h1 className=' absolute text-[#CDEA6B] left-full -translate-x-1/2 top-1/2 -translate-y-1/2 leading-none  z-[9]
                     text-8xl tracking-tight flex overflow-hidden'>{"FYDE".split('').map((item,index)=>(
                      <motion.span initial={{y: "100%"}} animate={cards[0]} className='inline-block'>{item}</motion.span>
                     ))}</h1>
                     
                        <div className='card w-full h-full '>
                          <img className='w-full h-full  bg-cover rounded-xl' 
                          
                           src="https://ochi.design/wp-content/uploads/2024/08/CS_Website_1-663x551.png" alt="" />
                        </div>
                    </motion.div>
                    <div  className='cardcontainer  w-1/2 h-[75vh] relative '>
                    <h1 className=' absolute flex overflow-hidden text-[#CDEA6B] right-full translate-x-1/2 top-1/2 -translate-y-1/2 leading-none  z-[9]
                     text-8xl tracking-tight'>{"VISE".split('').map((item,index)=>
                        (
                            <span className='inline-block'>{item}</span> 
                        ))}
                     </h1>
                        <div className='card w-full h-full '>
                          <img className='w-full h-full  bg-cover rounded-xl' 
                          
                           src="https://ochi.design/wp-content/uploads/2024/08/Frame-481692-1-663x551.png" alt="" />
                        </div>
                    </div>

                </div>
            </div>
            <div className=' border-b-[1px] border-zinc-800 pt-28'></div>

        </div>
    )
}

export default Featured