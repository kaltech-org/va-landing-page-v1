import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Building2, Globe, Users, FileCheck, Briefcase, Home, Scale, Landmark, Sparkles } from "lucide-react"

export default function UaeKsaRelocationPage() {
  const offerings = [
    { icon: Building2, title: "Free Zone and mainland company formations" },
    { icon: Globe, title: "Tax efficient cross-border structuring" },
    { icon: Users, title: "UAE residency visas and advisory services for families and entrepreneurs" },
    { icon: FileCheck, title: "KSA residency programs including Iqama services" },
    { icon: Briefcase, title: "Corporate structuring, licensing and regulatory approvals" },
    { icon: Home, title: "Family relocation, PRO services and government relations support" },
    { icon: Scale, title: "Constitutional support and business governance" },
    { icon: Landmark, title: "Corporate and personal banking" },
    { icon: Sparkles, title: "Concierge service" },
  ]

  return (
    <main className="min-h-screen bg-background font-sans">
      <Header />

      {/* Hero Section */}
      <section className="bg-primary py-24 md:py-32 text-white">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <p className="text-accent font-medium text-sm uppercase tracking-widest mb-6">OUR SERVICES</p>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-normal mb-8 leading-tight text-balance">
            UAE and KSA Relocation and Corporate Services
          </h1>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-[#F9F7F2]">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="font-serif text-3xl md:text-4xl text-primary mb-6">            Comprehensive relocation support and corporate formation services for GCC inbound families and entrepreneurs.</h2>
          <p className="text-base md:text-lg leading-relaxed text-primary/80 max-w-4xl font-sans">


            We deliver an integrated suite of relocation, corporate set up and regulatory support services for families, founders, investors and businesses establishing a footprint across the GCC, particularly in the UAE and Saudi Arabia. Our model combines tailored and bespoke advisory with precise execution, ensuring clients enter the region with clarity and confidence, whilst ensuring their compliance and regulatory obligations are met.
            Whether you are a business owner expanding your business to the GCC, a high-net-worth investor or a family relocating to the region, when relocating or expanding to a new jurisdiction, it is critical that business owners and families seek advice from local experts. With strong contacts at government level and extensive knowledge of the local market, we provide hands-on support throughout the process, ensuring an efficient and hassle-free move for your family and business.
            We provide ongoing support to you and your business post set up, acting as your dedicated advisers, providing proactive tax compliance and advisory services to your business, including implementing and managing robust corporate governance frameworks. 
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
            Contact our team to discuss your relocation and corporate services requirements
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
