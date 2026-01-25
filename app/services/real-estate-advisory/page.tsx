import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Building, Globe, Calculator, Landmark, FolderKanban, Layers } from "lucide-react"

export default function RealEstateAdvisoryPage() {
  const offerings = [
    { icon: Building, title: "UAE and KSA real estate acquisitions and structuring" },
    { icon: Globe, title: "International real estate transaction support for Middle Eastern investors" },
    { icon: Calculator, title: "Property tax planning and advisory" },
    { icon: Landmark, title: "Real estate financing via our mortgage broker partnerships" },
    { icon: FolderKanban, title: "Portfolio management and compliance" },
    { icon: Layers, title: "SPV and cross-border group structuring implementation" },
  ]

  return (
    <main className="min-h-screen bg-background font-sans">
      <Header />

      {/* Hero Section */}
      <section className="relative bg-primary py-24 md:py-32 text-white overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/hero-real-estate.jpg"
            alt="Luxury real estate"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative max-w-5xl mx-auto px-6 text-center">
          <p className="text-accent font-medium text-sm uppercase tracking-widest mb-6">OUR SERVICES</p>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-normal mb-8 leading-tight text-balance">
            Real Estate Advisory
          </h1>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-16 md:py-20 bg-[#F9F7F2]">
        {/* Updated Container to max-w-4xl and exact responsive padding */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">

          <h2 className="font-serif text-3xl md:text-4xl text-primary mb-6 text-justify">
            Expert guidance on real estate transactions across the UAE, KSA and Europe.
          </h2>

          {/* Text Block: Justified, spaced, and split into paragraphs */}
          <div className="space-y-6 text-justify font-sans text-base md:text-lg leading-relaxed text-primary/80">
            <p>
              We advise investors, families and developers on international real estate acquisitions,
              structuring and compliance with a focus on residential and commercial real estate
              investments across the GCC (predominantly UAE and KSA) and European markets.
            </p>

            <p>
              Whether clients are expanding into the UAE and KSA real estate markets or Middle Eastern
              investors diversifying into prime UK property, we source, evaluate and support transactions
              across key global markets.
            </p>

            <p>
              We advise on prime real estate across Dubai, Abu Dhabi, Ras Al-Khaimah and Saudi Arabia
              and also work closely with Middle Eastern clients with investments advising them on
              growing their portfolios internationally.
            </p>

            <p>
              In conjunction with our tax advisory and compliance teams, we also ensure that your real
              estate strategies are commercially robust, tax efficient and aligned with long-term
              commercial objectives.
            </p>
          </div>

          {/* Core Offerings */}
          <h3 className="font-serif text-2xl md:text-3xl text-primary mt-12 mb-8">Core Offerings</h3>

          {/* Grid adjusted to 2 columns to fit the max-w-4xl container */}
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
      <section className="py-16 md:py-20 bg-secondary">
        {/* Updated padding for consistency */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 text-center">
          <p className="text-base md:text-lg text-primary/70 mb-8 leading-relaxed font-sans">
            Contact our team to discuss your real estate advisory requirements
          </p>
          <Link href="/contact">
            <Button className="bg-accent hover:bg-white hover:text-black text-white font-medium px-8 py-6 text-base font-sans transition-colors duration-300">
              Contact Us Today
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  )
}