"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"
import { Menu, X } from "lucide-react"
import { useState } from "react"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20 py-10">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-6">
            <div className="w-16 h-16 rounded-lg bg-linear-to-br from-primary to-secondary glow-purple flex items-center justify-center">
              <Image src="/logo.png" alt="Logo" width={100} height={100} />
            </div>
            <span className="font-bold text-xl hidden sm:inline">Dublin Community Club</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden text-md md:flex items-center gap-6">
            <Link href="/" className="text-foreground hover:text-primary transition-colors">
              Home
            </Link>
            <Link href="/about" className="text-foreground hover:text-primary transition-colors">
              About
            </Link>
            <Link href="/team" className="text-foreground hover:text-primary transition-colors">
              Team
            </Link>
            <Link href="/contact" className="text-foreground hover:text-primary transition-colors">
              Contact
            </Link>
            <ThemeToggle />
            <Button className="bg-primary lg:text-md hover:bg-secondary glow-purple">Join Slack</Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-4">
            <ThemeToggle />
            <button onClick={() => setIsOpen(!isOpen)} className="text-lg text-foreground">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 space-y-4">
            <Link
              href="/"
              className="block text-foreground hover:text-primary transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/about"
              className="block text-foreground hover:text-primary transition-colors"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
            <Link
              href="/team"
              className="block text-foreground hover:text-primary transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Team
            </Link>
            <Link
              href="/contact"
              className="block text-foreground hover:text-primary transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
            <Button className="w-full text-lg bg-primary hover:bg-secondary glow-purple">Join Slack</Button>
          </div>
        )}
      </div>
    </nav>
  )
}
