"use client"

import { VantaBackground } from "@/components/vanta-background"
import Link from "next/link"
import { Button } from "../ui/button"

export function HeroSection() {
    return (
        <section
            className="relative min-h-screen bg-slate-900 flex items-center justify-center overflow-hidden"
        >
            {/* Vanta Birds Background */}
            <VantaBackground />

            {/* Animated Background Overlay */}
            <div className="absolute inset-0 particle-bg"></div>

            {/* Center Mask to hide birds behind text */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_#0f172a_0%,_transparent_60%)] z-0 opacity-80"></div>

            {/* Floating Decorative Elements */}
            <div className="absolute top-[10%] left-[5%] w-[20%] max-w-[300px] h-[20%] max-h-[300px] bg-cyan-500/10 rounded-full blur-3xl animate-float"></div>
            <div className="absolute bottom-[10%] right-[5%] w-[25%] max-w-[400px] h-[25%] max-h-[400px] bg-blue-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
            <div className="absolute top-[50%] left-[33%] w-[18%] max-w-[280px] h-[18%] max-h-[280px] bg-purple-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }}></div>

            <div className="relative z-10 text-center w-full max-w-5xl mx-auto px-6 sm:px-8 lg:px-12">
                <h1 className="text-[clamp(2.5rem,8vw,6rem)] font-bold mb-6 animate-fade-in-up leading-tight">
                    <span className="bg-gradient-to-r from-red-600 via-orange-600 via-yellow-500 via-green-500 via-cyan-500 via-blue-600 to-purple-600 bg-clip-text text-transparent" style={{ WebkitTextStroke: '1px rgba(255,255,255,0.1)' }}>AWS</span> <br /> <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">Cloud Club Dublin</span>
                </h1>
                <p className="text-[clamp(1.25rem,3vw,2rem)] text-gray-200 mb-6 animate-fade-in-up animate-delay-200 font-semibold">
                    @ CCT College
                </p>
                <p className="text-gray-300 text-[clamp(0.95rem,2vw,1.125rem)] max-w-2xl mx-auto animate-fade-in-up animate-delay-300 leading-relaxed">
                    Join a free student-led community supported by Amazon Web Services. Learn cloud skills, build amazing
                    projects, and grow together.
                </p>
                <Link href="https://join.slack.com/t/awsclubie/shared_invite/zt-36rnw9sja-XpcRWmJsQmgzL~DZCnYoTA">
                    <Button className="bg-gradient-to-r my-8 from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-10 py-7 text-[clamp(1rem,2.5vw,1.25rem)] rounded-full btn-glow shadow-2xl shadow-cyan-500/50 font-semibold">
                        Join us in Slack
                    </Button>
                </Link>
            </div>

        </section>
    )
}
