import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Globe, Building2, Receipt, FileText, Scale, BadgeCheck } from "lucide-react"

export default function TaxAdvisoryPage() {
  const offerings = [
    { icon: Globe, title: "Cross-border tax structuring" },
    { icon: Building2, title: "UK – UAE and KSA personal tax residency" },
    { icon: Receipt, title: "UK – UAE and KSA corporate structuring" },
    { icon: FileText, title: "KSA Zakat, VAT and Corporate Income Tax advisory" },
    { icon: Scale, title: "Double tax treaty reviews" },
    {
      icon: BadgeCheck,
      title: "Federal Tax Authority (FTA) AND Zakat, Tax and Customs Authority (ZATCA) residency certificates",
    },
  ]

  return (
    <main className="min-h-screen bg-background font-sans">
      <Header />

      {/* Hero Section */}
      <section className="relative bg-primary py-24 md:py-32 text-white overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/hero-tax-advisory.jpg"
            alt="Tax advisory documents"
            className="w-full h-full object-cover opacity-20"
            loading="lazy"
          />
        </div>
        <div className="relative max-w-5xl mx-auto px-6 text-center">
          {/* <p className="text-accent font-medium text-sm uppercase tracking-widest mb-6">OUR SPECIALIST SERVICES</p> */}
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-normal mb-8 leading-tight text-balance">
            Tax Advisory and International Structuring
          </h1>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-16 md:py-20 bg-[#F9F7F2]">
        {/* Updated Container Width and Padding to match previous sections */}
        <div className="max-w-5xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">

          <h2 className="font-serif text-3xl md:text-4xl text-primary mb-6 ">
            Strategic tax planning, international structuring and cross-border compliance solutions for businesses and families
          </h2>

          {/* Text Block: Justified, spaced, and split into paragraphs */}
          <div className="space-y-6 text-justify font-sans text-base md:text-lg leading-relaxed text-primary/80">
            <p>
              With global mobility on the rise and more high‑net‑worth families transitioning into the GCC,
              demand for technically strong and commercial cross‑border tax advice has grown significantly.
              Our dedicated tax team provides expert cross-border structuring and residency planning for
              international clients entering or expanding within the GCC. Our advice is
              pragmatic and aligned with long‑term family and business objectives.
            </p>

            <p>
              With a highly experienced team consisting of ex-Big Four tax advisers, we specialise in
              providing practical and commercially driven tax advice across UK, GCC and cross-border
              tax to help you navigate the evolving tax landscape and cross-border compliance obligations.
            </p>

            <p>
              We carry out a thorough analysis of your personal and corporate tax positions, providing
              practical tax structuring advice which supports your long-term personal and business objectives.
            </p>

            <p>
              With a large number of Middle Eastern clients with assets in the UK particularly real estate portfolios, we extensively advise families on implementing tax efficient structures to help mitigate long term tax exposures. We also work with our tax insurance partners to implement policies to protect against such exposures.
            </p>
          </div>

          {/* Core Offerings */}
          <h3 className="font-serif text-2xl md:text-3xl text-primary mt-12 mb-8">Core Offerings</h3>

          {/* Grid adjusted to 2 columns to fit the max-w-4xl container better */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {offerings.map((offering, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <offering.icon className="w-6 h-6 text-accent" strokeWidth={1.5} />
                  </div>
                  <p className="text-primary font-medium leading-relaxed font-sans">{offering.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      ]

      <Footer />
    </main>
  )
}