import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  Building2,
  Globe,
  Users,
  FileCheck,
  Briefcase,
  Home,
  Scale,
  Landmark,
  Sparkles,
} from "lucide-react";

export default function UaeKsaRelocationPage() {
  const offerings = [
    { icon: Building2, title: "Free Zone and mainland company formations" },
    { icon: Globe, title: "Tax efficient cross-border structuring" },
    {
      icon: Users,
      title:
        "UAE residency visas and advisory services for families and entrepreneurs",
    },
    {
      icon: FileCheck,
      title: "Saudi Arabia residency programs including Iqama services",
    },
    {
      icon: Briefcase,
      title: "Corporate structuring, licensing and regulatory approvals",
    },
    {
      icon: Home,
      title: "Family relocation, PRO services and government relations support",
    },
    { icon: Scale, title: "Constitutional support and business governance" },
    { icon: Landmark, title: "Corporate and personal banking" },
    { icon: Sparkles, title: "Concierge service" },
  ];

  return (
    <main className="min-h-screen bg-background font-sans">
      <Header />

      {/* Hero Section */}
      <section className="relative bg-primary py-24 md:py-32 text-white overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/hero-relocation-dubai.jpg"
            alt="Dubai skyline"
            className="w-full h-full object-cover opacity-20"
            loading="lazy"
          />
        </div>
        <div className="relative max-w-5xl mx-auto px-8 text-center">
          {/* <p className="text-accent font-medium text-sm uppercase tracking-widest mb-6">OUR SPECIALIST SERVICES</p> */}
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-normal mb-8 leading-tight text-balance">
            UAE and Saudi Arabia Relocation and Corporate Services h
          </h1>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-[#F9F7F2]">
        <div className="relative max-w-5xl mx-auto px-8 text-center">
          <h2 className="font-serif text-3xl md:text-4xl text-primary mb-6 leading-tight text-balance">
            Comprehensive relocation support and corporate formation services
            for UAE and Saudi Arabia inbound families and entrepreneurs{" "}
          </h2>
        </div>
        {/* Changed max-w-6xl to max-w-4xl and updated px to match the previous section */}
        <div className="max-w-5xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
          <div className="space-y-6 text-justify font-sans text-base md:text-lg leading-relaxed text-primary/80">
            <p>
              We deliver an integrated suite of relocation, corporate set up and
              regulatory support services for families, founders, investors and
              businesses establishing a footprint across the GCC, particularly
              in the UAE and Saudi Arabia. Our model combines tailored and
              bespoke advisory with precise execution, ensuring clients enter
              the region with clarity and confidence, whilst ensuring their
              compliance and regulatory obligations are met.
            </p>

            <p>
              Whether you are a business owner expanding your business to the
              GCC, a high-net-worth investor or a family relocating to the
              region, when relocating or expanding to a new jurisdiction, it is
              critical that business owners and families seek advice from local
              experts. With strong contacts at government level and extensive
              knowledge of the local market, we provide hands-on support
              throughout the process, ensuring an efficient and hassle-free move
              for your family and business.
            </p>

            <p>
              We provide ongoing support to you and your business post set up,
              acting as your dedicated advisers, providing proactive tax
              compliance and advisory services to your business, including
              implementing and managing robust corporate governance frameworks.
            </p>
          </div>

          {/* Core Offerings */}
          <h3 className="font-serif text-2xl md:text-3xl text-primary mt-12 mb-8">
            Core Offerings
          </h3>

          {/* Adjusted grid for the narrower container (2 columns looks better than 3 at this width) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {offerings.map((offering, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <offering.icon
                      className="w-6 h-6 text-accent"
                      strokeWidth={1.5}
                    />
                  </div>
                  <p className="text-primary font-medium leading-relaxed font-sans">
                    {offering.title}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* </CHANGE> */}

      {/* CTA Section */}

      <Footer />
    </main>
  );
}
