"use client"

import { Card } from "@/components/ui/card"

export function WhatWeOfferSection() {
    return (
        <section className="py-16 sm:py-20 lg:py-24 relative">
            <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
                <h2 className="text-[clamp(2rem,6vw,4rem)] font-bold mb-12 text-center bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent scroll-reveal">
                    What We Offer
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                    {/* Learning Roadmap */}
                    <Card className="glass-card p-6 sm:p-8 hover-3d border-cyan-500/20 group scroll-reveal">
                        <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center mb-5 group-hover:animate-glow-pulse shadow-lg shadow-cyan-500/30 transition-all duration-300">
                            <svg className="w-[50%] h-[50%] text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                />
                            </svg>
                        </div>
                        <h3 className="text-[clamp(1.25rem,3vw,1.5rem)] font-bold mb-3 text-cyan-300">Learning Path</h3>
                        <p className="text-gray-300 leading-relaxed text-[clamp(0.9rem,2vw,1rem)]">
                            AWS beginner to advanced roadmap with structured curriculum and hands-on labs.
                        </p>
                    </Card>

                    {/* Community Events */}
                    <Card className="glass-card p-6 sm:p-8 hover-3d border-cyan-500/20 group scroll-reveal animate-delay-200">
                        <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl flex items-center justify-center mb-5 group-hover:animate-glow-pulse shadow-lg shadow-blue-500/30 transition-all duration-300">
                            <svg className="w-[50%] h-[50%] text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                                />
                            </svg>
                        </div>
                        <h3 className="text-[clamp(1.25rem,3vw,1.5rem)] font-bold mb-3 text-blue-300">Monthly Meetups</h3>
                        <p className="text-gray-300 leading-relaxed text-[clamp(0.9rem,2vw,1rem)]">
                            Regular in-person and online events featuring industry experts and hands-on workshops.
                        </p>
                    </Card>

                    {/* Networking */}
                    <Card className="glass-card p-6 sm:p-8 hover-3d border-cyan-500/20 group scroll-reveal animate-delay-400">
                        <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mb-5 group-hover:animate-glow-pulse shadow-lg shadow-purple-500/30 transition-all duration-300">
                            <svg className="w-[50%] h-[50%] text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                                />
                            </svg>
                        </div>
                        <h3 className="text-[clamp(1.25rem,3vw,1.5rem)] font-bold mb-3 text-purple-300">Networking</h3>
                        <p className="text-gray-300 leading-relaxed text-[clamp(0.9rem,2vw,1rem)]">
                            Connecting with fellow developers, cloud architects, and AWS professionals globally.
                        </p>
                    </Card>
                </div>
            </div>
        </section>
    )
}
