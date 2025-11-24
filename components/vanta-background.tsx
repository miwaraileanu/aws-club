"use client"

import { useEffect, useRef } from "react"

export function VantaBackground() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (typeof window === "undefined") return

    let vantaEffect: any = null

    const loadVanta = async () => {
      // Dynamically load Vanta scripts
      const scriptThree = document.createElement("script")
      scriptThree.src = "https://cdnjs.cloudflare.com/ajax/libs/three.js/r134/three.min.js"
      scriptThree.onload = () => {
        const scriptVanta = document.createElement("script")
        scriptVanta.src = "https://cdn.jsdelivr.net/npm/vanta@latest/dist/vanta.birds.min.js"
        scriptVanta.onload = () => {
          if (containerRef.current && (window as any).VANTA) {
            vantaEffect = (window as any).VANTA.BIRDS({
              el: containerRef.current,
              mouseControls: true,
              touchControls: true,
              gyroControls: false,
              minHeight: 200.0,
              minWidth: 200.0,
              scale: 1.0,
              scaleMobile: 1.0,
              backgroundColor: 0x12a58,
              colorMode: 'lerp',
              birdSize: 1.5,
              wingSpan: 25.0,
              speedLimit: 5.0,
              separation: 50.0,
              alignment: 50.0,
              cohesion: 50.0,
            })
          }
        }
        document.body.appendChild(scriptVanta)
      }
      document.body.appendChild(scriptThree)
    }

    loadVanta()

    return () => {
      if (vantaEffect) vantaEffect.destroy()
    }
  }, [])

  return <div ref={containerRef} className="w-full h-full absolute inset-0" />
}
