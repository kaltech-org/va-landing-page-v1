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
      <section className="bg-primary py-24 md:py-32 text-white">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <p className="text-accent font-medium text-sm uppercase tracking-widest mb-6">OUR SERVICES</p>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-normal mb-8 leading-tight text-balance">
            Family Governance and Succession Planning
          </h1>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-[#F9F7F2]">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="font-serif text-3xl md:text-4xl text-primary mb-6">About This Service</h2>
          <p className="text-base md:text-lg leading-relaxed text-primary/80 max-w-4xl font-sans">
            Bespoke wealth preservation strategies, asset protection solutions and cross-border estate planning. We are
            trusted advisers to GCC families on governance, wealth structuring and succession planning. Our team works
            closely with families to develop bespoke strategies that preserve wealth across generations while ensuring
            compliance with local and international regulations.
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
            Contact our team to discuss your family governance and succession planning needs
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
