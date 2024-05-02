import React from 'react'
import client1 from '../assets/client1.jpg'
import quotes from '../assets/quotes.png'
const Testimonials = () => {
    return (
        <div className='flex gap-5 items-center px-[10%] py-[10%] w-full h-80vh bg-[#350557] '>
            <div className=' flext flex-col gap-6 md:w-1/2 flex-wrap'>
                <h2 className='text-2xl text-white mb-5'>See What Our Clients<br /> Say’s About Us</h2>
                <p className='text-white font-medium'>
                    Etiam scelerisque nec elit ac efficitur. Duis vestibulum magna sit amet ante gravida malesuada nunc gravida
                </p>
                <button className='bg-white p-2 rounded-lg'>See More</button>
            </div>
            <div className='bg-transparent md:w-1/2 h-[350px] rounded-lg p-10 '>
                <div className=' w-full h-full rounded-lg p-10 border-2 border-[#E702BF5E] flex flex-col justify-between'>
                    <p className='text-white text-[18px]'>Within days of joining, I was already seeing significant returns on my
                        investments. Highly recommend.</p>
                    <div className='flex justify-between'>
                        <div className='flex gap-4'>
                            <img className='rounded-[50%]' src={client1} alt="profile" />
                            <div className='flex flex-col justify-center'>
                                <span className='text-white text-[16px] font-semibold' >Name</span>
                                <span className='text-[#2DE4C1]'>Team lead</span>
                            </div>
                        </div>
                        <img src={quotes} alt="quote" />
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Testimonials