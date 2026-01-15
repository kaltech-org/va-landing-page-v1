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
    <section className="bg-secondary py-10 sm:py-16 md:py-15">
      <div className="max-w-4xl mx-auto px-6 w-full">

        {/* Header */}
        <div className="text-center mb-6">
          <p className="text-accent text-xs uppercase tracking-widest mb-2">
            Client Testimonials
          </p>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground">
            Trusted Across the GCC
          </h2>
        </div>

        {/* Content */}
        <div className="text-center">

          {/* Opening Quote */}
          <div className="text-accent text-4xl sm:text-5xl font-serif leading-none mb-3">
            "
          </div>

          {/* Quote */}
          <blockquote className="text-xl sm:text-2xl font-serif text-foreground leading-relaxed mb-4 max-w-3xl mx-auto">
            {testimonials[currentIndex].quote}
          </blockquote>

          {/* Divider */}
          <div className="w-16 h-0.5 bg-accent mx-auto mb-3" />

          {/* Author */}
          <p className="font-serif text-lg text-foreground">
            {testimonials[currentIndex].name}
          </p>
          <p className="text-sm text-muted-foreground mb-5">
            {testimonials[currentIndex].title}
          </p>

          {/* Controls */}
          <div className="flex items-center justify-center gap-3">
            <Button
              size="icon"
              variant="outline"
              onClick={() =>
                setCurrentIndex((i) => (i - 1 + testimonials.length) % testimonials.length)
              }
              className="h-9 w-9 rounded-full border-accent text-accent"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>

            <Button
              size="icon"
              variant="outline"
              onClick={() =>
                setCurrentIndex((i) => (i + 1) % testimonials.length)
              }
              className="h-9 w-9 rounded-full border-accent text-accent"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>

    </section>
  )
}