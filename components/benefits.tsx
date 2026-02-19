"use client"

import { Building2, Calculator, Home, Users, FileText } from "lucide-react"
import Link from "next/link"

export function Benefits() {
  const services = [
    {
      icon: Building2,
      title: "UAE and Saudi Arabia Relocation and Corporate Services",
      slug: "uae-ksa-relocation",
    },
    {
      icon: Calculator,
      title: "Tax Advisory and International Structuring",
      slug: "tax-advisory",
    },
    {
      icon: Home,
      title: "Real Estate Advisory",
      slug: "real-estate-advisory",
    },
    {
      icon: Users,
      title: "Family Governance and Succession Planning",
      slug: "family-governance",
    },
    {
      icon: FileText,
      title: "UAE Accounting and Outsourced CFO Services",
      slug: "accounting-compliance",
    },
  ]

  return (
    /* CHANGED: Reduced py-20/40 to py-10/16 */
    <section id="services" className="bg-background py-10 sm:py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">

        {/* CHANGED: Reduced mb-16/20 to mb-8/12 */}
        <div className="mb-8 sm:mb-12 text-center">

           <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-foreground leading-tight text-balance mx-auto max-w-3xl px-4">
            OUR SPECIALIST SERVICES
          </h2> 
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon
            return (
              <Link
                key={index}
                href={`/services/${service.slug}`}
                /* CHANGED: Reduced p-8/10 to p-6/8 */
                className="bg-card border border-border/30 p-6 sm:p-8 group hover:border-accent/40 transition-all duration-300 block"
              >
                {/* CHANGED: Reduced mb-6/8 to mb-4/6 */}
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full border-2 border-accent flex items-center justify-center mb-4 sm:mb-6 group-hover:bg-accent/5 transition-colors duration-300">
                  <IconComponent className="w-6 h-6 sm:w-7 sm:h-7 text-accent" strokeWidth={1.5} />
                </div>
                <h3 className="text-lg sm:text-xl font-serif font-semibold text-foreground leading-tight">
                  {service.title}
                </h3>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}