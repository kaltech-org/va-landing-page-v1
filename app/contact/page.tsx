import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ContactForm } from "@/components/contact-form"
import { Mail, Phone, MapPin } from "lucide-react"

export default function ContactPage() {
  const offices = [
    {
      city: "Dubai",
      address: "Boulevard Plaza, Tower 1, Level 9, Sheikh Mohammed Bin Rashid Boulevard, Dubai, United Arab Emirates",
      phone: "+971 4 330 4177",
      status: "active",
    },
    {
      city: "Abu Dhabi",
      address: "ADGM Square, Al Sila Tower, Abu Dhabi, United Arab Emirates ",
      phone: "Coming Soon",
      status: "coming-soon",
    },
    {
      city: "Saudi Arabia",
      address: "6948 Eastern Ring Branch Road, Ar Rabwah, Riyadh 12824, Saudi Arabia",
      phone: "Coming Soon",
      status: "coming-soon",
    },
    {
      city: "London",
      address: "17 Hanover Square, London, W1S 1BN",
      phone: "+44 20 XXXX XXXX",
      status: "active",
    },
  ]

  return (
    <main className="min-h-screen bg-white font-sans">
      <Header />

      <section className="py-20 md:py-28 lg:py-15">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
            {/* Left Side - Contact Info */}
            <div>
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-primary mb-12 leading-tight">
                Contact us
              </h1>

              <div className="space-y-8">
                {/* Email */}
                <div className="flex items-start gap-4">
                  <Mail className="w-6 h-6 text-primary mt-1 flex-shrink-0" strokeWidth={1.5} />
                  <a
                    href="mailto:info@tcg.com"
                    className="text-primary text-lg font-sans hover:text-accent transition-colors"
                  >
                    enquiries@me-advisorygroup.com
                  </a>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-4">
                  <Phone className="w-6 h-6 text-primary mt-1 flex-shrink-0" strokeWidth={1.5} />
                  <a
                    href="tel:+97143304177"
                    className="text-primary text-lg font-sans hover:text-accent transition-colors"
                  >
                    +971 4 330 4177
                  </a>
                </div>

                {/* Address */}
                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 text-primary mt-1 flex-shrink-0" strokeWidth={1.5} />
                  <address className="text-primary text-lg font-sans not-italic leading-relaxed">
                    Boulevard Plaza, Tower 1, Level 9, 
                    <br />
                    Sheikh Mohammed Bin Rashid Boulevard, Dubai, 
                    <br />
                    United Arab Emirates
                  </address>
                </div>
              </div>

              {/* Additional Offices */}
              <div className="mt-5 pt-12 border-t border-primary/10">
                <h2 className="font-serif text-2xl text-primary mb-6">Other Offices</h2>
                <div className="space-y-4 text-primary/70 font-sans">
                  {offices.slice(1).map((office, index) => (
                    <p key={index}>
                      <span className="text-primary font-medium">{office.city}:</span> {office.address}
                    </p>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Side - Contact Form */}
            <div>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Google Map - Full Width */}
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
