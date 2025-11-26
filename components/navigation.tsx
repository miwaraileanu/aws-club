"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"

export function Navigation() {
  const pathname = usePathname()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const isActive = (path: string) => pathname === path

  const closeMenu = () => setIsMenuOpen(false)

  return (
    <nav className="sticky top-0 z-50 glass backdrop-blur-xl border-b border-cyan-500/20 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center space-x-2 font-bold text-xl group">
            <div className="w-16 h-16 rounded-lg flex items-center justify-center">
              <Image src="/logo.png" alt="AWS Community" width={62} height={62} className="rounded-lg" />
            </div>
            <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              AWS Cloud Club Dublin
            </span>
          </Link>

          {/* Links */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className={`text-sm font-medium transition-all duration-300 relative group ${isActive("/") ? "text-cyan-400" : "text-gray-300 hover:text-white"
                }`}
            >
              Home
              <span className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-400 transition-all duration-300 group-hover:w-full ${isActive("/") ? "w-full" : ""}`}></span>
            </Link>
            <Link
              href="/events"
              className={`text-sm font-medium transition-all duration-300 relative group ${isActive("/events") ? "text-cyan-400" : "text-gray-300 hover:text-white"
                }`}
            >
              Events
              <span className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-400 transition-all duration-300 group-hover:w-full ${isActive("/events") ? "w-full" : ""}`}></span>
            </Link>
            <Link
              href="/team"
              className={`text-sm font-medium transition-all duration-300 relative group ${isActive("/team") ? "text-cyan-400" : "text-gray-300 hover:text-white"
                }`}
            >
              Team
              <span className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-400 transition-all duration-300 group-hover:w-full ${isActive("/team") ? "w-full" : ""}`}></span>
            </Link>
            <Link href="/contact">
              <Button className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white rounded-full btn-glow shadow-lg shadow-cyan-500/30">
                Contact
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-gray-300 hover:text-white transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-cyan-500/20 animate-fade-in">
            <div className="px-4 py-4 space-y-3">
              <Link
                href="/"
                onClick={closeMenu}
                className={`block px-4 py-3 rounded-lg text-sm font-medium transition-all duration-300 ${
                  isActive("/")
                    ? "bg-cyan-500/20 text-cyan-400"
                    : "text-gray-300 hover:bg-cyan-500/10 hover:text-white"
                }`}
              >
                Home
              </Link>
              <Link
                href="/events"
                onClick={closeMenu}
                className={`block px-4 py-3 rounded-lg text-sm font-medium transition-all duration-300 ${
                  isActive("/events")
                    ? "bg-cyan-500/20 text-cyan-400"
                    : "text-gray-300 hover:bg-cyan-500/10 hover:text-white"
                }`}
              >
                Events
              </Link>
              <Link
                href="/team"
                onClick={closeMenu}
                className={`block px-4 py-3 rounded-lg text-sm font-medium transition-all duration-300 ${
                  isActive("/team")
                    ? "bg-cyan-500/20 text-cyan-400"
                    : "text-gray-300 hover:bg-cyan-500/10 hover:text-white"
                }`}
              >
                Team
              </Link>
              <Link href="/contact" onClick={closeMenu} className="block">
                <Button className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white rounded-full btn-glow shadow-lg shadow-cyan-500/30">
                  Contact
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
