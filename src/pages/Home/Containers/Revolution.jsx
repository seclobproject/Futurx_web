import React from 'react'
import { Fade } from 'react-awesome-reveal'
import background from '../../../assets/web image new-01.svg'
const Revolution = () => {
    return (
        <div style={{ backgroundImage: `url(${background})` }} className=' bg-fixed bg-center bg-no-repeat bg-cover h-[80vh]'>
            <div className='h-[80vh] bg-[#350557] bg-opacity-80 py-[10%] sm:px-10'>
                <Fade direction="right" duration={2000}>
                    <div className=' sm:w-3/4 px-[10%]'>
                        <h3 className='text-white font-bold text-4xl sm:text-5xl mb-7'>Cloning Revolution</h3>
                        <p className='text-white'>FuturX introduces an array of unprecedented benefits. Among these, a standout feature is the opportunity for automatic cloning, a benefit unparalleled elsewhere. Upon earning  $300, immediate cloning occurs, a unique offering in the world. Cloning always positions itself just below the latest member, greatly helping newcomers in earning USDT coin. This ensures that everyone in the company benefits inancially, as cloning recurs continuously. Merely joining grants access to future financial freedom without additional effort. Our policy operates on a first-come, first-served basis, ensuring fairness and opportunity for all.</p>
                    </div></Fade>
                <img src="" alt="" />
            </div>
        </div>
    )
}

export default Revolution