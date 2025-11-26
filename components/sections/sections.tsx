import React from 'react'
import { HeroSection } from './hero-section'
import { AboutSection } from './about-section'
import { WhatWeOfferSection } from './what-we-offer-section'
import { Joining } from './joining'
import { Footer } from 'react-day-picker'

const Sections = () => {
    return (
        <div className='py-20 particle-bg relative'>
            <AboutSection />
            <WhatWeOfferSection />
            <Joining />
        </div>
    )
}

export default Sections