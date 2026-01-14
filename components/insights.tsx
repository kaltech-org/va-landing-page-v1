import Image from "next/image"
import Link from "next/link"
import { Calendar, User } from "lucide-react"

const articles = [
  {
    id: 1,
    title: "Understanding UAE Corporate Tax: A Guide for International Businesses",
    excerpt:
      "Key considerations and compliance requirements for businesses operating in the UAE's new corporate tax regime.",
    author: "Nils",
    date: "March 15, 2024",
    thumbnail: "/modern-dubai-skyline-business.jpg",
    category: "Tax Advisory",
  },
  {
    id: 2,
    title: "Saudi Arabia's Vision 2030: Opportunities for International Investors",
    excerpt: "Exploring the strategic opportunities and regulatory landscape for foreign investment in the Kingdom.",
    author: "Nils",
    date: "March 8, 2024",
    thumbnail: "/riyadh-modern-architecture.jpg",
    category: "Investment",
  },
  {
    id: 3,
    title: "GCC Family Office Structures: Optimizing Wealth Preservation",
    excerpt: "Best practices for structuring family offices across the GCC region with cross-border considerations.",
    author: "Nils",
    date: "February 28, 2024",
    thumbnail: "/luxury-office-interior-elegant.jpg",
    category: "Family Office",
  },
]

export function Insights() {
  return (
    <section className="py-20 sm:py-24 md:py-32 lg:py-40 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
        <div className="text-center mb-12 sm:mb-16">
          <p className="text-accent font-medium text-xs sm:text-sm uppercase tracking-widest mb-4">LATEST UPDATES</p>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-primary text-center px-4">
            News and Technical Insights
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {articles.map((article) => (
            <Link
              key={article.id}
              href="#"
              className="group block bg-card border border-border transition-colors hover:border-accent"
            >
              <div className="aspect-[3/2] relative overflow-hidden bg-muted">
                <Image
                  src={article.thumbnail || "/placeholder.svg"}
                  alt={article.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              <div className="p-5 sm:p-6">
                <div className="text-xs sm:text-sm font-sans text-accent mb-3">{article.category}</div>

                <h3 className="font-serif text-lg sm:text-xl text-primary mb-3 leading-tight group-hover:text-accent transition-colors">
                  {article.title}
                </h3>

                <p className="font-sans text-xs sm:text-sm text-muted-foreground leading-relaxed mb-4">
                  {article.excerpt}
                </p>

                <div className="flex items-center gap-3 sm:gap-4 text-xs font-sans text-muted-foreground pt-4 border-t border-border">
                  <div className="flex items-center gap-1.5">
                    <User className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                    <span>{article.author}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Calendar className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                    <span>{article.date}</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
