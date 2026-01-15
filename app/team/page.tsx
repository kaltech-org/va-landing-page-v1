"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { X } from "lucide-react"

interface TeamMember {
  name: string
  title: string
  image: string
  bio: string
}

const teamMembers: TeamMember[] = [
  {
    name: "Zeeshan Khilji",
    title: "CEO",
    image: "/zeeshan-khilji-ceo.jpg",
    bio: `Zeeshan is a UK qualified Big-Four trained accountant and tax adviser, having spent majority of his career working for Big Four and Top 10 firms, including PricewaterhouseCoopers, Ernst & Young and Azets. 
    He specialises in advising high-net-worth private clients, international families and corporates on cross-border structuring, real estate advisory and succession planning. He also has a strong background in M&A, having advised on international tax structuring of cross-border transactions including private equity deals, during his time in the Big Four.
    Zeeshan is also the author of Bloomsbury’s Property Tax Planning publication.
    Zeeshan’s clients predominantly consist of internationally mobile families with cross-border structures. He has an extensive network of professional advisers across Europe, GCC and Asia who he regularly collaborates with on cross-border advisory matters.`,
  },
  {
    name: "Susie Moore",
    title: "Senior Tax Advisory Specialist",
    image: "/team-susie-moore.jpg",
    bio: `Susie is a Chartered Accountant, Chartered Tax Advisor and legally trained international tax specialist with over 20 years of experience in cross-border tax structuring, compliance and strategic advisory.
    With extensive experience in both the UK and the Middle East, Susie has developed deep regional expertise in UK–UAE taxation and a practical understanding of how international and domestic tax regimes interact. She specialises in helping business owners, multinational groups, high-net-worth individuals and family offices navigate the complexities of relocation, business expansion and corporate structuring between the UK, UAE and wider GCC region.
    Susie has held senior positions at leading global firms including PwC, BDO, and CGI in Dubai, where she advised on complex international tax planning, transfer pricing, intellectual property structuring, foundations and corporate residency across numerous jurisdictions including the UK, UAE, Europe, the US, and key GCC markets.
    Her expertise lies in designing and implementing tax-efficient, compliant and scalable structures that align with commercial objectives and support long-term growth, investment and exit strategies.`,
  },
  {
    name: "Dan Crumplin",
    title: "Head of Corporate Services",
    image: "/team-daniel-crumplin.jpg",
    bio: `Dan has over a decade of hands-on experience across the UAE and Saudi Arabia, partnering with organisations from innovative start-ups to established Fortune 500 companies to simplify and accelerate their commercial establishments in the Middle East. 
    Dan specialises in market entry consultancy, corporate structuring and cross-border asset planning. His advisory work spans guiding both companies and individuals on efficient asset holding structures, navigating complex financial transactions and accessing leading financial institutions and investment channels globally.
    Over the past decade, Dan has served as a professional director for a wide range of client entities. In this role, he brings governance expertise, risk oversight and strategic input to ensure compliance, operational resilience and long-term value creation for international clients.`,
  },
  {
    name: "Raju Baxi",
    title: "Head of Accounts and Tax Compliance",
    image: "/team-raju-baxi.jpg",
    bio: `Raju qualified as a Chartered Accountant in 1988. With extensive professional experience spanning more than three decades, he has undertaken accounts, compliance and statutory audits of listed and unlisted public sector entities, insurance companies, public sector and private sector banks, private limited companies, non-corporate entities and charitable trusts.  
    His technical expertise, leadership and commitment to professional excellence have earned him recognition across the financial and business community.`,
  },
]

export default function TeamPage() {
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null)

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="bg-[#F9F7F2] py-20 sm:py-15 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 text-center">
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl text-[#0F172A] mb-6">Our Leadership Team</h1>
          <p className="font-sans text-base sm:text-lg text-[#0F172A]/70 max-w-2xl mx-auto leading-relaxed">
            Independent partner-led service with Big Four expertise.
          </p>
        </div>
      </section>

      {/* Team Grid Section */}
      <section className="py-16 sm:py-20 md:py-15 bg-[#F9F7F2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
            {teamMembers.map((member, index) => (
              <button
                key={index}
                onClick={() => setSelectedMember(member)}
                className="group bg-white rounded-lg overflow-hidden text-left transition-all duration-300 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-[#B4924F] focus:ring-offset-2"
              >
                {/* Portrait Image - 3:4 aspect ratio */}
                <div className="relative aspect-[3/4] overflow-hidden">
                  <Image
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    fill
                    className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                  />
                </div>

                {/* Text Content */}
                <div className="p-5 sm:p-6">
                  <h3 className="font-serif text-xl sm:text-2xl text-[#0F172A] mb-1">{member.name}</h3>
                  <p className="font-sans text-xs sm:text-sm text-[#B4924F] font-medium tracking-wider uppercase">
                    {member.title}
                  </p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 bg-secondary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-8 text-center">
          <h2 className="font-serif text-3xl sm:text-4xl text-primary mb-6">Work With Our Team</h2>
          <p className="font-sans text-base text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            Ready to discuss your advisory needs? Our leadership team is here to provide expert guidance tailored to
            your unique situation.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-accent hover:bg-accent/90 text-accent-foreground font-medium tracking-wide text-sm px-8 py-3 transition"
          >
            Contact Us
          </Link>
        </div>
      </section>

      <Footer />

      {/* Bio Modal - 80% WIDTH & FULL CONTENT */}
      {/* Bio Modal - CIRCLE IMAGE & REDUCED HEIGHT */}
      {selectedMember && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
          onClick={() => setSelectedMember(null)}
        >
          <div
            className="relative bg-white w-[90%] md:w-[80%] max-w-6xl h-[75vh] sm:h-[500px] rounded-xl shadow-2xl flex flex-col sm:flex-row overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedMember(null)}
              className="absolute top-4 right-4 z-20 w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 hover:bg-[#0F172A] text-[#0F172A] hover:text-white transition-colors shadow-sm"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Left Side: Circular Profile Image with Cream Background */}
            <div className="w-full sm:w-1/3 bg-[#F9F7F2] flex items-center justify-center p-6 sm:p-0 flex-shrink-0 border-b sm:border-b-0 sm:border-r border-gray-100">
              <div className="relative w-32 h-32 sm:w-48 sm:h-48 rounded-full overflow-hidden border-4 border-white shadow-lg">
                <Image
                  src={selectedMember.image || "/placeholder.svg"}
                  alt={selectedMember.name}
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Right Side: Text (Scrollable) */}
            <div className="flex-1 overflow-y-auto p-8 sm:p-10 bg-white">
              <div className="max-w-3xl">
                <h3 className="font-serif text-3xl sm:text-4xl text-[#0F172A] mb-2">
                  {selectedMember.name}
                </h3>
                <p className="font-sans text-sm sm:text-base text-[#B4924F] font-bold tracking-widest uppercase mb-6">
                  {selectedMember.title}
                </p>

                <div className="prose prose-slate text-[#0F172A]/80 leading-relaxed font-sans text-justify text-sm sm:text-base">
                  {selectedMember.bio.split("\n").map((paragraph, i) => (
                    <p key={i} className="mb-4 last:mb-0 min-h-[1em]">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}