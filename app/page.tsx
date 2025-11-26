"use client"

import { Footer } from "@/components/footer"
import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/sections/hero-section"
import Sections from "@/components/sections/sections"

export default function Home() {
  return (
    <>
      <Navigation />
      <HeroSection />
      <Sections />
      <Footer />
    </>
  )
}
