"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card } from "@/components/ui/card"
import Link from "next/link"

const events = [
  {
    id: 1,
    title: "AWS Fundamentals Workshop",
    date: "December 5, 2024",
    time: "6:00 PM - 8:00 PM",
    location: "CCT College Dublin",
    host: "Sarah Johnson",
    description: "Learn the basics of AWS services including EC2, S3, and RDS. Perfect for beginners.",
    mapLink: "https://maps.google.com/?q=CCT+College+Dublin",
  },
  {
    id: 2,
    title: "Building Serverless Applications",
    date: "December 12, 2024",
    time: "7:00 PM - 9:00 PM",
    location: "Online (Zoom)",
    host: "Michael Chen",
    description: "Deep dive into AWS Lambda, API Gateway, and DynamoDB for building modern applications.",
    mapLink: "#",
  },
  {
    id: 3,
    title: "Cloud Security Best Practices",
    date: "December 19, 2024",
    time: "6:30 PM - 8:30 PM",
    location: "CCT College Dublin",
    host: "Emily Rodriguez",
    description: "Learn how to secure your AWS infrastructure with IAM, security groups, and encryption.",
    mapLink: "https://maps.google.com/?q=CCT+College+Dublin",
  },
  {
    id: 4,
    title: "AWS for DevOps Engineers",
    date: "January 9, 2025",
    time: "7:00 PM - 9:00 PM",
    location: "Online (Zoom)",
    host: "David Walsh",
    description: "Master CI/CD pipelines, automation, and infrastructure as code with AWS services.",
    mapLink: "#",
  },
]

export default function Events() {
  return (
    <>
      <Navigation />

      {/* Header */}
      <section className="py-16 bg-slate-900 border-b border-slate-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl sm:text-6xl font-bold mb-4">Upcoming Events</h1>
          <p className="text-gray-300 text-lg">
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
                      <p className="text-gray-400 text-sm">Hosted by {event.host}</p>
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
