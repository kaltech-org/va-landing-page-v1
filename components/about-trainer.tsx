"use client"

import Image from "next/image"
import { Globe, Award, Handshake } from "lucide-react"

export function AboutTrainer() {
  const pillars = [
    {
      icon: Globe,
      title: "International Presence",
      description: "Offices in Dubai, Abu Dhabi, Saudi Arabia, and London.",
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
    <section id="about" className="py-10 sm:py-12 md:py-16 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">

        <div className="max-w-4xl mx-auto text-center mb-8 sm:mb-12">
          <p className="text-base sm:text-lg md:text-xl leading-relaxed text-secondary-foreground text-left md:text-justify">
            Middle East Advisory (MEA) Group is one of the leading GCC-based advisory and corporate services firms, supporting UK, Middle Eastern and international families, entrepreneurs and high-net worth private clients with relocation, tax advisory, real estate and cross-border structuring services across the UAE and Saudi Arabia (KSA).
          </p>

        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-8 sm:mb-12">
          {pillars.map((pillar, index) => {
            const IconComponent = pillar.icon
            return (
              <div key={index} className="bg-card p-6 sm:p-8 text-center">
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full border-2 border-accent flex items-center justify-center mx-auto mb-4">
                  <IconComponent className="w-8 h-8 sm:w-10 sm:h-10 text-accent" strokeWidth={1.5} />
                </div>
                <h3 className="text-lg sm:text-xl font-serif font-semibold text-foreground mb-2">
                  {pillar.title}
                </h3>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            )
          })}
        </div>

        <div className="grid md:grid-cols-2 gap-3 md:gap-3 items-center bg-card p-6 sm:p-10 rounded-lg">
          {/* CEO Image */}
          <div className="flex justify-center md:justify-start">
            <div className="w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56  ml-3 rounded-full overflow-hidden border-4 border-accent/20">
              <Image
                src="/Zeeshan.jpg"
                alt="Zeeshan Khilji"
                width={300}
                height={300}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* CEO Info */}
          <div className="text-center md:text-left mt-4 md:mt-0">
            <span className="block text-sm uppercase tracking-wide text-accent mb-1">
              CEO
            </span>
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-foreground mb-2">
              Zeeshan Khilji
            </h3>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-4">
              Ex-Big Four | Author of Bloomsbury publications | International tax advisory, real estate and cross-border structuring specialist
            </p>
            <div className="w-16 h-0.5 bg-accent mx-auto md:mx-0"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
