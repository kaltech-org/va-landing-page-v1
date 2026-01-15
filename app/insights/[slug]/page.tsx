import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeft, Calendar, User, Share2 } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { articles } from "@/lib/articals"

interface PageProps {
  params: {
    slug: string
  }
}

export default function ArticlePage({ params }: PageProps) {
  // Find the article that matches the URL slug
  const article = articles.find((a) => a.slug === params.slug)

  // If no article found, show 404
  if (!article) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-background font-sans">
      <Header />

      <main className="pt-24 pb-16">
        {/* Navigation & Header Area */}
        <div className="max-w-4xl mx-auto px-6 mb-10">
          <Link
            href="/insights"
            className="inline-flex items-center text-sm text-accent hover:text-accent/80 mb-8 transition-colors font-medium"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Insights
          </Link>

          <div className="flex items-center gap-4 mb-6">
            <span className="px-3 py-1 bg-accent/10 text-accent text-xs font-bold uppercase tracking-wider rounded-sm">
              {article.category}
            </span>
            <span className="text-muted-foreground text-sm flex items-center gap-1.5 font-sans">
              <Calendar className="w-3.5 h-3.5" /> {article.date}
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-primary leading-tight mb-8">
            {article.title}
          </h1>

          <div className="flex items-center justify-between border-t border-b border-gray-200 py-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white">
                <User className="w-5 h-5" />
              </div>
              <div>
                <p className="text-sm font-semibold text-primary">Written by {article.author}</p>
                <p className="text-xs text-muted-foreground">Middle East Advisory Group</p>
              </div>
            </div>
            <button className="text-muted-foreground hover:text-accent transition-colors flex items-center gap-2 text-sm">
              <Share2 className="w-4 h-4" /> Share
            </button>
          </div>
        </div>

        {/* Featured Image */}
        <div className="max-w-5xl mx-auto px-4 sm:px-6 mb-12">
          <div className="relative aspect-[21/9] w-full overflow-hidden rounded-xl shadow-sm">
            <Image
              src={article.image || "/placeholder.svg"}
              alt={article.title}
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>

        {/* Article Content Body */}
        <article className="max-w-3xl mx-auto px-6">
          {/* 
            We use 'prose' from Tailwind Typography to automatically style the HTML content.
            If you haven't installed it, the text will look plain.
            Install command: npm install -D @tailwindcss/typography
          */}
          <div
            className="prose prose-lg prose-slate prose-headings:font-serif prose-headings:text-primary prose-a:text-accent prose-p:font-sans prose-p:text-gray-600 leading-relaxed"
            dangerouslySetInnerHTML={{ __html: article.content }}
          />
        </article>
      </main>

      <Footer />
    </div>
  )
}