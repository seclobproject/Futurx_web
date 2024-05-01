import React from 'react'
import about from '../assets/about.png'
const About = () => {
  return (
    <div className='w-full flex h-[100vh] bg-[#350557] py-[10%] px-10'>
      <div className='w-1/2'>
        <img src={about} alt="" className='' />

      </div>
      <div className='sm:w-[50%] flex flex-col gap-5'>
        <span className='text-[#FAB259] font-semibold text-lg'>About Us</span>
        <h1 className='text-white text-4xl font-bold leading-[3rem]'>THE LARGEST USDT HUNTING<br /> PROGRAM IN THE
          WORLD</h1>
        <p className='text-[#2DE4C1] text-[20px]'>World’s largest USDT hunting program and maximize earnings in the world of
          digital currency.  Creating a safer and more trustworthy environment for all
          participants. Exploring new opportunities in earning USDT.</p>
      </div>
    </div>
  )
}

export default About