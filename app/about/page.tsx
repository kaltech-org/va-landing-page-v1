import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Image from "next/image"
import Link from "next/link"
import { Play } from "lucide-react"

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative bg-primary py-20 sm:py-24 md:py-28 lg:py-35 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/hero-about-executive-boardroom.jpg"
            alt="Executive boardroom"
            fill
            className="object-cover opacity-25"
            priority
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 text-center">
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-primary-foreground tracking-tight">
            About us
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-primary-foreground/80 max-w-3xl mx-auto leading-relaxed text-center">

          </p>

        </div>
      </section>

      {/* Section 1: Who We Are */}
      <section className="py-16 sm:py-20 md:py-24 lg:py-20 bg-background">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
          <div className="space-y-8 sm:space-y-10 md:space-y-12 text-justify">

            <p className="text-base sm:text-lg md:text-xl text-foreground/80 leading-relaxed">
              Middle East Advisory Group was established as a specialist advisory firm providing holistic
              solutions focused advisory services to UAE and KSA inbound UK and international
              high-net-worth private clients and Middle Eastern families.
            </p>

            <p className="text-base sm:text-lg md:text-xl text-foreground/80 leading-relaxed">
              With offices in the UK, Dubai, Abu Dhabi and Saudi Arabia, we partner with accountants,
              international wealth managers, private banks, family offices and law firms, to provide an
              independent partner led service to both private and corporate clients. Being based out of
              both UK and GCC allows us to serve our international clients from our multiple office
              locations.
            </p>

            <p className="text-base sm:text-lg md:text-xl text-foreground/80 leading-relaxed">
              Our specialist teams can support our clients throughout the business lifecycle, from
              corporate set ups to tax efficient exit planning. We have extensive experience with helping
              our clients enter the UAE and KSA markets, implementing tax efficient corporate structures
              and managing ongoing compliance.
            </p>

            <p className="text-base sm:text-lg md:text-xl text-foreground/80 leading-relaxed">
              We also work extensively with Middle Eastern and international families, advising them on
              tax efficient structuring of their international asset portfolios, succession planning and
              family governance.
            </p>

          </div>
        </div>
      </section>

      {/* Section 2: Founder's Message */}
      <section className="py-16 sm:py-20 md:py-24 lg:py-20 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-30">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 xl:gap-20 items-center">
            {/* CEO Image */}
            <div className="order-2 lg:order-1">
              <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 mx-auto lg:mx-0">
                <Image
                  src="/Zeeshan.jpg"
                  alt="Zeeshan Khilji - CEO"
                  fill
                  className="object-cover rounded-full"
                />
                {/* Gold accent ring */}
                <div className="absolute inset-0 rounded-full border-4 border-accent" />
              </div>
            </div>

            {/* CEO Text */}
            <div className="order-1 lg:order-2 space-y-6 sm:space-y-8 text-justify" >
              <div className="w-16 h-1 bg-accent" />

              <blockquote className="text-base sm:text-lg text-foreground/80 leading-relaxed italic border-l-2 border-accent pl-6">
                I established the Middle East Advisory Group with the objective of delivering Big Four level expertise and world-class proactive advisory services to both GCC inbound and outbound clients. With global mobility on the rise and more high‑net‑worth families and businesses expanding to the GCC in particular UAE and KSA, demand for technically strong and commercially focused cross-border advisory services has grown significantly. We are proud to be one of the leading advisers for UK and international GCC market entry clients and Middle Eastern families. 
              </blockquote>
              <div className="pt-4">
                <div className="w-32 h-px bg-accent mb-4" />
                <p className="font-serif text-lg sm:text-xl text-primary font-medium">Zeeshan Khilji</p>
                <p className="text-sm sm:text-base text-accent uppercase tracking-widest">CEO</p>
              </div>
            </div>
          </div>
          <div className="text-center mt-10 sm:mt-12">
            <Link
              href="/team"
              className="inline-flex items-center justify-center px-8 py-3  text-accent font-sans text-sm sm:text-base tracking-wider bg-accent text-white hover:text-black hover:bg-white transition-colors"
            >
              Learn More About Our People
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
