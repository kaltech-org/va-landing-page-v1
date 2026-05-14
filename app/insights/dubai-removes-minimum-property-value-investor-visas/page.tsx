import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeft, Calendar } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { articles } from "@/lib/articals"

const SLUG = "dubai-removes-minimum-property-value-investor-visas"

export default function DubaiInvestorVisaPolicyPage() {
  const article = articles.find((a) => a.slug === SLUG)
  if (!article) notFound()

  return (
    <div className="min-h-screen bg-background font-sans">
      <Header />

      <main className="pt-24 pb-16">
        <div className="max-w-6xl mx-auto px-6 mb-10">
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

        <article className="max-w-5xl mx-auto px-6">
          <div
            className="
              mx-auto 
              text-left 
              prose prose-lg prose-slate 
              prose-headings:font-serif prose-headings:text-primary 
              prose-a:text-accent 
              leading-relaxed
            "
            dangerouslySetInnerHTML={{ __html: article.content }}
          />
        </article>
      </main>

      <Footer />
    </div>
  )
}
