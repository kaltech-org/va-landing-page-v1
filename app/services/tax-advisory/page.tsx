import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Globe, Building2, Receipt, FileText, Scale, BadgeCheck } from "lucide-react"

export default function TaxAdvisoryPage() {
  const offerings = [
    { icon: Globe, title: "Cross-border tax structuring and residency advisory services" },
    { icon: Building2, title: "UK – UAE corporate structuring" },
    { icon: Receipt, title: "KSA Zakat, VAT and Corporate Income Tax advisory" },
    { icon: FileText, title: "UK inheritance tax planning" },
    { icon: Scale, title: "Double tax treaty reviews" },
    {
      icon: BadgeCheck,
      title: "Federal Tax Authority (FTA) and Zakat, Tax and Customs Authority (ZATCA) residency certificates",
    },
  ]

  return (
    <main className="min-h-screen bg-background font-sans">
      <Header />

      {/* Hero Section */}
      <section className="bg-primary py-24 md:py-32 text-white">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <p className="text-accent font-medium text-sm uppercase tracking-widest mb-6">OUR SERVICES</p>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-normal mb-8 leading-tight text-balance">
            Tax Advisory and International Structuring
          </h1>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-[#F9F7F2]">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="font-serif text-3xl md:text-4xl text-primary mb-6">            Strategic tax planning, international structuring and cross-border compliance solutions for businesses and families.</h2>
          <p className="text-base md:text-lg leading-relaxed text-primary/80 max-w-4xl font-sans">
            With global mobility on the rise and more high‑net‑worth families transitioning into the GCC, demand for technically strong and commercial cross‑border tax advice has grown significantly. Our dedicated tax team provides expert cross-border structuring and residency planning for international clients entering or expanding within the UAE and Saudi Arabia. Our advice is pragmatic and aligned with long‑term family and business objectives.
            With a highly experienced team consisting of ex-Big Four tax advisers, we specialise in providing practical and commercially driven tax advice across all areas of UK, UAE and KSA tax to help you navigate the evolving tax landscape and cross-border compliance obligations.
            We carry out a thorough analysis of your personal and corporate tax positions, providing practical tax structuring advice which supports your long-term personal and business objectives.
            With a large number of Middle Eastern clients with assets in the UK subject to significant Inheritance Tax liabilities, we extensively advise on implementing tax efficient structures to help mitigate long term IHT exposures. We also work with our tax insurance partners to implement policies to protect against such exposures. 

          </p>

          {/* Core Offerings with reduced top margin */}
          <h3 className="font-serif text-2xl md:text-3xl text-primary mt-12 mb-8">Core Offerings</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
      {/* </CHANGE> */}

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-secondary">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-serif text-3xl md:text-4xl text-primary mb-6">Ready to Get Started?</h2>
          <p className="text-base md:text-lg text-primary/70 mb-8 leading-relaxed font-sans">
            Contact our team to discuss your tax advisory and structuring needs
          </p>
          <Link href="/contact">
            <Button className="bg-accent hover:bg-accent/90 text-white font-medium px-8 py-6 text-base font-sans">
              Contact Us Today
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  )
}
