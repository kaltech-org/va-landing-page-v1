import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Users, Shield, ArrowRightLeft, Building2, FileText, Calculator } from "lucide-react"

export default function FamilyGovernancePage() {
  const offerings = [
    { icon: Users, title: "Family governance and constitutional frameworks" },
    { icon: Shield, title: "Wealth structuring and asset protection strategies" },
    { icon: ArrowRightLeft, title: "Succession planning and generational wealth transfer" },
    { icon: Building2, title: "Trusts and foundation structuring" },
    { icon: FileText, title: "Sharia and non-Sharia wills" },
    { icon: Calculator, title: "Tax planning strategies" },
  ]

  return (
    <main className="min-h-screen bg-background font-sans">
      <Header />

      {/* Hero Section */}
      <section className="relative bg-primary py-24 md:py-32 text-white overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/hero-family-governance.jpg"
            alt="Family office interior"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative max-w-5xl mx-auto px-6 text-center">
          <p className="text-accent font-medium text-sm uppercase tracking-widest mb-6">OUR SPECIALIST SERVICES</p>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-normal mb-8 leading-tight text-balance">
            Family Governance and Succession Planning
          </h1>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-16 md:py-20 bg-[#F9F7F2]">
        {/* Updated Container to max-w-4xl and exact responsive padding */}
        <div className="max-w-5xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">

          <h2 className="font-serif text-3xl md:text-4xl text-primary mb-6">
            Bespoke wealth preservation strategies, asset protection solutions and cross-border estate planning
          </h2>

          {/* Text Block: Justified, spaced, and split into paragraphs */}
          <div className="space-y-6 text-justify font-sans text-base md:text-lg leading-relaxed text-primary/80">
            <p>
              We are trusted advisers to Middle Eastern and international families, supporting them
              with complex cross‑border structuring, family governance, wealth preservation and
              succession planning. Our expertise spans tax‑efficient ownership structures, asset
              protection strategies and multi‑jurisdictional estate planning.

              We can advise our clients on tax efficient cross-border structures and work in
              collaboration with our lawyers to navigate through the complex rules of inheritance
              and succession, ensuring efficient succession planning to intended beneficiaries,
              including trusts and foundation structures.
            </p>

            <p>
              We support clients with trust planning, UAE foundations and work with our partners
              across multiple jurisdictions to advise clients on robust family governance frameworks
              and structures. We work closely with our clients to ensure our advice is tax efficient
              and in line with our clients’ commercial objectives and long-term strategies. Our
              experienced team can also advise on appropriate ownership structures, to ensure the
              smooth management of multiple asset portfolios.
            </p>

            <p>
              We also provide ongoing compliance support to families as part of our accounting and
              tax compliance services.
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



      <Footer />
    </main>
  )
}