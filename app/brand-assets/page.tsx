import type { Metadata } from "next"
import { AssetCard } from "@/components/asset-card"

export const metadata: Metadata = {
  title: "Brand Assets | MEA Group",
  robots: { index: false, follow: false },
}

const BASE_URL = "https://www.me-advisorygroup.com"

type Asset = { name: string; context?: string; file: string }

const categories: { title: string; items: Asset[] }[] = [
  {
    title: "Logos & Social Icons",
    items: [
      { name: "MEA Group Logo", file: "/assets/new-logo.png" },
      { name: "LinkedIn Icon", file: "/assets/linkedin-icon.svg" },
    ],
  },
  {
    title: "Team Photos",
    items: [
      { name: "Zeeshan Khilji", context: "About page", file: "/Zeeshan.jpg" },
      { name: "Zeeshan Khilji", context: "Team page", file: "/Zeeshan1.jpg" },
      { name: "Zeeshan Khilji", context: "Homepage team section", file: "/team-zeeshan-khilji.jpg" },
      { name: "Susie Moore", context: "Team page", file: "/Susie.jpg" },
      { name: "Susie Moore", context: "Homepage team section", file: "/team-susie-moore.jpg" },
      { name: "Dan Crumplin", context: "Team page", file: "/Dan.jpg" },
      { name: "Daniel Crumplin", context: "Homepage team section", file: "/team-daniel-crumplin.jpg" },
      { name: "Alex Evagora", context: "Team page", file: "/alex_evagora.png" },
      { name: "Rob Baines", context: "Team page", file: "/rob.jpg" },
      { name: "Rob Baines", context: "Homepage team section", file: "/team-rob-baines.jpg" },
      { name: "Imran Noon", context: "Team page", file: "/imran_noon.jpg" },
      { name: "Raju Baxi", context: "Homepage team section", file: "/team-raju-baxi.jpg" },
      { name: "Vivek Hakani", context: "Homepage team section", file: "/team-vivek-hakani.jpg" },
      { name: "Sarah Khurram", context: "Homepage team section", file: "/team-sarah-khurram.jpg" },
    ],
  },
  {
    title: "Testimonials",
    items: [
      { name: "Craig Potter", file: "/craig_potter.png" },
      { name: "Sherad Dewedi", file: "/sherad_dewedi.png" },
      { name: "Amer Nazir", file: "/amer_nazir.png" },
    ],
  },
  {
    title: "Page Hero / OG Images",
    items: [
      { name: "Insights Hub", file: "/hero-insights-documents.jpg" },
      { name: "UAE & KSA Relocation / Dubai Setup Guide", file: "/hero-relocation-dubai.jpg" },
      { name: "About Page", file: "/hero-about-executive-boardroom.jpg" },
      { name: "Team Page", file: "/hero-team-office.jpg" },
      { name: "Family Governance Service", file: "/hero-family-governance.jpg" },
      { name: "Real Estate Advisory Service", file: "/hero-real-estate.jpg" },
      { name: "Tax Advisory Service", file: "/hero-tax-advisory.jpg" },
      { name: "Accounting & Compliance Service", file: "/hero-accounting.jpg" },
      { name: "Site-wide Default / Homepage", context: "Also used on Relocation service", file: "/modern-dubai-skyline-business-district.jpg" },
      { name: "Contact Page", file: "/professional-advisory-team-in-modern-middle-east-o.jpg" },
      { name: "Homepage Hero", file: "/dubai-skyline-buildings.jpg" },
    ],
  },
  {
    title: "Service Detail Images",
    items: [
      { name: "Tax Advisory & International Structuring", file: "/professional-tax-advisor-consultation.jpg" },
      { name: "International Property Advisory (Real Estate)", file: "/luxury-london-property-skyline.jpg" },
      { name: "Family Office Advisory", file: "/elegant-family-office-meeting-room.jpg" },
      { name: "Accounting, Audit & Compliance", file: "/modern-accounting-office-dubai.jpg" },
    ],
  },
  {
    title: "Insight Article Images",
    items: [
      { name: "Headquarter Services (UAE Free Zone Tax Regime)", file: "/headquarter_services.jpeg" },
      { name: "UAE Free Zones vs Mainland Guide", file: "/uae_free_zones_vs_mainland.jpeg" },
      { name: "UAE Corporate Tax Compliance", file: "/uae_corporate_tax.jpeg" },
      { name: "Place of Effective Management", file: "/place_of_effective_management.jpeg" },
      { name: "UAE Tax Residency for Individuals", file: "/tax_residency_for_individuals.jpeg" },
      { name: "UAE Small Business Relief", file: "/small_business_relief.jpeg" },
      { name: "UAE Corporate Tax Penalty Waiver", file: "/corporate-tax-documents-uae.jpg" },
      { name: "Dubai Investor Visa Policy Update", file: "/dubai-investor-visa-policy-update.jpg" },
      { name: "Why Real UAE Substance Depends on Who Runs Your Company", file: "/7.jpeg" },
      { name: "UAE Corporate Tax Compliance", context: "Insights hub listing image", file: "/44.png" },
      { name: "Place of Effective Management", context: "Insights hub listing image", file: "/3.jpeg" },
      { name: "UAE Tax Residency for Individuals", context: "Insights hub listing image", file: "/5.jpeg" },
      { name: "UAE Small Business Relief", context: "Insights hub listing image", file: "/6.png" },
      { name: "Headquarter Services", context: "Insights hub listing image", file: "/updatedHead.png" },
    ],
  },
  {
    title: "System",
    items: [{ name: "Fallback Placeholder", context: "Shown when an article has no image set", file: "/placeholder.svg" }],
  },
  {
    title: "Favicons",
    items: [
      { name: "Favicon 16x16", file: "/favicon-16x16.png" },
      { name: "Favicon 32x32", file: "/favicon-32x32.png" },
      { name: "Favicon ICO", file: "/favicon.ico" },
      { name: "Favicon SVG", file: "/favicon.svg" },
      { name: "Apple Touch Icon", file: "/apple-touch-icon.png" },
    ],
  },
]

export default function BrandAssetsPage() {
  return (
    <main className="min-h-screen bg-[#f8f8f6] py-16">
      <div className="mx-auto max-w-6xl px-6">
        <h1 className="font-serif text-3xl text-primary">Brand Assets</h1>
        <p className="mt-2 text-sm text-foreground/60">
          Every image currently used on me-advisorygroup.com, with a direct, publicly-hosted URL and a
          one-click copy button for each. Use this when you need a stable link for an email signature,
          document, or other external material.
        </p>

        {categories.map((category) => (
          <section key={category.title} className="mt-12">
            <h2 className="text-lg font-medium text-primary">{category.title}</h2>
            <div className="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
              {category.items.map((item) => (
                <AssetCard
                  key={item.file}
                  name={item.name}
                  context={item.context}
                  url={`${BASE_URL}${item.file}`}
                />
              ))}
            </div>
          </section>
        ))}
      </div>
    </main>
  )
}
