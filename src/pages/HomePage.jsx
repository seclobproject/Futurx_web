import React from 'react'
import Hero from './Hero'
import About from './About'
import Revolution from './Revolution'
import Roadmap from './Roadmap'
import Testimonials from './testimonials'

const HomePage = () => {
    return (
        <div>
            <Hero />
            <About />
            <Revolution />
            <Roadmap />
            <Testimonials/>
        </div>
    )
}

export default HomePage