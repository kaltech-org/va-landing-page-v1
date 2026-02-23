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
    image: "/Zeeshan1.jpg",
    bio: `Zeeshan is an ex-Big-Four tax and real estate adviser, having spent majority of his career working for Big Four and Top 10 firms, including PricewaterhouseCoopers, Ernst & Young and Azets.

He specialises in advising high & ultra-high-net-worth private clients, international families and corporates on cross-border tax, real estate and private wealth structuring matters. He also has a strong background in M&A, having advised on tax structuring of cross-border and real estate transactions including private equity deals.

Zeeshan is also the author of Bloomsbury’s Property Planning and co-author of Taxation of Intellectual Property publications.He completed the ACCA and Chartered Tax Adviser (CTA) qualifications in 2012 and 2015 respectively.

Zeeshan’s clients predominantly consist of internationally mobile families with cross-border structures. He has an extensive network of professional advisers across Europe, GCC and Asia who he regularly collaborates with on international advisory and structuring matters.`,
  },
  {
    name: "Susie Moore",
    title: "Head of Tax Advisory",
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
Over the past decade, Dan has served as a professional director for a wide range of client entities. In this role, he brings governance expertise, risk oversight and strategic input to ensure compliance, operational resilience and long-term value creation for international clients.`,
  },
  {
    name: "Alex Evagora",
    title: "Head of Real Estate",
    image: "/alex_evagora.png",
    bio: `Alex is a GCC and UK real estate specialist with a decade-long career in real estate at prominent companies in the UK and UAE, including CBRE and DDRE Global.
    Originally from the UK, Alex previously worked in prime central London before moving to Dubai. As a real estate specialist, Alex is a well-rounded and knowledgeable advisor, having gained a large following with his client focused and relationship driven work style.
    Alex is fluent in English and Greek. His invaluable experience and record-breaking career make him a go to real estate adviser for investors interested in real estate sales and acquisitions predominantly across Dubai, Abu Dhabi and prime central London.
    `,
  },
{
    name: "Rob Baines",
    title: "Head of Outsourced CFO Services",
    image: "/dummy_profile.png",
    bio: `Rob is a Fellow Chartered Certified Accountant with 25+ years of blue-chip and private equity experience across the UK and UAE, including a decade in executive leadership. He has a proven track record in complex M&A execution, offering expertise across the entire business lifecycle from long-term scaling to exit planning.
    Now based in the UAE, Rob advises boards and entrepreneurs on cross-border strategies, UAE corporate tax advisory and integration of ESG reporting frameworks. He leverages AI-driven financial systems to deliver lean, world-class operations and robust internal controls that drive long-term investor value.
    `,
  },
  {
    name: "Imran Noon",
    title: "Senior Strategic Adviser and Non-Executive Board Member",
    image: "/imran_noon.jpg",
    bio: `Imran is an experienced banker and has held senior leadership roles across leading international banks, including ABN AMRO, Credit Suisse, and ING Bank. With over 30 years of experience in global and regional banking, he brings deep expertise in private wealth with a strong network across the region's senior banking leadership.`,
  },
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
          loading="lazy"
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
        <div className="max-w-5xl mx-auto px-6">
          {/* CHANGED: gap-10 to gap-6 for tighter spacing */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
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
                    loading="lazy"
                  />
                </div>

                <div className="p-6 flex flex-col flex-1 justify-between">
                  <div>
                    <h3 className="font-serif text-xl text-[#0F172A]">
                      {member.name}
                    </h3>
                    <p className="text-xs  tracking-widest text-[#B4924F] font-semibold mt-1">
                      {member.title}
                    </p>
                  </div>

                  <button
                    onClick={() => handleViewProfile(member)}
                    className="mt-6 bg-accent text-accent-foreground text-sm px-4 py-2 rounded hover:bg-white  hover:text-black self-start cursor-pointer"
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
                    loading="lazy"
                  />
                </div>
              </div>

              {/* Bio */}
              <div className="md:col-span-2">
                <strong className="font-serif text-2xl text-[#0F172A]  underline-offset-4">
                  {selectedMember.name} – {selectedMember.title}
                </strong>

                <div className="prose prose-slate max-w-none text-justify leading-relaxed mt-6">
                  {selectedMember.bio.split("\n").map((p, i) => (
                    <p className="pt-2" key={i}>{p}</p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      {/* <section className="py-20 bg-secondary text-center">
        <h2 className="font-serif text-4xl text-primary mb-6">
          Work With Our Team
        </h2>
        Ready to discuss your advisory needs? Our leadership team is here to provide expert guidance tailored to your unique situation specific requirements.

      </section> */}

      <Footer />
    </div>
  );
}
