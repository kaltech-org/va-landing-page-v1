"use client"

import { Button } from "@/components/ui/button"
import { useState } from "react"
import { ChevronDown, Menu, X } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export function Header() {
  const [servicesOpen, setServicesOpen] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const services = [
    { name: "UAE and KSA Relocation and Corporate Services", slug: "uae-ksa-relocation" },
    { name: "Tax Advisory and International Structuring", slug: "tax-advisory" },
    { name: "Real Estate Advisory", slug: "real-estate-advisory" },
    { name: "Family Governance and Succession Planning", slug: "family-governance" },
    { name: "UAE Accounting and Tax Compliance", slug: "accounting-compliance" },
  ]

  return (
    <header className="sticky top-0 z-50 bg-background border-b border-border font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-6 sm:py-8 flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <div className="leading-none">
            <div className="font-serif font-bold text-base sm:text-lg md:text-xl text-accent tracking-tight">
              MIDDLE EAST
            </div>
            <div className="font-serif font-bold text-base sm:text-lg md:text-xl text-primary tracking-tight">
              ADVISORY GROUP
            </div>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8 xl:gap-12">
          <Link
            href="/"
            className="text-sm font-medium text-foreground/70 hover:text-foreground transition tracking-wide"
          >
            Home
          </Link>
          <Link
            href="/about"
            className="text-sm font-medium text-foreground/70 hover:text-foreground transition tracking-wide"
          >
            About
          </Link>
          <div
            className="relative group"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <button className="text-sm font-medium text-foreground/70 hover:text-foreground transition tracking-wide flex items-center gap-1 py-2">
              Services
              <ChevronDown className={`w-3 h-3 transition-transform ${servicesOpen ? "rotate-180" : ""}`} />
            </button>
            <div
              className={`absolute top-full left-0 pt-2 transition-all duration-200 ${
                servicesOpen ? "opacity-100 visible" : "opacity-0 invisible"
              }`}
            >
              <div className="w-96 bg-background border border-border shadow-lg">
                <div className="py-4">
                  {services.map((service, index) => (
                    <Link
                      key={index}
                      href={`/services/${service.slug}`}
                      className="block px-6 py-3 text-sm text-foreground/70 hover:text-foreground hover:bg-secondary/30 transition"
                      onClick={() => setServicesOpen(false)}
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
          {/* </CHANGE> */}
          <Link
            href="/team"
            className="text-sm font-medium text-foreground/70 hover:text-foreground transition tracking-wide"
          >
            Our Team
          </Link>
          <Link
            href="/contact"
            className="text-sm font-medium text-foreground/70 hover:text-foreground transition tracking-wide"
          >
            Contact
          </Link>
        </nav>

        <div className="flex items-center gap-4">
          <Link href="/contact">
            <Button className="hidden sm:block bg-accent hover:bg-white hover:text-black text-accent-foreground font-medium tracking-wide text-sm px-6 py-2">
              Contact us
            </Button>
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden text-foreground"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-background border-t border-border">
          <nav className="px-4 sm:px-6 py-6 space-y-4">
            <Link
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm font-medium text-foreground/70 hover:text-foreground transition py-2"
            >
              Home
            </Link>
            <Link
              href="/about"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm font-medium text-foreground/70 hover:text-foreground transition py-2"
            >
              About
            </Link>
            <div className="space-y-2">
              <p className="text-sm font-medium text-foreground/70 py-2">Services</p>
              <div className="pl-4 space-y-2">
                {services.map((service, index) => (
                  <Link
                    key={index}
                    href={`/services/${service.slug}`}
                    onClick={() => setMobileMenuOpen(false)}
                    className="block text-xs text-foreground/60 hover:text-foreground transition py-1.5"
                  >
                    {service.name}
                  </Link>
                ))}
              </div>
            </div>
            <Link
              href="/team"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm font-medium text-foreground/70 hover:text-foreground transition py-2"
            >
              Our Team
            </Link>
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm font-medium text-foreground/70 hover:text-foreground transition py-2"
            >
              Contact
            </Link>
            <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>
              <Button className="w-full sm:hidden bg-accent hover:bg-white hover:text-white text-accent-foreground font-medium tracking-wide mt-4">
                Contact us
              </Button>
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}
