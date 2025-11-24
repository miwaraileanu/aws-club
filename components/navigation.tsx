"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"

export function Navigation() {
  const pathname = usePathname()

  const isActive = (path: string) => pathname === path

  return (
    <nav className="sticky top-0 z-50 glass backdrop-blur-xl border-b border-cyan-500/20 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 font-bold text-xl group">
            <div className="w-8 h-8 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center animate-glow-pulse shadow-lg shadow-cyan-500/50">
              <span className="text-white font-bold text-sm">AWS</span>
            </div>
            <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              AWS Community
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
              href="/resources"
              className={`text-sm font-medium transition-all duration-300 relative group ${isActive("/resources") ? "text-cyan-400" : "text-gray-300 hover:text-white"
                }`}
            >
              Resources
              <span className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-400 transition-all duration-300 group-hover:w-full ${isActive("/resources") ? "w-full" : ""}`}></span>
            </Link>
            <Link
              href="/team"
              className={`text-sm font-medium transition-all duration-300 relative group ${isActive("/team") ? "text-cyan-400" : "text-gray-300 hover:text-white"
                }`}
            >
              Team
              <span className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-400 transition-all duration-300 group-hover:w-full ${isActive("/team") ? "w-full" : ""}`}></span>
            </Link>
            <ThemeToggle />
            <Link href="/contact">
              <Button className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white rounded-full btn-glow shadow-lg shadow-cyan-500/30">
                Contact
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <button className="md:hidden p-2 text-gray-300 hover:text-white transition-colors">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  )
}
