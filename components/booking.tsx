"use client"
import { MapPin, Phone, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function Booking() {
  return (
    /* CHANGED: Reduced py-20/40 to py-10/16 */
    <section id="contact" className="bg-card py-10 sm:py-16 md:py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">

        {/* CHANGED: Reduced mb-16/20 to mb-8/12 */}
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-primary mb-4">Contact us</h2>
          <p className="text-lg sm:text-xl text-primary/70 max-w-2xl mx-auto leading-relaxed px-4 font-sans">
            Get in touch to find out more about our specialist services and how we can help.
          </p>
        </div>

        {/* CHANGED: Reduced gap and removed bottom margin entirely */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Office Locations */}
          <div className="space-y-6">
            {/* Dubai Office */}
            <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-l-accent">
              <h3 className="text-lg sm:text-xl font-serif font-bold text-primary mb-3">Dubai</h3>
              <div className="space-y-2">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-accent mt-1 flex-shrink-0" />
                  <p className="text-sm text-primary/70 font-sans">
                    Boulevard Plaza, Tower 1, Level 9, Sheikh Mohammed Bin Rashid Boulevard, Dubai, United Arab Emirates
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-accent flex-shrink-0" />
                  <span className="text-sm text-primary/70 font-sans">+971 04 527 6813</span>
                </div>
              </div>
            </div>

            {/* Abu Dhabi Office */}
            <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-l-primary/20">
              <h3 className="text-lg sm:text-xl font-serif font-bold text-primary mb-3">Abu Dhabi</h3>
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-accent mt-1 flex-shrink-0" />
                <p className="text-sm text-primary/70 font-sans">ADGM Square, Al Sila Tower, Abu Dhabi, United Arab Emirates </p>
              </div>

            </div>

            {/* Saudi Arabia Office */}
            <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-l-primary/20">
              <h3 className="text-lg sm:text-xl font-serif font-bold text-primary mb-3">Saudi Arabia</h3>
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-accent mt-1 flex-shrink-0" />
                <p className="text-sm text-primary/70 font-sans">6948 Eastern Ring Branch Road, Ar Rabwah, Riyadh 12824, Saudi Arabia
                </p>
              </div>

            </div>

            {/* London Office */}
            <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-l-accent">
              <h3 className="text-lg sm:text-xl font-serif font-bold text-primary mb-3">London</h3>
              <div className="space-y-2">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-accent mt-1 flex-shrink-0" />
                  <p className="text-sm text-primary/70 font-sans">17 Hanover Square, London, W1S 1BN</p>
                </div>

              </div>
            </div>
          </div>

          {/* CTA Card */}
          <div className="flex flex-col justify-center">
            <div className="bg-primary p-8 md:p-10 rounded-xl text-center">

              <p className="text-white/80 mb-8 font-sans">
                Click below to send us a message with your enquiry.
              </p>
              <Link href="/contact">
                <Button className="bg-accent hover:bg-white hover:text-black text-white font-medium px-10 py-6 text-base font-sans">
                  Contact us
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
                    href="mailto:enquiries@me-advisorygroup.com"
                    className="text-sm text-primary/70 hover:text-accent transition font-sans"
                  >
                    enquiries@me-advisorygroup.com
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