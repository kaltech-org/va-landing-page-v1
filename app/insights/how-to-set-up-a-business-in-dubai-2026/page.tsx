import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeft, Calendar } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { articles } from "@/lib/articals"

export const metadata: Metadata = {
  title: "How to Set Up a Business in Dubai 2026 | Complete Guide | MEA Group",
  description:
    "Learn how to set up a business in Dubai. Compare free zones vs mainland, understand license types, formation steps, costs, and 2026 requirements in this complete guide.",
  alternates: { canonical: "/insights/how-to-set-up-a-business-in-dubai-2026" },
  robots: { index: true, follow: true },
  openGraph: {
    title: "How to Set Up a Business in Dubai 2026 | Complete Guide | MEA Group",
    description:
      "Learn how to set up a business in Dubai. Compare free zones vs mainland, understand license types, formation steps, costs, and 2026 requirements in this complete guide.",
    url: "/insights/how-to-set-up-a-business-in-dubai-2026",
    images: [{ url: "/hero-relocation-dubai.jpg", width: 1200, height: 630, alt: "How to Set Up a Business in Dubai 2026" }],
  },
}

const SLUG = "how-to-set-up-a-business-in-dubai-2026"

export default function HowToSetUpBusinessInDubai2026Page() {
  const article = articles.find((a) => a.slug === SLUG)
  if (!article) notFound()

  return (
    <div className="min-h-screen bg-background font-sans">
      <Header />

      <main className="pt-24 pb-16">
        <div className="max-w-5xl mx-auto px-6">
          <div className="mb-10">
          <Link
            href="/insights"
            className="inline-flex items-center text-sm text-accent hover:text-accent/80 mb-8 transition-colors font-medium"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Insights
          </Link>

          <div className="flex items-center gap-4 mb-6">
            <span className="text-muted-foreground text-sm flex items-center gap-1.5 font-sans">
              <Calendar className="w-3.5 h-3.5" /> {article.date}
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-primary leading-tight mb-8">
            {article.title}
          </h1>
        </div>

        <article>
          <div
            className="
              text-left 
              prose prose-lg prose-slate 
              prose-headings:font-serif prose-headings:text-primary 
              prose-a:text-accent 
              leading-relaxed
              max-w-none
            "
            dangerouslySetInnerHTML={{ __html: article.content }}
          />
        </article>
          </div>
      </main>

      <Footer />
    </div>
  )
}
