import type { Metadata } from "next"
import { Header } from "@/components/header"

export const metadata: Metadata = {
  title: "Contact MEA Group | UAE & GCC Advisory Firm",
  description:
    "Contact Middle East Advisory Group's advisers in Dubai for relocation, tax, real estate and family governance services across the UAE, KSA and GCC.",
  alternates: {
    canonical: "/contact",
  },
  robots: { index: true, follow: true },
  openGraph: {
    title: "Contact MEA Group | UAE & GCC Advisory Firm",
    description:
      "Contact Middle East Advisory Group's advisers in Dubai for relocation, tax, real estate and family governance services across the UAE, KSA and GCC.",
    url: "/contact",
    images: [{ url: "/professional-advisory-team-in-modern-middle-east-o.jpg", width: 1200, height: 630, alt: "Contact MEA Group" }],
  },
}
import { Footer } from "@/components/footer"
import { ContactForm } from "@/components/contact-form"
import { Mail, Phone, MapPin } from "lucide-react"

export default function ContactPage() {
  const offices = [
    {
      city: "",
      address:
        "Sustainability District, 2 Mangrove Quarter A, Expo City, Dubai, United Arab Emirates",
      phone: "+971 4 330 4177",
      status: "active",
    },
    // {
    //   city: "Abu Dhabi",
    //   address: "ADGM Square, Al Sila Tower, Abu Dhabi, United Arab Emirates ",
    //   phone: "Coming Soon",
    //   status: "coming-soon",
    // },
    // {
    //   city: "Saudi Arabia",
    //   address: "6948 Eastern Ring Branch Road, Ar Rabwah, Riyadh 12824, Saudi Arabia",
    //   phone: "Coming Soon",
    //   status: "coming-soon",
    // },
    // {
    //   city: "London",
    //   address: "17 Hanover Square, London, W1S 1BN",
    //   phone: "+44 20 XXXX XXXX",
    //   status: "active",
    // },
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
              <div className="space-y-8 my-5">
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
                  {/* <a
                    href="tel:+971045276813"
                    className="text-primary text-lg font-sans hover:text-accent transition-colors"
                  > */}
                  <span className="text-primary text-lg font-sans">
                    +971 04 527 6813
                    </span>
                  {/* </a> */}
                </div>
              </div>

             

              {/* Additional Offices */}
              <div className=" pt-8 border-t border-primary/10">
                {/* <h2 className="font-serif text-2xl text-primary mb-6">Offices</h2> */}
                <div className="space-y-4 text-primary/70 font-sans">
                  {offices.map((office, index) => (
                    <p key={index}>
                      <span className="text-primary font-medium">{office.city}</span> {office.address}
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
        src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3824.3854725877!2d55.1506944!3d24.9609167!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjTCsDU3JzM5LjMiTiA1NcKwMDknMDIuNSJF!5e1!3m2!1sen!2s!4v1779298768027!5m2!1sen!2s"
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
