import React from 'react'
import { AboutSection } from './about-section'
import { WhatWeOfferSection } from './what-we-offer-section'
import { Joining } from './joining'

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