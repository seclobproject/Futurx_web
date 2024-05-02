import React from 'react'
import { Fade } from 'react-awesome-reveal'

const RoadMapCard = ({ className, title, description }) => {
    return (
        <Fade direction="left" duration={2000} triggerOnce="true">
            <div className={`max-w-[400px] border-2 rounded-lg border-white p-4 ${className}`}>
                <h2 className='text-[#2DE4C1] font-bold mb-4'>{title}</h2>
                <p className='text-white'>FTX is a FuturX Coin, a versatile digital currency users can seamlessly
                    {description}</p>
            </div></Fade>

    )
}

export default RoadMapCard