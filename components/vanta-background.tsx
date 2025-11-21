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
      scriptThree.src = "https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js"
      scriptThree.onload = () => {
        const scriptVanta = document.createElement("script")
        scriptVanta.src = "https://cdn.jsdelivr.net/npm/vanta@latest/dist/vanta.net.min.js"
        scriptVanta.onload = () => {
          if (containerRef.current && (window as any).VANTA) {
            vantaEffect = (window as any).VANTA.NET({
              el: containerRef.current,
              mouseControls: true,
              touchControls: true,
              gyroControls: false,
              minHeight: 200.0,
              minWidth: 200.0,
              scale: 1.0,
              scaleMobile: 1.0,
              color: 0x0ea5e9,
              backgroundColor: 0x0f172a,
              points: 12.0,
              maxDistance: 20.0,
              spacing: 15.0,
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
