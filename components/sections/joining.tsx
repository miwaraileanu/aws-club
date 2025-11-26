import React from 'react'
import Link from "next/link"
import { Button } from "../ui/button"

export function Joining() {
    return (
    <div className='relative w-full my-20 overflow-hidden flex flex-col items-center justify-center'>
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 text-center z-10 scroll-reveal">
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
    </div>
  )
}
