import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ContactForm } from "@/components/contact-form"
import { MapPin, Phone, Mail, Clock } from "lucide-react"

export default function ContactPage() {
  const offices = [
    {
      city: "Dubai",
      address: "Boulevard Plaza, Tower 1, Level 20, Downtown Dubai, UAE",
      phone: "+971 4 XXX XXXX",
      status: "active",
    },
    {
      city: "Abu Dhabi",
      address: "Address coming soon",
      phone: "Coming Soon",
      status: "coming-soon",
    },
    {
      city: "Saudi Arabia",
      address: "Address coming soon",
      phone: "Coming Soon",
      status: "coming-soon",
    },
    {
      city: "London",
      address: "Mayfair, London, W1K, United Kingdom",
      phone: "+44 20 XXXX XXXX",
      status: "active",
    },
  ]

  return (
    <main className="min-h-screen bg-background font-sans">
      <Header />

      {/* Hero Section */}
      <section className="bg-primary py-20 md:py-28 text-white">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-normal mb-6 leading-tight text-balance">
            Contact Us
          </h1>
          <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto font-sans">
            Find out more about our specialist services and how we can help.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 md:py-24 bg-[#F9F7F2]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Contact Form */}
            <ContactForm />

            {/* Office Locations */}
            <div>
              <h2 className="font-serif text-2xl md:text-3xl text-primary mb-8">Our Offices</h2>

              <div className="space-y-6">
                {offices.map((office, index) => (
                  <div
                    key={index}
                    className={`bg-white p-6 rounded-xl shadow-sm border-l-4 ${
                      office.status === "active" ? "border-l-accent" : "border-l-primary/20"
                    }`}
                  >
                    <h3 className="font-serif text-xl text-primary mb-3">{office.city}</h3>
                    <div className="space-y-2">
                      <div className="flex items-start gap-3">
                        <MapPin className="w-4 h-4 text-accent mt-1 flex-shrink-0" />
                        <p className="text-sm text-primary/70 font-sans">{office.address}</p>
                      </div>
                      <div className="flex items-center gap-3">
                        <Phone className="w-4 h-4 text-accent flex-shrink-0" />
                        <p className="text-sm text-primary/70 font-sans">{office.phone}</p>
                      </div>
                    </div>
                    {office.status === "coming-soon" && (
                      <span className="inline-block mt-3 text-xs font-medium text-accent bg-accent/10 px-3 py-1 rounded-full font-sans">
                        Coming Soon
                      </span>
                    )}
                  </div>
                ))}
              </div>

              {/* Additional Contact Info */}
              <div className="mt-8 bg-primary p-6 rounded-xl">
                <h3 className="font-serif text-lg text-white mb-4">General Enquiries</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Mail className="w-4 h-4 text-accent" />
                    <a
                      href="mailto:enquiries@me-advisorygroup.com"
                      className="text-sm text-white/80 hover:text-accent transition font-sans"
                    >
                      enquiries@me-advisorygroup.com
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock className="w-4 h-4 text-accent" />
                    <p className="text-sm text-white/80 font-sans">Sunday - Thursday: 9:00 AM - 6:00 PM (GST)</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Google Map */}
      <section className="h-96 w-full">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3610.178509261037!2d55.27195807538768!3d25.197201977714!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f43348f08f225%3A0x7c9a6a6a9a6a9a6a!2sBoulevard%20Plaza%20Tower%201!5e0!3m2!1sen!2sae!4v1704067200000!5m2!1sen!2sae"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Dubai Office Location - Boulevard Plaza"
          className="grayscale hover:grayscale-0 transition-all duration-500"
        />
      </section>

      <Footer />
    </main>
  )
}
