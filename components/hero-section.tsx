"use client"

import { Button } from "@/components/ui/button"
import { useEffect, useRef } from "react"
import gsap from "gsap"
import Link from "next/link"
import Image from "next/image"

export function HeroSection() {
  const heroRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const subtitleRef = useRef<HTMLParagraphElement>(null)
  const buttonsRef = useRef<HTMLDivElement>(null)
  const imageRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(titleRef.current, {
        opacity: 0,
        y: 15,
        duration: 0.6,
        ease: "power2.out",
      })

      gsap.from(subtitleRef.current, {
        opacity: 0,
        y: 10,
        duration: 0.5,
        delay: 0.15,
        ease: "power2.out",
      })

      gsap.from(buttonsRef.current, {
        opacity: 0,
        y: 10,
        duration: 0.5,
        delay: 0.3,
        ease: "power2.out",
      })

      gsap.from(imageRef.current, {
        opacity: 0,
        scale: 0.95,
        duration: 0.6,
        delay: 0.2,
        ease: "power2.out",
      })
    }, heroRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={heroRef} className="relative mt-20 min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-secondary/20 gradient-animate" />

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(110,0,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(110,0,255,0.1)_1px,transparent_1px)] bg-[size:50px_50px]" />

      <div className="z-10 container mx-auto px-4 flex items-center justify-center">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left ">
            <h1 ref={titleRef} className="text-5xl md:text-7xl font-bold mb-6 text-balance">
              IRELAND <span className="text-primary text-glow">AWS</span>
              <br />
              COMMUNITY CLUB
            </h1>

            <p ref={subtitleRef} className="text-xl md:text-2xl text-muted-foreground mb-8 text-balance">
              Join AWS Community Club Ireland to learn, build, and grow your cloud skills through workshops, projects
              and peer learning.
            </p>

            <div ref={buttonsRef} className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button size="lg" className="bg-primary hover:bg-secondary glow-purple-strong text-lg">
                Join Slack
              </Button>
              <Link href="/about">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-primary text-primary hover:bg-primary hover:text-white text-lg bg-transparent"
                >
                  About Us
                </Button>
              </Link>
            </div>
          </div>

          <div ref={imageRef} className="relative hidden md:block">
            <div className="relative rounded-2xl overflow-hidden glow-purple">
              <Image
                src="/cloud-computing-hero.jpg"
                alt="AWS Cloud Computing Infrastructure"
                width={600}
                height={600}
                className="w-full h-auto object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-primary/20" />
            </div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 rounded-full bg-primary/20 blur-xl float-animation" />
      <div
        className="absolute bottom-20 right-10 w-32 h-32 rounded-full bg-secondary/20 blur-xl float-animation"
        style={{ animationDelay: "2s" }}
      />
    </section>
  )
}
