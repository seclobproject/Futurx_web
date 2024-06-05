import React from 'react'
import RoadMapCard from '../../../components/RoadMapCard'
import coin from '../../../assets/ftxcoin.png'
import game from '../../../assets/ftxgame.png'
import lottery from '../../../assets/ftxlottery.png'
import ecommerce from '../../../assets/ftxecommerce.png'
import roadmap from '../../../assets/roadmap.png'

const Roadmap = () => {
    const TimeLine = [
        { title: "FTX COIN", className: '', img: coin, description: "FTX Coin, developed by FuturX, is a versatile digital currency that can easily be purchased and utilized in across various industries, including e-commerce, technology, travel, and entertainment. With strong security measures in place, users can trade in different exchanges." },
        {
            title: 'FTX GAMING', className: 'ml-auto', img: game, description: "FTX Gaming aims to give players actual ownership of their in-game assets and potentially  earn real value through their gaming activities, transforming conventional dynamics of gaming."
        },
        {
            title: 'FTX LOTTERY', className: '', img: lottery, description: "FTX Lottery offers a modern take on the traditional lottery system that will guarantee you with an exciting betting experience.  FTX Lottery platforms operate on blockchain networks, ensuring fairness, security and verifiable outcomes."
        },
        {
            title: 'FTX E-COMMERCE', className: 'ml-auto', img: ecommerce, description: "FTX E-commerce is the world of online shopping, where customers can use digital currencies to shop. It provides secure and transparent transactions."
        },
    ]
    return (
        <div id='projects' style={{ backgroundImage: `url(${roadmap})` }} className='w-full min-h-[60vh] h-auto bg-[#350557] text-center sm:px-[10%] py-10 relative bg-roadmap'>
            <span className='text-[#FAB259] font-semibold text-lg'>Road Map</span>
            <h1 className='text-white text-4xl font-bold leading-[3rem] mb-6 '>Our upcoming Projects</h1>
            {/* <div className='bg-white w-[2px] h-[700px] top-[300px] absolute left-1/2 road_line'></div>
            <div className='bg-white h-[2px] lg:w-20 absolute top-[300px] right-1/2 road_line'></div>
            <div className='bg-white h-[2px] lg:w-20 absolute top-[550px] left-1/2 road_line'></div>
            <div className='bg-white h-[2px] lg:w-20 absolute top-[800px] right-1/2 road_line'></div>
            <div className='bg-white h-[2px] lg:w-20 absolute top-[1000px] left-1/2 road_line'></div> */}
            <div className='w-full py-[10%] px-10 text-start'>
                {TimeLine?.map((rdmap, index) => (
                    <RoadMapCard key={index} title={rdmap?.title} description={rdmap?.description} className={rdmap?.className} img={rdmap?.img}/>
                ))}
            </div>
        </div>
    )
}

export default Roadmap