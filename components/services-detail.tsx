import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

const services = [
  {
    title: "UAE and Saudi Arabia Relocation and Corporate Services",
    description:
      "We deliver an integrated suite of relocation, corporate set-up and regulatory support services for families, founders, investors and businesses entering the GCC. Our team provides end-to-end guidance across visa applications, company formation, PRO services, and compliance requirements.",
    features: [
      "UAE Golden Visa and residency advisory for investors, entrepreneurs and talent",
      "KSA residency programs including Premium Residency and Special Iqama routes",
      "Free Zone and mainland company formation (UAE and KSA)",
      "Corporate structuring, licensing and regulatory approvals",
      "PRO services and government relations support",
      "Family relocation planning and settlement services",
    ],
    image: "/modern-dubai-skyline-business-district.jpg",
    imageAlt: "Modern Dubai business district",
  },
  {
    title: "Tax Advisory & International Structuring",
    description:
      "Our tax advisory practice supports international families, entrepreneurs and businesses navigating the evolving GCC tax landscape and cross-border compliance obligations. We provide strategic tax planning, entity structuring advice, and compliance support across the UAE, KSA and UK.",
    features: [
      "UAE Corporate Tax compliance and advisory (CT301 registration, transfer pricing)",
      "KSA Zakat, VAT and Corporate Income Tax advisory",
      "International tax planning and treaty optimization",
      "Cross-border structuring for holding companies and family offices",
      "Tax residency planning and certificate applications",
      "UK-GCC tax coordination and dual residency planning",
    ],
    image: "/professional-tax-advisor-consultation.jpg",
    imageAlt: "Professional tax advisory consultation",
  },
  {
    title: "International Property Advisory & GCC–UK Real Estate",
    description:
      "We advise GCC-based investors, families and developers on international property acquisitions, structuring, financing and compliance. Our practice spans residential investment, commercial real estate and cross-border property planning with a focus on UK and GCC markets.",
    features: [
      "UK residential property acquisition for GCC investors",
      "Structuring advice for property holding (SPV, trust, direct ownership)",
      "UK mortgage advisory and financing coordination",
      "SDLT, capital gains tax and inheritance tax planning",
      "Dubai and Abu Dhabi property investment structuring",
      "Portfolio management and compliance coordination",
    ],
    image: "/luxury-london-property-skyline.jpg",
    imageAlt: "Luxury London property skyline",
  },
  {
    title: "Advisory for GCC Families & Family Offices",
    description:
      "We partner with high-net-worth and ultra-high-net-worth families across the GCC to provide holistic advisory services covering wealth structuring, succession planning, governance, and cross-border compliance. Our approach integrates legal, tax, regulatory and operational considerations.",
    features: [
      "Family office structuring and governance frameworks",
      "Wealth structuring and asset protection strategies",
      "Succession planning and generational wealth transfer",
      "Trust and foundation advisory (onshore and offshore)",
      "Multi-jurisdictional tax and regulatory compliance",
      "Next-generation advisory and family constitution development",
    ],
    image: "/elegant-family-office-meeting-room.jpg",
    imageAlt: "Professional family office environment",
  },
  {
    title: "Accounting, Audit Support & GCC Tax Compliance",
    description:
      "Our accounting and compliance practice delivers end-to-end financial reporting, audit coordination and regulatory compliance services for businesses and investors operating across the GCC. We ensure accuracy, transparency and adherence to local and international standards.",
    features: [
      "IFRS-compliant financial statement preparation",
      "UAE Corporate Tax compliance and quarterly reporting",
      "KSA ZATCA compliance (Zakat, VAT, e-invoicing)",
      "Audit support and coordination with external auditors",
      "Management accounts and financial performance reporting",
      "Bookkeeping, payroll and operational accounting services",
    ],
    image: "/modern-accounting-office-dubai.jpg",
    imageAlt: "Modern accounting office environment",
  },
]

export default function ServicesDetail() {
  return (
    <section className="bg-card py-32">
      <div className="container mx-auto max-w-7xl px-6">
        {/* Section header */}
        <div className="mb-24 text-center">
          <h2 className="font-serif text-5xl font-normal text-primary mb-6">Our Services</h2>
          <p className="font-sans text-lg text-primary/70 max-w-3xl mx-auto leading-relaxed">
            Comprehensive advisory and corporate services for families, entrepreneurs and businesses across the GCC and
            UK
          </p>
        </div>

        {/* Services list with alternating layout */}
        <div className="space-y-32">
          {services.map((service, index) => (
            <div
              key={index}
              className={`grid md:grid-cols-2 gap-16 items-center ${index % 2 === 1 ? "md:flex-row-reverse" : ""}`}
            >
              {/* Image */}
              <div className={`${index % 2 === 1 ? "md:order-2" : ""}`}>
                <div className="relative aspect-[4/3] overflow-hidden border border-accent/20">
                  <Image
                    src={service.image || "/placeholder.svg"}
                    alt={service.imageAlt}
                    fill
                    className="object-cover"
                    loading="lazy"
                  />
                </div>
              </div>

              {/* Content */}
              <div className={`${index % 2 === 1 ? "md:order-1" : ""}`}>
                <h3 className="font-serif text-3xl font-normal text-primary mb-6">{service.title}</h3>
                <p className="font-sans text-base text-primary/80 mb-8 leading-relaxed">{service.description}</p>

                {/* Features list */}
                <ul className="space-y-4 mb-8">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3 font-sans text-sm text-primary/70">
                      <span className="text-accent mt-1 flex-shrink-0">—</span>
                      <span className="leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <Button
                  variant="ghost"
                  className="font-sans text-accent hover:text-primary hover:bg-transparent p-0 h-auto group"
                >
                  Learn more
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
