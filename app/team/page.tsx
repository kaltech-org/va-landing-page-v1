"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

interface TeamMember {
  name: string;
  title: string;
  image: string;
  bio: string;
}

const teamMembers: TeamMember[] = [
  {
    name: "Zeeshan Khilji",
    title: "CEO",
    image: "/Zeeshan.jpg",
    bio: `Zeeshan is a UK qualified Big-Four trained accountant and tax adviser, having spent majority of his career working for Big Four and Top 10 firms, including PricewaterhouseCoopers, Ernst & Young and Azets. 

He specialises in advising high-net-worth private clients, international families and corporates on cross-border structuring, real estate advisory and succession planning. He also has a strong background in M&A, having advised on international tax structuring of cross-border transactions including private equity deals, during his time in the Big Four.

Zeeshan is also the author of Bloomsbury’s Property Tax Planning and co-author of Bloomsbury’s Taxation of Intellectual Property publications.

Zeeshan’s clients predominantly consist of internationally mobile families with cross-border structures. He has an extensive network of professional advisers across Europe, GCC and Asia who he regularly collaborates with on cross-border advisory matters. 
`,
  },
  {
    name: "Susie Moore",
    title: "Senior Tax Advisory Specialist",
    image: "/Susie.jpg",
    bio: `Susie is a Chartered Accountant, Chartered Tax Advisor and legally trained international tax specialist with over 20 years of experience in cross-border tax structuring, compliance and strategic advisory.

With extensive experience in both the UK and the Middle East, Susie has developed deep regional expertise in UK–UAE taxation and a practical understanding of how international and domestic tax regimes interact. She specialises in helping business owners, multinational groups, high-net-worth individuals and family offices navigate the complexities of relocation, business expansion and corporate structuring between the UK, UAE and wider GCC region.

Susie has held senior positions at leading global firms including PwC, BDO, and CGI in Dubai, where she advised on complex international tax planning, transfer pricing, intellectual property structuring, foundations and corporate residency across numerous jurisdictions including the UK, UAE, Europe, the US, and key GCC markets.
Her expertise lies in designing and implementing tax-efficient, compliant and scalable structures that align with commercial objectives and support long-term growth, investment and exit strategies.
`,
  },
  {
    name: "Dan Crumplin",
    title: "Head of Corporate Services",
    image: "/Dan.jpg",
    bio: `Dan has over a decade of hands-on experience across the UAE and Saudi Arabia, partnering with organisations from innovative start-ups to established Fortune 500 companies to simplify and accelerate their commercial establishments in the Middle East.

Dan specialises in market entry consultancy, corporate structuring and cross-border asset planning. His advisory work spans guiding both companies and individuals on efficient asset holding structures, navigating complex financial transactions and accessing leading financial institutions and investment channels globally.
Over the past decade, Dan has served as a professional director for a wide range of client entities. In this role, he bring governance expertise, risk oversight and strategic input to ensure compliance, operational resilience and long-term value creation for international clients.`  },
];

export default function TeamPage() {
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);
  const bioRef = useRef<HTMLDivElement | null>(null);

  const handleViewProfile = (member: TeamMember) => {
    setSelectedMember(member);
    setTimeout(() => {
      bioRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 120);
  };

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
        className={`py-20 bg-[#F9F7F2] transition-opacity duration-300 ${
          selectedMember ? "opacity-40" : "opacity-100"
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
                <div className="relative aspect-[3/3] overflow-hidden group">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="
      object-cover
      transition-all duration-500 ease-in-out
      group-hover:grayscale-0
      group-hover:scale-105
    "
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
                    className="mt-6 bg-accent text-accent-foreground text-sm px-4 py-2 rounded hover:bg-white  hover:text-black self-start"
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
        Ready to discuss your advisory needs? Our leadership team is here to provide expert guidance tailored to your unique situation specific requirements.

      </section>

      <Footer />
    </div>
  );
}
