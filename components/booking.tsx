"use client"
import { MapPin, Phone, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function Booking() {
  return (
    <section id="contact" className="bg-card py-20 sm:py-24 md:py-32 lg:py-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
        <div className="text-center mb-16 sm:mb-20">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-primary mb-6">Get in Touch</h2>
          <p className="text-lg sm:text-xl text-primary/70 max-w-2xl mx-auto leading-relaxed px-4 font-sans">
            Find out more about our specialist services and how we can help.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 mb-16 sm:mb-20">
          {/* Office Locations */}
          <div className="space-y-6 sm:space-y-8">
            {/* Dubai Office */}
            <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-l-accent">
              <h3 className="text-lg sm:text-xl font-serif font-bold text-primary mb-3">Dubai</h3>
              <div className="space-y-2">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-accent mt-1 flex-shrink-0" />
                  <p className="text-sm text-primary/70 font-sans">
                    Boulevard Plaza, Tower 1, Level 20, Downtown Dubai, UAE
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-accent flex-shrink-0" />
                  <span className="text-sm text-primary/70 font-sans">+971 4 XXX XXXX</span>
                </div>
              </div>
            </div>

            {/* Abu Dhabi Office */}
            <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-l-primary/20">
              <h3 className="text-lg sm:text-xl font-serif font-bold text-primary mb-3">Abu Dhabi</h3>
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-accent mt-1 flex-shrink-0" />
                <p className="text-sm text-primary/70 font-sans">Address coming soon</p>
              </div>
              <span className="inline-block mt-3 text-xs font-medium text-accent bg-accent/10 px-3 py-1 rounded-full font-sans">
                Coming Soon
              </span>
            </div>

            {/* Saudi Arabia Office */}
            <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-l-primary/20">
              <h3 className="text-lg sm:text-xl font-serif font-bold text-primary mb-3">Saudi Arabia</h3>
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-accent mt-1 flex-shrink-0" />
                <p className="text-sm text-primary/70 font-sans">Address coming soon</p>
              </div>
              <span className="inline-block mt-3 text-xs font-medium text-accent bg-accent/10 px-3 py-1 rounded-full font-sans">
                Coming Soon
              </span>
            </div>

            {/* London Office */}
            <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-l-accent">
              <h3 className="text-lg sm:text-xl font-serif font-bold text-primary mb-3">London</h3>
              <div className="space-y-2">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-accent mt-1 flex-shrink-0" />
                  <p className="text-sm text-primary/70 font-sans">Mayfair, London, W1K, United Kingdom</p>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-accent flex-shrink-0" />
                  <span className="text-sm text-primary/70 font-sans">+44 20 XXXX XXXX</span>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Card */}
          <div className="flex flex-col justify-center">
            <div className="bg-primary p-8 md:p-10 rounded-xl text-center">
              <h3 className="font-serif text-2xl md:text-3xl text-white mb-4">Ready to Get Started?</h3>
              <p className="text-white/80 mb-8 font-sans">
                Visit our contact page to send us a detailed message or find more information about our offices.
              </p>
              <Link href="/contact">
                <Button className="bg-accent hover:bg-accent/90 text-white font-medium px-10 py-6 text-base font-sans">
                  Contact Us
                </Button>
              </Link>
            </div>

            {/* General Enquiries */}
            <div className="mt-6 bg-secondary p-6 rounded-xl">
              <h3 className="font-serif text-lg text-primary mb-4">General Enquiries</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-accent" />
                  <a
                    href="mailto:info@tcg.com"
                    className="text-sm text-primary/70 hover:text-accent transition font-sans"
                  >
                    info@tcg.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
