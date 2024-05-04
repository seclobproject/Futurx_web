import React from 'react'
import { Fade } from 'react-awesome-reveal'
const RoadMapCard = ({ className, title, description,img }) => {
    return (
        <Fade direction="left" duration={2000} >
            <div className={`max-w-[700px] bg-purple-400 bg-opacity-15 sm:flex gap-4 border-2 rounded-lg border-white p-4 ${className} map_cards`}>
                <img className='w-[200px]' src={img} alt="" />
                <div>
                <h2 className='text-[#2DE4C1] font-bold mb-4'>{title}</h2>
                <p className='text-white'>FTX is a FuturX Coin, a versatile digital currency users can seamlessly
                        {description}</p></div>
            </div></Fade>

    )
}

export default RoadMapCard