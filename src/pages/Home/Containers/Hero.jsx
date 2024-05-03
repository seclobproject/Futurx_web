import React from 'react'
import { Fade } from 'react-awesome-reveal'
import logo from '../../../assets/heroLogo.png'
const Hero = () => {
  return (
    <div className='w-full h-[100vh] bg-hero bg-center bg-cover flex items-center px-[10%] '>
      <Fade direction="left" duration={2000} triggerOnce="true">
        <div className='flex flex-col justify-center w-full h-[100vh] sm:w-1/2 gap-5 '>
          <h3 className='text-white font-bold text-4xl  sm:text-5xl sm:leading-[3.5rem]'>THE USDT HUNTING,<br /> UNLEASHES EARNING
            POTENTIAL</h3>
          <h4 className='text-[#2DE4C1] font-bold sm:text-lg'>WORLD BIGGEST USDT HUNTING PROGRAM</h4>
          <h6 className='text-white font-semibold sm:text-lg'>The platform for maximizing your earnings with the USDT program and
            unleashing your earning potential in the world of cryptocurrency.</h6>
        </div></Fade>
        {/* <img className='w-[200px] h-[200px] ' src={logo} alt="logo" /> */}
    </div>
  )
}

export default Hero