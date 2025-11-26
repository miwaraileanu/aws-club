"use client"

export function AboutSection() {
    return (
        <section className="py-16 sm:py-20 lg:py-24 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
                <div className="text-center scroll-reveal">
                    <h2 className="text-[clamp(2rem,6vw,4rem)] font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                        About Us
                    </h2>
                    <p className="text-gray-300 text-[clamp(1rem,2.5vw,1.25rem)] max-w-3xl mx-auto leading-relaxed">
                        Help students and professionals master cloud computing through workshops, projects and peer learning.
                        Based at CCT College Dublin, with activities open to everyone in Ireland.
                    </p>
                </div>
            </div>
        </section>
        
    )
}
