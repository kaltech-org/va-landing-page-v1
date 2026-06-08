import type { Metadata } from "next"
import { Header } from "@/components/header"

export const metadata: Metadata = {
  title: "Corporate Tax & Accounting Advisory in Dubai UAE | MEA Group",
  description:
    "Middle East Advisory Group helps clients relocate to the UAE, Saudi Arabia and GCC with expert cross-border tax, real estate and wealth structuring services.",
  alternates: {
    canonical: "/",
  },
  robots: { index: true, follow: true },
  openGraph: {
    title: "Corporate Tax & Accounting Advisory in Dubai UAE | MEA Group",
    description:
      "Middle East Advisory Group helps clients relocate to the UAE, Saudi Arabia and GCC with expert cross-border tax, real estate and wealth structuring services.",
    url: "/",
    images: [{ url: "/modern-dubai-skyline-business-district.jpg", width: 1200, height: 630, alt: "MEA Group – UAE Advisory" }],
  },
}
import { Hero } from "@/components/hero"
import { AboutTrainer } from "@/components/about-trainer"
import { Benefits } from "@/components/benefits"
import { Insights } from "@/components/insights"
import { Booking } from "@/components/booking"


import { Footer } from "@/components/footer"
import Testimonials from "@/components/testimonials"


export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Hero />
      <AboutTrainer />
      <Benefits />
      <Testimonials />
      <Insights />
      <Booking />
      <Footer />
    </main>
  )
}
