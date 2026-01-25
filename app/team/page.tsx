"use client"

import { useState, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

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
    bio: `Zeeshan is a UK qualified Big-Four trained accountant and tax adviser, having spent the majority of his career with Big Four and Top 10 firms including PwC, EY and Azets.

He specialises in advising high-net-worth individuals, international families and corporates on cross-border structuring, real estate advisory and succession planning. He also has extensive M&A experience, advising on international tax structuring of cross-border transactions including private equity deals.

Zeeshan is the author of Bloomsbury’s Property Tax Planning and co-author of Bloomsbury’s Taxation of Intellectual Property publications.

His clients are predominantly internationally mobile families with complex cross-border structures, supported by a strong professional network across Europe, GCC and Asia.`,
  },
  {
    name: "Susie Moore",
    title: "Senior Tax Advisory Specialist",
    image: "/Susie.jpg",
    bio: `Susie is a Chartered Accountant, Chartered Tax Advisor and legally trained international tax specialist with over 20 years of experience in cross-border tax structuring and advisory.

With deep UK and Middle East experience, Susie specialises in UK–UAE taxation, relocation planning and international structuring for multinational groups, business owners and family offices.

She has held senior positions at PwC, BDO and CGI in Dubai, advising on transfer pricing, intellectual property structuring, foundations and corporate residency across the UK, UAE, Europe, US and GCC markets.`,
  },
  {
    name: "Dan Crumplin",
    title: "Head of Corporate Services",
    image: "/team-daniel-crumplin.jpg",
    bio: `Dan has over a decade of experience across the UAE and Saudi Arabia, advising organisations from innovative start-ups to Fortune 500 companies.

He specialises in market entry consultancy, corporate structuring and cross-border asset planning, helping businesses establish and scale efficiently across the Middle East.

Dan has also served as a professional director for numerous international client entities, providing governance oversight, risk management and strategic direction.`,
  },

]

export default function TeamPage() {
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null)
  const bioRef = useRef<HTMLDivElement | null>(null)

  const handleViewProfile = (member: TeamMember) => {
    setSelectedMember(member)
    setTimeout(() => {
      bioRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    }, 120)
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <section className="relative bg-primary py-28 lg:py-40 overflow-hidden">
        <Image
          src="/hero-team-office.jpg"
          alt="Leadership team"
          fill
          priority
          className="object-cover opacity-20"
        />
        <div className="relative max-w-7xl mx-auto px-6 text-center">
          <h1 className="font-serif text-5xl md:text-6xl text-white">
            Our Leadership Team
          </h1>
        </div>
      </section>

      {/* Team Grid */}
      <section
        className={`py-20 bg-[#F9F7F2] transition-opacity duration-300 ${selectedMember ? "opacity-40" : "opacity-100"
          }`}
      >
        {/* CHANGED: max-w-6xl to max-w-4xl to make cards smaller */}
        <div className="max-w-4xl mx-auto px-6">
          {/* CHANGED: gap-10 to gap-6 for tighter spacing */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition flex flex-col"
              >
                {/* Image Aspect Ratio */}
                <div className="relative aspect-[3/3]">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover grayscale hover:grayscale-0 transition"
                  />
                </div>

                <div className="p-6 flex flex-col flex-1 justify-between">
                  <div>
                    <h3 className="font-serif text-xl text-[#0F172A]">
                      {member.name}
                    </h3>
                    <p className="text-xs uppercase tracking-widest text-[#B4924F] font-semibold mt-1">
                      {member.title}
                    </p>
                  </div>

                  <button
                    onClick={() => handleViewProfile(member)}
                    className="mt-6 bg-accent text-accent-foreground text-sm px-4 py-2 rounded hover:bg-accent/90 self-start"
                  >
                    View Profile
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Focused Bio Section */}
      {selectedMember && (
        <section
          ref={bioRef}
          className="relative py-24 bg-white border-t-4 border-accent scroll-mt-24"
        >
          <div className="max-w-6xl mx-auto px-6">
            <div className="relative grid grid-cols-1 md:grid-cols-3 gap-12 items-start">

              {/* Close */}
              <button
                onClick={() => setSelectedMember(null)}
                className="absolute right-0 -top-14 text-sm text-gray-500 hover:text-primary"
              >
                ✕ Close Profile
              </button>

              {/* Image */}
              <div className="flex justify-center">
                <div className="relative w-52 h-52 rounded-full overflow-hidden shadow-xl ring-4 ring-white">
                  <Image
                    src={selectedMember.image}
                    alt={selectedMember.name}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Bio */}
              <div className="md:col-span-2">
                <h3 className="font-serif text-4xl text-[#0F172A] mb-2">
                  {selectedMember.name}
                </h3>

                <p className="uppercase tracking-widest text-sm text-[#B4924F] font-semibold mb-8">
                  {selectedMember.title}
                </p>

                <div className="prose prose-slate max-w-none text-justify leading-relaxed">
                  {selectedMember.bio.split("\n").map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-20 bg-secondary text-center">
        <h2 className="font-serif text-4xl text-primary mb-6">
          Work With Our Team
        </h2>
        <Link
          href="/contact"
          className="inline-block bg-accent text-accent-foreground px-8 py-3 text-sm font-medium  bg-accent hover:bg-white hover:text-black  text-white"
        >
          Contact us
        </Link>
      </section>

      <Footer />
    </div>
  )
}