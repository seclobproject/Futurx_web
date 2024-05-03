import React from 'react'
import about from '../../../assets/about.png'
import { Fade } from 'react-awesome-reveal'
const About = () => {
  return (
    <div id='about' className='w-full flex flex-wrap h-[100vh] bg-[#350557] py-[10%] px-[10%]'>
      <div className='w-1/2'>
        <img src={about} alt="" className='w-[550px]' />

      </div>
      <div className='sm:w-[50%] flex flex-col gap-5'>
        <span className='text-[#FAB259] font-semibold text-lg'>About Us</span>
        <Fade direction="up" duration={2000} triggerOnce="true">
        <h1 className='text-white text-2xl sm:text-4xl font-bold sm:leading-[3rem]'>THE LARGEST USDT HUNTING<br /> PROGRAM IN THE
          WORLD</h1>
        </Fade>
        <Fade direction="up" duration={2000} triggerOnce="true">

        <p className='text-[#2DE4C1] sm:text-[20px]'>World’s largest USDT hunting program and maximize earnings in the world of
          digital currency.  Creating a safer and more trustworthy environment for all
          participants. Exploring new opportunities in earning USDT.</p>
        </Fade>

      </div>
    </div>
  )
}

export default About