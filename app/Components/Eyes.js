"use client"

import React, { useEffect } from 'react';

function Eyes() {
  useEffect(() => {
    const handleMouseMove = (e) => {
      const moveEye = (eyeRef) => {
        if (eyeRef) {
          const rect = eyeRef.getBoundingClientRect();
          const eyeCenterX = rect.left + rect.width / 2;
          const eyeCenterY = rect.top + rect.height / 2;
          const dx = e.clientX - eyeCenterX;
          const dy = e.clientY - eyeCenterY;
          const angle = Math.atan2(dy, dx);
          const distance = Math.min(rect.width / 4, Math.hypot(dx, dy)); // Limit movement to within the parent
          const newX = Math.cos(angle) * distance;
          const newY = Math.sin(angle) * distance;

          eyeRef.querySelector('.pupil').style.transform = `translate(${newX}px, ${newY}px)`;
        }
      };

      moveEye(document.getElementById('left-eye'));
      moveEye(document.getElementById('right-eye'));
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className='eyes w-full h-screen overflow-hidden'>
      <div data-scroll data-scroll-speed='-.7' className='relative w-full h-full bg-cover bg-center bg-[url("https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-1440x921.jpg")]'>
        <div className='absolute flex gap-10 top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]'>
          <div className='flex items-center justify-center w-[16vw] h-[16vw] rounded-full bg-zinc-100'>
            <div
              id='left-eye'
              className='w-2/3 h-2/3 flex items-center justify-center rounded-full bg-zinc-900'
            >
              <div className='pupil w-1/6 h-1/6 rounded-full bg-zinc-100'></div>
            </div>
          </div>
          <div className='w-[16vw] h-[16vw] flex rounded-full items-center justify-center bg-zinc-100'>
            <div
              id='right-eye'
              className='w-2/3 h-2/3 flex items-center justify-center rounded-full bg-zinc-900'
            >
              <div className='pupil w-1/6 h-1/6 rounded-full bg-zinc-100'></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Eyes;
