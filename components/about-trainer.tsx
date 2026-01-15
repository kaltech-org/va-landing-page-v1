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
    /* CHANGED: Reduced py-20/32 to py-10/16 */
    <section id="about" className="py-10 sm:py-12 md:py-16 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">

        {/* CHANGED: Reduced mb-20/24 to mb-8/12 */}
        <div className="max-w-4xl mx-auto text-center mb-8 sm:mb-12">
          <p className="text-base sm:text-lg md:text-xl leading-relaxed text-secondary-foreground">
            Middle East Advisory Group is one of the leading GCC-based advisory and corporate services firms, supporting
            UK, Middle Eastern and international families, entrepreneurs and high-net worth private clients with
            relocation, tax advisory, real estate and cross-border structuring services across the UAE, Saudi Arabia and
            the wider GCC region.
          </p>
        </div>

        {/* CHANGED: Reduced gap and mb-20/24 to mb-8/12 */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-8 sm:mb-12">
          {pillars.map((pillar, index) => {
            const IconComponent = pillar.icon
            return (
              /* CHANGED: Reduced p-8/10 to p-6/8 */
              <div key={index} className="bg-card p-6 sm:p-8 text-center">
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full border-2 border-accent flex items-center justify-center mx-auto mb-4">
                  <IconComponent className="w-8 h-8 sm:w-10 sm:h-10 text-accent" strokeWidth={1.5} />
                </div>
                <h3 className="text-lg sm:text-xl font-serif font-semibold text-foreground mb-2">{pillar.title}</h3>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">{pillar.description}</p>
              </div>
            )
          })}
        </div>

        {/* CHANGED: Reduced gap and padding significantly */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-10 items-center bg-card p-6 sm:p-10 rounded-lg">
          {/* CEO Image */}
          <div className="flex justify-center md:justify-start">
            <div className="relative">
              <div className="w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-accent/20">
                <Image
                  src="/zeeshan-khilji-ceo.jpg"
                  alt="Zeeshan Khilji - CEO"
                  width={300}
                  height={300}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-2 -right-2 w-14 h-14 sm:w-16 sm:h-16 bg-accent rounded-full flex items-center justify-center">
                <span className="text-accent-foreground font-serif text-xs sm:text-sm font-semibold">CEO</span>
              </div>
            </div>
          </div>

          {/* CEO Info */}
          <div className="text-center md:text-left mt-4 md:mt-0">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-foreground mb-2">
              Zeeshan Khilji
            </h3>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-4">
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