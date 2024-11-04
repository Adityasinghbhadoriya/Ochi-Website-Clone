"use client"

import React from 'react'
import Navbar from './Components/Navbar'
import LandingPage from './Components/LandingPage'
import Marquee from './Components/Marquee'
import About from './Components/About'
import Eyes from './Components/Eyes'
import Featured from './Components/Featured'
import Cards from './Components/CardsFolder/Cards'
import YellowPage from './Components/YellowPage'
import Footer from './Components/Footer'
import LocomotiveScroll from 'locomotive-scroll';

function page() {


 const locomotiveScroll = new LocomotiveScroll();

  return (
    <div className='w-full h-screen'> 
      <Navbar/>
      <LandingPage/>
      <Marquee/>
      <About/>
      <Eyes/>
      <Featured/>
      <Cards/>
      <YellowPage/>
      <Footer/>
    </div>
  )
}

export default page