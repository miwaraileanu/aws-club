import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

// <CHANGE> Updated metadata for AWS Community Club Ireland
export const metadata: Metadata = {
  title: "AWS Community Club Ireland | Cloud Computing Community",
  description:
    "Join AWS Community Club Ireland to master cloud computing through workshops, projects and peer learning. Free and open to all.",
  keywords: ["AWS", "Cloud Computing", "Ireland", "Community", "CCT College", "Learning", "Workshops"],
  generator: "v0.app",
  icons: {
    icon: "/icon.png",
    apple: "/icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`font-sans antialiased`}>
          {children}
          <Analytics />
      </body>
    </html>
  )
}
