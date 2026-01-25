import { Header } from "@/components/header"
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
      {/* <Testimonials /> */}
      <Insights />
      <Booking />
      <Footer />
    </main>
  )
}
