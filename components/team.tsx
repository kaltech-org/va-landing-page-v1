import Image from "next/image"

interface TeamMember {
  name: string
  title: string
  image: string
}

const teamMembers: TeamMember[] = [
  {
    name: "Zeeshan Khilji",
    title: "CEO",
    image: "/team-zeeshan-khilji.jpg",
  },
  {
    name: "Daniel Crumplin",
    title: "Head of Corporate Services",
    image: "/team-daniel-crumplin.jpg",
  },
  {
    name: "Susie Moore",
    title: "Senior Tax Advisory Specialist",
    image: "/team-susie-moore.jpg",
  },
  {
    name: "Rob Baines",
    title: "Outsourced CFO Support Lead",
    image: "/team-rob-baines.jpg",
  },
  {
    name: "Raju Baxi",
    title: "Head of Accounts & Tax Compliance",
    image: "/team-raju-baxi.jpg",
  },
  {
    name: "Vivek Hakani",
    title: "Senior Accountant",
    image: "/team-vivek-hakani.jpg",
  },
  {
    name: "Sarah Khurram",
    title: "Corporate Services Associate",
    image: "/team-sarah-khurram.jpg",
  },
]

export function Team() {
  return (
    <section className="py-20 sm:py-24 md:py-32 lg:py-40 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
        {/* Section Header */}
        <div className="text-center mb-16 sm:mb-20">
          <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl text-primary mb-6">Our Team</h2>
          <div className="w-20 sm:w-24 h-px bg-accent mx-auto mb-6" />
          <p className="font-sans text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed px-4">
            Meet the professionals who deliver Big Four quality advisory services across the Middle East and the UK.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 sm:gap-12">
          {teamMembers.map((member, index) => (
            <div key={index} className="group">
              {/* Portrait */}
              <div className="mb-6 overflow-hidden bg-secondary/30">
                <Image
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  width={400}
                  height={500}
                  className="w-full aspect-[4/5] object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Gold Line Separator */}
              <div className="w-10 sm:w-12 h-px bg-accent mb-4" />

              {/* Name and Title */}
              <div>
                <h3 className="font-serif text-xl sm:text-2xl text-primary mb-2">{member.name}</h3>
                <p className="font-sans text-xs sm:text-sm text-muted-foreground tracking-wide">{member.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
