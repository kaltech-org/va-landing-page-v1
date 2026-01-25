"use client"

import { Linkedin, Mail, Phone } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export function Footer() {
  return (
    <footer className="bg-primary text-white py-16 sm:py-20 md:py-24 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 sm:gap-12 lg:gap-16 mb-12 sm:mb-16">
          <div>
            <div className="mb-5 sm:mb-6">
              <Link href="/" className="flex items-center">
                <div className="leading-none">
                  <div className="font-serif font-bold text-base sm:text-lg md:text-xl text-accent tracking-tight">
                    MIDDLE EAST
                  </div>
                  <div className="font-serif font-bold text-base sm:text-lg md:text-xl text-white tracking-tight">
                    ADVISORY GROUP
                  </div>
                </div>
              </Link>
            </div>
            {/* </CHANGE> */}


            {/* Social icons in gold */}
            <div className="flex gap-4 mt-6 sm:mt-8">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:text-accent/80 transition"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
              <a href="mailto:enquiries@me-advisorygroup.com" className="text-accent hover:text-accent/80 transition" aria-label="Email">
                <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
              <a href="tel:+971000000000" className="text-accent hover:text-accent/80 transition" aria-label="Phone">
                <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-serif font-semibold mb-5 sm:mb-6 text-base sm:text-lg text-white">Services</h4>
            <ul className="space-y-3 sm:space-y-4 text-xs sm:text-sm text-white/70 font-light">
              <li>
                <Link href="/services/uae-ksa-relocation" className="hover:text-accent transition">
                  UAE & KSA Relocation
                </Link>
              </li>
              <li>
                <Link href="/services/tax-advisory" className="hover:text-accent transition">
                  Tax Advisory
                </Link>
              </li>
              <li>
                <Link href="/services/real-estate-advisory" className="hover:text-accent transition">
                  Real Estate Advisory
                </Link>
              </li>
              <li>
                <Link href="/services/family-governance" className="hover:text-accent transition">
                  Family Governance
                </Link>
              </li>
              <li>
                <Link href="/services/accounting-compliance" className="hover:text-accent transition">
                  Accounting & Compliance
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-serif font-semibold mb-5 sm:mb-6 text-base sm:text-lg text-white">Company</h4>
            <ul className="space-y-3 sm:space-y-4 text-xs sm:text-sm text-white/70 font-light">
              <li>
                <Link href="/about" className="hover:text-accent transition">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/team" className="hover:text-accent transition">
                  Our Team
                </Link>
              </li>
              <li>
                <Link href="/insights" className="hover:text-accent transition">
                  News & Insights
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-accent transition">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Offices */}
          <div>
            <h4 className="font-serif font-semibold mb-5 sm:mb-6 text-base sm:text-lg text-white">Offices</h4>
            <ul className="space-y-3 sm:space-y-4 text-xs sm:text-sm text-white/70 font-light">
              <p className="text-xs sm:text-sm  mb-3">Dubai</p>

              <p className="text-xs sm:text-sm  mb-4">Abu Dhabi</p>
              <p className="text-xs sm:text-sm  mb-4">Saudi Arabia</p>
              <p className="text-xs sm:text-sm  mb-3">London</p>

            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-8 sm:pt-12 flex flex-col md:flex-row justify-between items-center gap-4 sm:gap-6">
          <p className="text-xs sm:text-sm text-white/60 font-light">
            © 2025 Tax Consulting Group. All rights reserved.
          </p>
         
        </div>
      </div>
    </footer>
  )
}
