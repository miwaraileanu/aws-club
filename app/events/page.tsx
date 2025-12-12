"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card } from "@/components/ui/card"
import Link from "next/link"
import Image from "next/image"

const events = [
  {
    id: 1,
    title: "Christmas Party",
    date: "27/12/2025",
    time: "6:00 PM - 8:00 PM",
    location: "CCT College Dublin",
    description: "Happy Christmas",
    mapLink: "https://maps.google.com/?q=CCT+College+Dublin",
  },
]

export default function Events() {
  return (
    <>
      <Navigation />

      {/* Header */}
      <section className="relative pt-32 pb-20 bg-slate-900 overflow-hidden">
        {/* Hero Image with Gradient Mask */}
        <div className="absolute inset-0 z-0">
          <div className="relative w-full h-full">
            <Image
              src="/images/events.png"
              alt="Events"
              fill
              className="object-cover"
              priority
            />
            {/* Gradient mask that fades to bottom */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/50 to-slate-900" />
          </div>
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-balance">
            Upcoming  <span className="text-primary text-glow">Events</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-balance">
            Join us for workshops, meetups, and networking events. All events are open to everyone 18+ in Ireland.
          </p>
        </div>
      </section>
      
      {/* Events List */}
      <section className="py-20 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {events.map((event) => (
              <Card
                key={event.id}
                className="bg-slate-800 border-slate-700 overflow-hidden hover:border-cyan-500 transition-all group"
              >
                <div className="p-8">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold mb-2 group-hover:text-cyan-400 transition-colors">
                        {event.title}
                      </h3>
                    </div>
                  </div>

                  <div className="space-y-3 mb-6">
                    <div className="flex items-center text-gray-300">
                      <svg className="w-5 h-5 mr-3 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                        />
                      </svg>
                      {event.date}
                    </div>
                    <div className="flex items-center text-gray-300">
                      <svg className="w-5 h-5 mr-3 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      {event.time}
                    </div>
                    <div className="flex items-center text-gray-300">
                      <svg className="w-5 h-5 mr-3 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                      {event.location}
                    </div>
                  </div>

                  <p className="text-gray-400 mb-6">{event.description}</p>

                  <Link href={event.mapLink} target="_blank" rel="noopener noreferrer" className="inline-block">
                    <button className="w-full bg-cyan-500/20 hover:bg-cyan-500/40 text-cyan-400 font-medium py-2 px-4 rounded-lg transition-colors">
                      View Location
                    </button>
                  </Link>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
