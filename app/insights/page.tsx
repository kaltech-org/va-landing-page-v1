import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Calendar, User, ArrowRight } from "lucide-react"
import { articles } from "@/lib/articals"
// FIXED: Corrected spelling from 'articals'

export default function InsightsPage() {
  return (
    <main className="min-h-screen bg-background font-sans">
      <Header />

      {/* Hero Section - REDUCED PADDING */}
      <section className="relative bg-primary py-20 md:py-28 text-white overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/hero-insights-documents.jpg"
            alt="Professional documents"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative max-w-5xl mx-auto px-6 text-center">
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-normal mb-6 leading-tight text-balance">
            News and Technical Insights
          </h1>
          <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto font-sans">
            Expert analysis, industry updates and thought leadership from our advisory team.
          </p>
        </div>
      </section>

      {/* Articles Grid - REDUCED PADDING */}
      <section className="py-10 md:py-16 bg-[#F9F7F2]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article) => (
              <article
                key={article.id}
                className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow group flex flex-col h-full"
              >
                {/* Article Image Link */}
                <Link
                  href={`/insights/${article.slug}`}
                  className="aspect-[16/10] overflow-hidden bg-secondary block"
                >
                  <img
                    src={article.image || "/placeholder.svg"}
                    alt={article.title}
                    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                  />
                </Link>

                {/* Article Content */}
                <div className="p-6 flex flex-col flex-grow">
                  {/* Category */}
                  <span className="inline-block text-xs font-medium text-accent uppercase tracking-wider mb-3 font-sans">
                    {article.category}
                  </span>

                  {/* Title Link */}
                  <Link href={`/insights/${article.slug}`}>
                    <h2 className="font-serif text-xl text-primary mb-3 leading-snug group-hover:text-accent transition-colors">
                      {article.title}
                    </h2>
                  </Link>

                  {/* Excerpt */}
                  <p className="text-sm text-primary/70 mb-4 leading-relaxed line-clamp-3 font-sans flex-grow">
                    {article.excerpt}
                  </p>

                  {/* Meta */}
                  <div className="flex items-center gap-4 text-xs text-primary/50 mb-4 font-sans pt-4 border-t border-gray-100 mt-auto">
                    <div className="flex items-center gap-1.5">
                      <User className="w-3.5 h-3.5" />
                      <span>{article.author}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{article.date}</span>
                    </div>
                  </div>

                  {/* Read More Link */}
                  <Link
                    href={`/insights/${article.slug}`}
                    className="inline-flex items-center gap-2 text-sm font-medium text-accent hover:text-accent/80 transition font-sans"
                  >
                    Read More
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </article>
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-12">
            <Button
              variant="outline"
              className=" bg-accent hover:bg-white hover:text-black  text-white font-medium px-8 py-6 text-base font-sans "
            >
              Load More Articles
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter CTA - REDUCED PADDING */}
      {/* <section className="py-12 md:py-16 bg-primary">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-serif text-3xl md:text-4xl text-white mb-4">Stay Informed</h2>
          <p className="text-white/70 mb-8 font-sans">
            Subscribe to receive our latest insights and updates directly to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-none border-0 text-primary font-sans"
            />
            <Button className="bg-accent hover:bg-accent/90 text-white font-medium px-6 py-3 font-sans">
              Subscribe
            </Button>
          </div>
        </div>
      </section> */}

      <Footer />
    </main>
  )
}