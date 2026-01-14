import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Calendar, User, ArrowRight } from "lucide-react"

export default function InsightsPage() {
  const articles = [
    {
      id: 1,
      title: "Understanding UAE Corporate Tax: A Comprehensive Guide for Businesses",
      excerpt:
        "An in-depth analysis of the UAE Corporate Tax regime and what it means for businesses operating in the region. Learn about compliance requirements and strategic planning opportunities.",
      author: "Nils",
      date: "January 10, 2026",
      category: "Tax Advisory",
      image: "/corporate-tax-documents-uae.jpg",
    },
    {
      id: 2,
      title: "GCC Family Office Trends: Governance and Succession Planning in 2026",
      excerpt:
        "Exploring the latest trends in family office governance across the GCC region. Key insights on succession planning, wealth preservation, and cross-generational wealth transfer strategies.",
      author: "Nils",
      date: "January 5, 2026",
      category: "Family Governance",
      image: "/family-business-meeting-luxury-office.jpg",
    },
    {
      id: 3,
      title: "Navigating KSA Business Setup: New Opportunities Under Vision 2030",
      excerpt:
        "A detailed look at the evolving business landscape in Saudi Arabia and the opportunities presented by Vision 2030 reforms. Essential reading for investors considering KSA market entry.",
      author: "Nils",
      date: "December 28, 2025",
      category: "Corporate Services",
      image: "/riyadh-saudi-arabia-modern-skyline.jpg",
    },
  ]

  return (
    <main className="min-h-screen bg-background font-sans">
      <Header />

      {/* Hero Section */}
      <section className="bg-primary py-20 md:py-28 text-white">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-normal mb-6 leading-tight text-balance">
            News and Technical Insights
          </h1>
          <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto font-sans">
            Expert analysis, industry updates and thought leadership from our advisory team.
          </p>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-16 md:py-24 bg-[#F9F7F2]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article) => (
              <article
                key={article.id}
                className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow group"
              >
                {/* Article Image */}
                <div className="aspect-[16/10] overflow-hidden bg-secondary">
                  <img
                    src={article.image || "/placeholder.svg"}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Article Content */}
                <div className="p-6">
                  {/* Category */}
                  <span className="inline-block text-xs font-medium text-accent uppercase tracking-wider mb-3 font-sans">
                    {article.category}
                  </span>

                  {/* Title */}
                  <h2 className="font-serif text-xl text-primary mb-3 leading-snug group-hover:text-accent transition-colors">
                    {article.title}
                  </h2>

                  {/* Excerpt */}
                  <p className="text-sm text-primary/70 mb-4 leading-relaxed line-clamp-3 font-sans">
                    {article.excerpt}
                  </p>

                  {/* Meta */}
                  <div className="flex items-center gap-4 text-xs text-primary/50 mb-4 font-sans">
                    <div className="flex items-center gap-1.5">
                      <User className="w-3.5 h-3.5" />
                      <span>{article.author}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{article.date}</span>
                    </div>
                  </div>

                  {/* Read More */}
                  <Link
                    href="#"
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
              className="border-2 border-accent text-accent hover:bg-accent hover:text-white font-medium px-8 py-6 text-base font-sans bg-transparent"
            >
              Load More Articles
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-16 md:py-20 bg-primary">
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
      </section>

      <Footer />
    </main>
  )
}
