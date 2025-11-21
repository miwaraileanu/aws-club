"use client"

import type React from "react"

import { Card } from "@/components/ui/card"
import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

interface GridCardProps {
  image: string
  title: string
  description: string
  icon?: React.ReactNode
}

export function GridCard({ image, title, description, icon }: GridCardProps) {
  const cardRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(cardRef.current, {
        opacity: 0,
        y: 20,
        duration: 0.5,
        ease: "power2.out",
        scrollTrigger: {
          trigger: cardRef.current,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      })
    }, cardRef)

    return () => ctx.revert()
  }, [])

  const handleHover = () => {
    gsap.to(cardRef.current, {
      scale: 1.02,
      duration: 0.2,
      ease: "power2.out",
    })
  }

  const handleLeave = () => {
    gsap.to(cardRef.current, {
      scale: 1,
      duration: 0.2,
      ease: "power2.out",
    })
  }

  return (
    <Card
      ref={cardRef}
      className="overflow-hidden border-border bg-card/50 backdrop-blur-sm hover:border-primary/50 transition-all cursor-pointer"
      onMouseEnter={handleHover}
      onMouseLeave={handleLeave}
    >
      <div className="relative h-64 overflow-hidden bg-gradient-to-br from-primary/10 to-secondary/10">
        <img src={image || "/placeholder.svg"} alt={title} className="w-full h-full object-cover" />
        {icon && (
          <div className="absolute top-4 right-4 w-12 h-12 rounded-lg bg-primary/90 backdrop-blur-sm flex items-center justify-center glow-purple">
            {icon}
          </div>
        )}
      </div>
      <div className="p-6 space-y-3">
        <h3 className="text-2xl font-bold text-balance">{title}</h3>
        <p className="text-muted-foreground text-pretty leading-relaxed">{description}</p>
      </div>
    </Card>
  )
}
