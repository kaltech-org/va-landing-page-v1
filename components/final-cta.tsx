"use client"

import { Button } from "@/components/ui/button"

export function FinalCTA() {
  const handleBookSession = () => {
    const bookingSection = document.getElementById("booking")
    bookingSection?.scrollIntoView({ behavior: "smooth" })
  }

  const handleLearnMore = () => {
    const faqSection = document.getElementById("faq")
    faqSection?.scrollIntoView({ behavior: "smooth" })
  }

  const handleContact = () => {
    const contactSection = document.getElementById("contact")
    contactSection?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="bg-accent py-20 sm:py-24 md:py-32 lg:py-40">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-accent-foreground mb-6 sm:mb-8 leading-tight text-balance">
          Partner with Regional Leaders
        </h2>
        <p className="text-lg sm:text-xl text-accent-foreground/90 mb-10 sm:mb-12 max-w-3xl mx-auto leading-relaxed font-light px-4">
          Discover how Middle East Advisory Group can support your organization's strategic objectives with proven
          expertise and unwavering commitment to excellence.
        </p>
        <Button
          onClick={handleContact}
          size="lg"
          className="bg-foreground hover:bg-foreground/90 text-background text-sm sm:text-base font-medium tracking-wide px-12 sm:px-16 py-6 sm:py-7"
        >
          Schedule Consultation
        </Button>
      </div>
    </section>
  )
}
