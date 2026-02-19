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
      <section className="relative bg-primary py-24 md:py-32 text-white overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/hero-accounting.jpg"
            alt="Accounting workspace"
            className="w-full h-full object-cover opacity-20"
            loading="lazy"
          />
        </div>
        <div className="relative max-w-5xl mx-auto px-6 text-center">
          {/* <p className="text-accent font-medium text-sm uppercase tracking-widest mb-6">OUR SPECIALIST SERVICES</p> */}
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-normal mb-8 leading-tight text-balance">
UAE Accounting and Outsourced CFO Services
          </h1>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-16 md:py-20 bg-[#F9F7F2]">
        {/* Updated Container to max-w-4xl and exact responsive padding */}
        <div className="max-w-5xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">

          <h2 className="font-serif text-3xl md:text-4xl text-primary mb-6 ">
            Comprehensive UAE accounting and tax compliance services
          </h2>

          {/* Text Block: Justified, spaced, and split into paragraphs */}
          <div className="space-y-6 text-justify font-sans text-base md:text-lg leading-relaxed text-primary/80">
            <p>
              We provide fully integrated accounting, financial reporting and tax compliance services
              to businesses operating in the UAE. Our team delivers proactive, accurate and commercially
              focused support, enabling clients to meet regulatory obligations while maintaining strong
              financial governance.
            </p>

            <p>
              With a dedicated team of experienced accountants and tax compliance specialists with
              expertise across a range of industries, we provide proactive compliance support throughout
              the year, so you can focus on growing your business.
            </p>

             <p>
             We also provide outsourced CFO services to businesses, providing strategic support across every stage of the business lifecycle and advising businesses on building in-house finance functions.
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


      <Footer />
    </main>
  )
}