import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Receipt, FileSpreadsheet, UserCog, Calculator, BadgeCheck, Mail } from "lucide-react"

export default function AccountingCompliancePage() {
  const offerings = [
    { icon: Receipt, title: "Corporation Tax and VAT compliance" },
    { icon: FileSpreadsheet, title: "Management and statutory accounts" },
    { icon: UserCog, title: "Outsourced CFO services and building a finance function for your business" },
    { icon: Calculator, title: "Bookkeeping and payroll services" },
    { icon: BadgeCheck, title: "Tax residency certificates" },
    { icon: Mail, title: "FTA correspondence and applications" },
  ]

  return (
    <main className="min-h-screen bg-background font-sans">
      <Header />

      {/* Hero Section */}
      <section className="bg-primary py-24 md:py-32 text-white">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <p className="text-accent font-medium text-sm uppercase tracking-widest mb-6">OUR SERVICES</p>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-normal mb-8 leading-tight text-balance">
            UAE Accounting and Tax Compliance
          </h1>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-[#F9F7F2]">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="font-serif text-3xl md:text-4xl text-primary mb-6">About This Service</h2>
          <p className="text-base md:text-lg leading-relaxed text-primary/80 max-w-4xl font-sans">
            Comprehensive UAE accounting and tax compliance services. We provide fully integrated accounting and tax
            compliance services to businesses operating in the UAE. Our team handles everything from day-to-day
            bookkeeping through to corporate tax filings and regulatory correspondence, allowing you to focus on growing
            your business.
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
            Contact our team to discuss your accounting and compliance requirements
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
