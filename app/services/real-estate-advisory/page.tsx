import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Building, Globe, Calculator, Landmark, FolderKanban, Layers } from "lucide-react"

export default function RealEstateAdvisoryPage() {
  const offerings = [
    { icon: Building, title: "UAE and KSA real estate acquisitions and structuring" },
    { icon: Globe, title: "International real estate transaction support for GCC investors" },
    { icon: Calculator, title: "Property tax planning and advisory" },
    { icon: Landmark, title: "Real estate financing via our mortgage broker partnerships" },
    { icon: FolderKanban, title: "Portfolio management and compliance" },
    { icon: Layers, title: "SPV and cross-border group structuring implementation" },
  ]

  return (
    <main className="min-h-screen bg-background font-sans">
      <Header />

      {/* Hero Section */}
      <section className="bg-primary py-24 md:py-32 text-white">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <p className="text-accent font-medium text-sm uppercase tracking-widest mb-6">OUR SERVICES</p>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-normal mb-8 leading-tight text-balance">
            Real Estate Advisory
          </h1>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-[#F9F7F2]">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="font-serif text-3xl md:text-4xl text-primary mb-6">About This Service</h2>
          <p className="text-base md:text-lg leading-relaxed text-primary/80 max-w-4xl font-sans">
            Expert guidance on real estate transactions across the GCC and Europe. We advise investors, families and
            institutions on real estate transactions, providing end-to-end support from deal sourcing through to
            completion, ensuring structures are optimized for tax efficiency and aligned with long-term commercial
            objectives.
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
            Contact our team to discuss your real estate advisory requirements
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
