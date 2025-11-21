"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"

export function Navigation() {
  const pathname = usePathname()

  const isActive = (path: string) => pathname === path

  return (
    <nav className="sticky top-0 z-50 bg-slate-900/95 backdrop-blur border-b border-slate-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 font-bold text-xl">
            <div className="w-8 h-8 bg-cyan-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold">AWS</span>
            </div>
            <span>AWS Community</span>
          </Link>

          {/* Links */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className={`text-sm font-medium transition-colors ${
                isActive("/") ? "text-cyan-400" : "text-gray-300 hover:text-white"
              }`}
            >
              Home
            </Link>
            <Link
              href="/events"
              className={`text-sm font-medium transition-colors ${
                isActive("/events") ? "text-cyan-400" : "text-gray-300 hover:text-white"
              }`}
            >
              Events
            </Link>
            <Link
              href="/resources"
              className={`text-sm font-medium transition-colors ${
                isActive("/resources") ? "text-cyan-400" : "text-gray-300 hover:text-white"
              }`}
            >
              Resources
            </Link>
            <Link
              href="/team"
              className={`text-sm font-medium transition-colors ${
                isActive("/team") ? "text-cyan-400" : "text-gray-300 hover:text-white"
              }`}
            >
              Team
            </Link>
            <Link href="/contact">
              <Button className="bg-cyan-500 hover:bg-cyan-600 text-white rounded-full">Contact</Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <button className="md:hidden p-2 text-gray-300 hover:text-white">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  )
}
