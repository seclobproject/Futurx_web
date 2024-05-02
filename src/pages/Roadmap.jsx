import React from 'react'
import RoadMapCard from '../components/RoadMapCard'

const Roadmap = () => {
    const TimeLine = [
        { title: "FTX COIN", className: '', description: "FTX is a FuturX Coin, a versatile digital currency users can seamlessly purchase and services across various industries, from e-commerce and tech to travel and entertainment. FTX coin offers robust security features and easy exchange." },
        {
            title: 'FTX GAMING', className: 'ml-auto', description: "FTX gaming aims to give players actual ownership of their in-game assets and potentially earn real value through their gaming activities, transforming traditional gaming dynamics."
        },
        {
            title: 'FTX LOTTERY', className: '', description: "FTX lottery represents the digital version of the traditional lottery system that will surely provide you with a thrilling betting experience.This is because FTX lottery sites operate on blockchain networks,ensuring fairness, security, and verifiable outcomes."
        },
        {
            title: 'FTX E-COMMERCE', className: 'ml-auto', description: "FTX e-commerce is the world of online shopping, allowing customers to use digital currencies. Ensures secure and transparent transactions."
        },
    ]
    return (
        <div className='w-full min-h-[60vh] h-auto bg-[#350557] text-center px-[10%] py-10 relative bg-roadmap'>
            <span className='text-[#FAB259] font-semibold text-lg'>Road Map</span>
            <h1 className='text-white text-4xl font-bold leading-[3rem] mb-6'>Our upcoming Projects</h1>
            <div className='bg-white w-[2px] h-[700px] top-[300px] absolute left-1/2'></div>
            <div className='bg-white h-[2px] lg:w-20 absolute top-[300px] right-1/2'></div>
            <div className='bg-white h-[2px] lg:w-20 absolute top-[550px] left-1/2'></div>
            <div className='bg-white h-[2px] lg:w-20 absolute top-[800px] right-1/2'></div>
            <div className='bg-white h-[2px] lg:w-20 absolute top-[1000px] left-1/2'></div>
            <div className='w-full py-[10%] px-10 text-start'>
                {TimeLine?.map((rdmap) => (
                    <RoadMapCard title={rdmap?.title} description={rdmap?.description} className={rdmap?.className} />
                ))}
            </div>
        </div>
    )
}

export default Roadmap