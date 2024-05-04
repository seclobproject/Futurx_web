import React from 'react'
import { Fade } from 'react-awesome-reveal'
import logo from '../../../assets/320-01.png'
import banner from '../../../assets/bghero.png'
const Hero = () => {
  return (
    <div style={{ backgroundImage:`url(${banner})`}} className='w-full h-[100vh] bg-center bg-cover flex items-center pl-[10%] pr-[8.5%]'>
      <Fade direction="left" duration={2000} >
        <div className='flex flex-col justify-center w-full h-[100vh] sm:w-[60%] gap-5 '>
          <h3 className='text-white font-bold text-4xl  sm:text-5xl sm:leading-[3.5rem]'>THE USDT HUNTING,<br /> UNLEASHES EARNING
            POTENTIAL</h3>
          <h4 className='text-[#2DE4C1] font-bold sm:text-lg'>WORLD BIGGEST USDT HUNTING PROGRAM</h4>
          <h6 className='text-white font-semibold sm:text-lg'>The platform for maximizing your earnings with the USDT program and
            unleashing your earning potential in the world of cryptocurrency.</h6>
        </div></Fade>
      <img className='zoom-in-out-box w-[100px] h-[100px] sm:w-[250px] sm:h-[250px] ' src={logo} alt="logo" />
    </div>
  )
}

export default Hero