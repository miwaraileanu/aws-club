"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { HeroSection, AboutSection, WhatWeOfferSection, CTASection } from "@/components/sections"

export default function Home() {
  return (
    <>
      <Navigation />
      <HeroSection />
      <AboutSection />
      <WhatWeOfferSection />
      <CTASection />
      <Footer />
    </>
  )
}
