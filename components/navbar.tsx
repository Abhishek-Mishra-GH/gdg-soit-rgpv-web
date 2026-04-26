"use client"

import { motion } from "framer-motion"
import { useState, useEffect } from "react"
import Link from "next/link"
import { Sheet, SheetTrigger, SheetContent, SheetClose, SheetHeader, SheetTitle } from "@/components/ui/sheet"
import Logo from "./logo"
import { VisuallyHidden } from "@radix-ui/react-visually-hidden"


export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Events", href: "/events" },
    { label: "Team", href: "/team" },
    { label: "Gallery", href: "/gallery" },
    // { label: "Contact", href: "/contact" },
  ]

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-white/80 backdrop-blur-lg shadow-sm" : "bg-transparent"
        }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* /* GDG Logo */}
        <a href="/" className="flex items-center gap-3 group text-decoration-none">
          <svg
            viewBox="0 0 110 64"
            className="h-10"
            aria-label="GDG Logo"
            fill="none" /* Ensure fill is none so strokes render correctly */
          >
            {/* Geometry Calculation:
          ViewBox: 128x64
          Stroke Width: 10
          Center Y: 32
          
          Left Bracket (<):
          Vertex: (28, 32)
          Top-Right End: (52, 14) -> Slope ~37 degrees
          Bottom-Right End: (52, 50)
          
          Right Bracket (>):
          Vertex: (100, 32)
          Top-Left End: (76, 14)
          Bottom-Left End: (76, 50)
        */}

            {/* Left Bracket (<) */}
            {/* Red: Top stroke */}
            <path
              d="M52 14 L28 32"
              stroke="#EA4335"
              strokeWidth="10"
              strokeLinecap="round"
            />
            {/* Blue: Bottom stroke */}
            <path
              d="M28 32 L52 50"
              stroke="#4285F4"
              strokeWidth="10"
              strokeLinecap="round"
            />

            {/* Right Bracket (>) */}
            {/* Green: Top stroke */}
            <path
              d="M76 14 L100 32"
              stroke="#34A853"
              strokeWidth="10"
              strokeLinecap="round"
            />
            {/* Yellow: Bottom stroke */}
            <path
              d="M100 32 L76 50"
              stroke="#FBBC04"
              strokeWidth="10"
              strokeLinecap="round"
            />
          </svg>

          <div className="flex flex-col">
            <span className="text-lg font-bold text-neutral-900 tracking-tight leading-none">GDG</span>
            <span className="text-[10px] text-neutral-500 font-medium tracking-wide">SOIT RGPV</span>
          </div>
        </a>

        {/* Navigation Links - Updated with proper page routes */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-sm font-medium text-neutral-600 hover:text-neutral-900 transition-colors relative group"
            >
              {item.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-neutral-900 transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
        </div>

        {/* CTA Button */}
        <Link
          href="/contact"
          className="hidden md:flex items-center gap-2 px-5 py-2.5 bg-neutral-900 text-white text-sm font-medium rounded-full hover:bg-neutral-800 transition-colors"
        >
          Contact Us
        </Link>

        <Sheet>
          <SheetTrigger asChild>
            <button className="md:hidden p-2" aria-label="Open menu" type="button">
              <svg className="w-6 h-6 text-neutral-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </SheetTrigger>
          <SheetContent
            side="left"
            className="md:hidden p-0 [&_button[aria-label='Close']]:hidden"
          >
            <VisuallyHidden>
              <SheetTitle>Mobile Navigation Menu</SheetTitle>
            </VisuallyHidden>

            {/* Header area with logo aligned top-left */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-neutral-200">
              <Logo />
            </div>

            {/* Menu links */}
            <div className="flex flex-col gap-4 px-6 py-6">
              {navItems.map((item) => (
                <SheetClose asChild key={item.label}>
                  <Link
                    href={item.href}
                    className="text-base font-medium text-neutral-900 hover:text-neutral-600 transition-colors"
                  >
                    {item.label}
                  </Link>
                </SheetClose>
              ))}

              <SheetClose asChild>
                <Link
                  href="/contact"
                  className="mt-4 inline-flex items-center gap-2 px-5 py-2.5 bg-neutral-900 text-white text-sm font-medium rounded-full hover:bg-neutral-800 transition-colors"
                >
                  Contact Us
                </Link>
              </SheetClose>
            </div>
          </SheetContent>

        </Sheet>
      </div>
    </motion.nav>
  )
}
