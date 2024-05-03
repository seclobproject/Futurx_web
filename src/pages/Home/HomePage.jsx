import React from 'react'
import Hero from './Containers/Hero'
import About from './Containers/About'
import Revolution from './Containers/Revolution'
import Roadmap from './Containers/Roadmap'
import Testimonials from './Containers/testimonials'

const HomePage = () => {
    return (
        <div id='home'>
            <Hero />
            <About />
            <Revolution />
            <Roadmap />
            <Testimonials/>
        </div>
    )
}

export default HomePage