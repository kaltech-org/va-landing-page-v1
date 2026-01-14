"use client"

import Image from "next/image"
import { Globe, Award, Handshake } from "lucide-react"

export function AboutTrainer() {
  const pillars = [
    {
      icon: Globe,
      title: "International Presence",
      description: "Offices in London, Dubai, Abu Dhabi and Saudi Arabia.",
    },
    {
      icon: Award,
      title: "Expertise",
      description: "Independent partner-led service with Big Four expertise.",
    },
    {
      icon: Handshake,
      title: "Partners to Professional Advisers",
      description:
        "Specialist consultancy partners to international private banks, wealth managers, family offices, accountants and lawyers.",
    },
  ]

  return (
    <section id="about" className="py-20 sm:py-24 md:py-32 lg:py-40 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
        <div className="max-w-4xl mx-auto text-center mb-20 sm:mb-24">
          <p className="text-base sm:text-lg md:text-xl leading-relaxed text-secondary-foreground">
            Middle East Advisory Group is one of the leading GCC-based advisory and corporate services firms, supporting
            UK, Middle Eastern and international families, entrepreneurs and high-net worth private clients with
            relocation, tax advisory, real estate and cross-border structuring services across the UAE, Saudi Arabia and
            the wider GCC region.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 mb-20 sm:mb-24">
          {pillars.map((pillar, index) => {
            const IconComponent = pillar.icon
            return (
              <div key={index} className="bg-card p-8 sm:p-10 text-center">
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full border-2 border-accent flex items-center justify-center mx-auto mb-6">
                  <IconComponent className="w-8 h-8 sm:w-10 sm:h-10 text-accent" strokeWidth={1.5} />
                </div>
                <h3 className="text-lg sm:text-xl font-serif font-semibold text-foreground mb-3">{pillar.title}</h3>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">{pillar.description}</p>
              </div>
            )
          })}
        </div>

        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center bg-card p-8 sm:p-12 md:p-16">
          {/* CEO Image */}
          <div className="flex justify-center md:justify-start">
            <div className="relative">
              <div className="w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-accent/20">
                <Image
                  src="/zeeshan-khilji-ceo.jpg"
                  alt="Zeeshan Khilji - CEO"
                  width={300}
                  height={300}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-2 -right-2 w-16 h-16 sm:w-20 sm:h-20 bg-accent rounded-full flex items-center justify-center">
                <span className="text-accent-foreground font-serif text-xs sm:text-sm font-semibold">CEO</span>
              </div>
            </div>
          </div>

          {/* CEO Info */}
          <div className="text-center md:text-left">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
              Zeeshan Khilji
            </h3>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-6">
              Ex-Big Four | Author of Bloomsbury publications | Tax advisory, real estate and cross-border structuring
              specialist.
            </p>
            <div className="w-16 h-0.5 bg-accent mx-auto md:mx-0"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
