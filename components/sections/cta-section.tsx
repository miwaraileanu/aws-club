"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"

export function CTASection() {
    return (
        <section className="py-20 sm:py-24 lg:py-28 bg-gradient-to-br from-slate-800 via-blue-900 to-slate-900 gradient-animate network-bg relative overflow-hidden">
            <div className="absolute inset-0 particle-bg"></div>
            <div className="absolute top-[5%] right-[5%] w-[25%] max-w-[400px] h-[25%] max-h-[400px] bg-cyan-500/10 rounded-full blur-3xl animate-float"></div>
            <div className="absolute bottom-[5%] left-[5%] w-[22%] max-w-[350px] h-[22%] max-h-[350px] bg-blue-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }}></div>

            <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 text-center relative z-10 scroll-reveal">
                <h2 className="text-[clamp(2rem,6vw,3.5rem)] font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                    Ready to Join?
                </h2>
                <p className="text-gray-200 text-[clamp(1rem,2.5vw,1.25rem)] mb-10 leading-relaxed">
                    Join our Slack community and start your cloud journey with AWS Community Dublin.
                </p>
                <Link href="/contact">
                    <Button className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-10 py-7 text-[clamp(1rem,2.5vw,1.25rem)] rounded-full btn-glow shadow-2xl shadow-cyan-500/50 font-semibold">
                        Join us in Slack
                    </Button>
                </Link>
            </div>
        </section>
    )
}
