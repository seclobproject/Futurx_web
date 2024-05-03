import React, { useEffect, useState } from 'react';
import client1 from '../../../assets/client1.jpg';
import quotes from '../../../assets/quotes.png';
import { Fade } from 'react-awesome-reveal'

const Testimonials = () => {
    const testimonials = [
        {
            quote: "Within days of joining, I was already seeing significant returns on my investments. Highly recommend.",
            name: "John. S",
            img: client1,
            position: "Team Lead"
        },
        {
            quote: "The support team was always available to answer my questions, and I'm now earning passive income regularly",
            name: "Sarah. M",
            img: client1,
            position: "Manager"
        },
        {
            quote: "Earn USDT consistently, and the rewards just keep getting better. Thank you, USDT Hunter, for providing such an incredible opportunity",
            name: "David. O",
            img: client1,
            position: "Director"
        }
    ];

    const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            nextSlide();
        }, 3000); // Change the interval as needed (in milliseconds)

        return () => clearInterval(interval);
    }, []);

    const nextSlide = () => {
        setCurrentSlideIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    };

    const prevSlide = () => {
        setCurrentSlideIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
    };

    return (
        <div className='flex md:flex-row flex-col gap-5 md:items-center px-[10%] py-[10%] w-full h-80vh bg-[#350557] justify-evenly '>
            <Fade direction="left" duration={2000} triggerOnce="true">
                <div className='flex flex-col gap-6  w-full sm:[300px]'>
                    <h2 className='text-4xl text-white font-semibold'>See What Our Clients<br /> Say’s About Us</h2>
                    <p className='text-white font-medium'>
                        Etiam scelerisque nec elit ac efficitur.<br/> Duis vestibulum magna sit amet ante gravida malesuada nunc gravida
                    </p>
                    <button className='bg-[#2DE4C1] p-2 rounded-lg max-w-[150px]'>See More</button>
                </div>
            </Fade>
            <Fade direction="right" duration={2000} triggerOnce="true">
                <div className='relative bg-transparent sm:w-[400px] h-[300px] rounded-lg p-10 flex '>
                    {testimonials.map((testi, index) => (
                        <div key={index} className={`absolute left-0 top-0 w-full h-full transition-all duration-500 ${index === currentSlideIndex ? 'opacity-100' : 'opacity-0'}`}>
                            <div className='max-w-[350px] w-full h-full rounded-lg p-10 border-2 border-[#E702BF5E] flex flex-col justify-between'>
                                <p className='text-white text-[18px]'>{testi.quote}</p>
                                <div className='flex justify-between'>
                                    <div className='flex gap-4'>
                                        <img className='rounded-[50%]' src={testi.img} alt="profile" />
                                        <div className='flex flex-col justify-center'>
                                            <span className='text-white text-[16px] font-semibold'>{testi.name}</span>
                                            <span className='text-[#2DE4C1]'>{testi.position}</span>
                                        </div>
                                    </div>
                                    <img src={quotes} alt="quote" />
                                </div>
                            </div>
                        </div>
                    ))}
                    {/* <button onClick={prevSlide} className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-transparent text-white font-bold py-2 px-4 rounded-l">
                    Prev
                </button>
                <button onClick={nextSlide} className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-transparent text-white font-bold py-2 px-4 rounded-r">
                    Next
                </button> */}
                </div>
            </Fade>
        </div>
    );
};

export default Testimonials;
