"use client"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section className="relative bg-primary overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/dubai-skyline-buildings.jpg"
          alt="Dubai skyline"
          fill
          className="object-cover opacity-15"
          priority
        />
      </div>

      {/* Subtle GCC Skyline Decorative Element */}
      <div className="absolute bottom-0 left-0 right-0 h-32 opacity-10">
        <svg viewBox="0 0 1200 100" className="w-full h-full" preserveAspectRatio="none">
          <path
            d="M0,80 L50,80 L50,40 L80,40 L80,80 L120,80 L120,30 L160,30 L160,80 L200,80 L200,50 L240,50 L240,80 L300,80 L300,20 L350,20 L350,80 L400,80 L400,45 L440,45 L440,80 L500,80 L500,35 L550,35 L550,80 L600,80 L600,25 L650,25 L650,80 L700,80 L700,55 L740,55 L740,80 L800,80 L800,40 L850,40 L850,80 L900,80 L900,30 L950,30 L950,80 L1000,80 L1000,50 L1050,50 L1050,80 L1200,80 L1200,100 L0,100 Z"
            fill="currentColor"
            className="text-accent"
          />
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-24 sm:py-32 md:py-4 lg:py-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-white leading-tight text-balance mb-6 sm:mb-8">
            Your Strategic Growth Partners in the UAE and KSA 
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-white/80 leading-relaxed font-light max-w-3xl mx-auto px-4 mb-8 sm:mb-10">
            Specialist relocation, tax and real estate advisers to UK, Middle Eastern and international families and entrepreneurs.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
            <Link href="/#services">
              <Button className="bg-accent hover:bg-white hover:text-black  text-white font-medium tracking-wide text-sm sm:text-base px-8 py-6 transition-colors duration-300">
                Our Specialist Services
              </Button>
            </Link>
         
          </div>
          {/* </CHANGE> */}
        </div>
      </div>
    </section>
  )
}
