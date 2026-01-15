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
      <section className="bg-primary py-20 sm:py-24 md:py-28 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-primary-foreground tracking-tight">
            About Us
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-primary-foreground/80 max-w-3xl leading-relaxed">
            Specialist advisory providing holistic solutions for GCC inbound UK and international high-net-worth private
            clients.
          </p>
        </div>
      </section>

      {/* Section 1: Who We Are */}
      <section className="py-16 sm:py-20 md:py-24 lg:py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
          <div className="space-y-8 sm:space-y-10 md:space-y-12">
            <div>
              <div className="w-16 h-1 bg-accent mb-6" />
              <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl text-primary tracking-tight mb-8">
                Who We Are
              </h2>
            </div>

            <p className="text-base sm:text-lg md:text-xl text-foreground/80 leading-relaxed">
              Middle East Advisory Group was established as a specialist advisory firm providing holistic solutions
              focused advisory services to GCC inbound UK and international high-net-worth private clients, Middle
              Eastern families and GCC based businesses. With offices in the UK, Dubai, Abu Dhabi and Saudi Arabia, we
              partner with accountants, international wealth managers, private banks, family offices and law firms, to
              provide an independent partner led service to both private and corporate clients. Being based out of both
              UK and GCC allows us to serve our international clients from our multiple office locations.
            </p>

            <p className="text-base sm:text-lg md:text-xl text-foreground/80 leading-relaxed">
              Our specialist teams can support our clients throughout the business lifecycle, from corporate set ups to
              tax efficient exit planning. We have extensive experience with helping our clients enter the GCC market,
              implementing tax efficient corporate structures and managing ongoing compliance. We also work extensively
              with Middle Eastern and international families, advising them on tax efficient structuring of their
              international asset portfolios, succession planning and family governance.
            </p>
          </div>
        </div>
      </section>

      {/* Section 2: Founder's Message */}
      <section className="py-16 sm:py-20 md:py-24 lg:py-20 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 xl:gap-20 items-center">
            {/* CEO Image */}
            <div className="order-2 lg:order-1">
              <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 mx-auto lg:mx-0">
                <Image
                  src="/zeeshan-khilji-ceo.jpg"
                  alt="Zeeshan Khilji - CEO"
                  fill
                  className="object-cover rounded-full"
                />
                {/* Gold accent ring */}
                <div className="absolute inset-0 rounded-full border-4 border-accent" />
              </div>
            </div>

            {/* CEO Text */}
            <div className="order-1 lg:order-2 space-y-6 sm:space-y-8">
              <div className="w-16 h-1 bg-accent" />

              <blockquote className="text-base sm:text-lg text-foreground/80 leading-relaxed italic border-l-2 border-accent pl-6">
                I established Middle East Advisory Group with the objective of delivering Big Four level expertise and
                world-class proactive advisory services to both GCC inbound and outbound clients. With global mobility
                on the rise and more high-net-worth families and businesses expanding to the GCC, demand for technically
                strong and commercially focused cross-border advisory services has grown significantly. Our vision is to
                become the go to advisers for UK and international GCC market entry clients and Middle Eastern families.
              </blockquote>
              <div className="pt-4">
                <div className="w-32 h-px bg-accent mb-4" />
                <p className="font-serif text-lg sm:text-xl text-primary font-medium">Zeeshan Khilji</p>
                <p className="text-sm sm:text-base text-accent uppercase tracking-widest">CEO</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Video Placeholder */}
      <section className="py-16 sm:py-20 md:py-24 lg:py-20 bg-background">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
          <div className="text-center mb-10 sm:mb-12">
            <div className="w-16 h-1 bg-accent mx-auto mb-6" />
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl text-primary tracking-tight">
              Meet Our Leadership
            </h2>
          </div>

          {/* Video Placeholder */}
          <div className="relative aspect-video bg-primary/5 border border-border overflow-hidden group cursor-pointer">
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-accent/10 border-2 border-accent flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                <Play className="w-8 h-8 sm:w-10 sm:h-10 text-accent ml-1" />
              </div>
              <p className="mt-6 text-sm sm:text-base text-foreground/60 font-sans">Video Coming Soon</p>
            </div>
            {/* Decorative corners */}
            <div className="absolute top-4 left-4 w-8 h-8 border-l-2 border-t-2 border-accent/30" />
            <div className="absolute top-4 right-4 w-8 h-8 border-r-2 border-t-2 border-accent/30" />
            <div className="absolute bottom-4 left-4 w-8 h-8 border-l-2 border-b-2 border-accent/30" />
            <div className="absolute bottom-4 right-4 w-8 h-8 border-r-2 border-b-2 border-accent/30" />
          </div>

          {/* Caption */}
          <p className="text-center text-base sm:text-lg text-foreground/70 mt-6 sm:mt-8 italic">
            Meet the Team: Insights from Zeeshan Khilji, Dan Crumplin, and Susie Moore.
          </p>

          {/* CTA Button */}
          <div className="text-center mt-10 sm:mt-12">
            <Link
              href="/team"
              className="inline-flex items-center justify-center px-8 py-3 border-2 border-accent text-accent font-sans text-sm sm:text-base uppercase tracking-wider hover:bg-accent hover:text-primary-foreground transition-colors"
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
