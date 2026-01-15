"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Testimonials() {
  const testimonials = [
    {
      name: "Garry",
      title: "International Investor",
      quote:
        "Middle East Advisory Group provided exceptional guidance through our UAE expansion. Their deep understanding of local regulations and corporate structuring was invaluable.",
    },
    {
      name: "Rob",
      title: "Managing Director",
      quote:
        "The tax advisory and international structuring support we received was world-class. MEAG's expertise saved us significant time and resources during our GCC market entry.",
    },
    {
      name: "Sherad",
      title: "Family Office Principal",
      quote:
        "Their family office advisory services are truly Big Four caliber. The team understands the unique needs of UHNW families operating across multiple jurisdictions.",
    },
    {
      name: "Amer Nazir",
      title: "Entrepreneur",
      quote:
        "MEAG made our relocation to Dubai seamless. From visa processing to corporate setup, every detail was handled with professionalism and expertise.",
    },
    {
      name: "Sam Follett",
      title: "Real Estate Investor",
      quote:
        "The cross-border tax planning and compliance support has been outstanding. Their team provides clarity in complex multi-jurisdictional matters.",
    },
    {
      name: "Craig Potter",
      title: "Business Owner",
      quote:
        "Professional, knowledgeable and always responsive. MEAG has been instrumental in our successful establishment in the GCC region.",
    },
  ]

  const [currentIndex, setCurrentIndex] = useState(0)

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    /* CHANGED: Reduced py-20/40 to py-10/16 */
    <section className="bg-secondary py-10 sm:py-16 md:py-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">

        {/* CHANGED: Reduced mb-12/16 to mb-8/10 */}
        <div className="text-center mb-8 sm:mb-10">
          <p className="text-accent font-medium text-xs sm:text-sm uppercase tracking-widest mb-3">
            CLIENT TESTIMONIALS
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-foreground leading-tight text-balance px-4">
            Trusted by Leaders Across the GCC
          </h2>
        </div>

        <div className="relative">
          {/* Testimonial Content */}
          {/* CHANGED: Reduced py-8/12 to py-4/6 */}
          <div className="text-center px-4 sm:px-8 md:px-16 py-4 sm:py-6">

            {/* Large Opening Quote - Reduced MB */}
            <div className="text-accent text-6xl sm:text-8xl font-serif leading-none mb-4 sm:mb-6">"</div>

            {/* Quote Text - Reduced MB */}
            <blockquote className="text-xl sm:text-2xl md:text-3xl font-serif text-foreground leading-relaxed mb-6 sm:mb-8 text-balance">
              {testimonials[currentIndex].quote}
            </blockquote>

            {/* Gold Line Separator - Reduced MB */}
            <div className="w-20 sm:w-24 h-0.5 bg-accent mx-auto mb-4 sm:mb-6"></div>

            {/* Author Info */}
            <div>
              <p className="text-lg sm:text-xl font-serif font-semibold text-foreground mb-1">
                {testimonials[currentIndex].name}
              </p>
              <p className="text-sm sm:text-base text-muted-foreground font-light">
                {testimonials[currentIndex].title}
              </p>
            </div>
          </div>

          {/* Navigation Buttons - Reduced MT */}
          <div className="flex items-center justify-center gap-3 sm:gap-4 mt-6 sm:mt-8">
            <Button
              variant="outline"
              size="icon"
              onClick={prev}
              className="rounded-full border-2 border-accent text-accent hover:bg-accent hover:text-white transition-colors bg-transparent h-10 w-10 sm:h-12 sm:w-12"
            >
              <ChevronLeft className="h-4 w-4 sm:h-5 sm:w-5" />
            </Button>

            {/* Dots Indicator */}
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`h-2 rounded-full transition-all ${
                    index === currentIndex ? "bg-accent w-6 sm:w-8" : "bg-accent/30 w-2"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="icon"
              onClick={next}
              className="rounded-full border-2 border-accent text-accent hover:bg-accent hover:text-white transition-colors bg-transparent h-10 w-10 sm:h-12 sm:w-12"
            >
              <ChevronRight className="h-4 w-4 sm:h-5 sm:w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}