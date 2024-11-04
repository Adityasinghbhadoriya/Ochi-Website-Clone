import { motion } from 'framer-motion';
import React from 'react'
import { FaArrowUpLong } from 'react-icons/fa6';

function LandingPage() {
    
    return (
        <div data-scroll data-scroll-speed= '-.6' className='w-full h-screen pt-1'>
            <div className='textstructure mt-32 px-10'>
                {["WE CREATE", "EYE-OPENING", "PRESENTATIONS"].map((item, index) => {
                    return (
                        <div className='masker '>
                            <div className='w-fit flex items-center'>
                                {index === 1 && (<motion.div  initial={{width: 0}}  animate = {{width:"9vw" }} transition={{ease: [0.76,0,0.24,1], duration:1}} className='w-[7vw] h-[5vw] relative rounded-md bg-red-500'></motion.div>)}
                                <h1 className='uppercase text-[6vw] font-semibold
                                tracking-tighter leading-[6vw] '>{item}
                                </h1>
                            </div>
                        </div>
                    );
                })}

            </div>
            <div className='border-t-2 border-zinc-300 mt-28 flex justify-between items-center py-5 px-10'>
                {["For public and private companies", "From the first pitch to IPO"].map((item, index) => {
                    return (
                        <div className='masker'>
                            <p className='text-md font-light tracking-tight leading-none'>{item}
                            </p>
                        </div>

                    );
                })}
                <div className='start flex gap-2'>
                    <div className='px-5 py-1 border-2 rounded-full uppercase text-md'>Start the project</div>
                    <div className='w-10 h-10  flex justify-center rounded-full border-2 items-center '>
                        <span className='rotate-[45deg]'>
                            <FaArrowUpLong />
                        </span>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default LandingPage