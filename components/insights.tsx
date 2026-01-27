"use client"
import Image from "next/image"
import Link from "next/link"
import { Calendar } from "lucide-react"
import { articles } from "@/lib/articals"
// FIX: Corrected spelling from 'articals' to 'articles'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"


export function Insights() {
  // We only want to show the latest 6 articles on the Homepage

  return (
    <section id="insights" className="py-10 sm:py-16 md:py-15 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-primary text-center px-4">
            News and technical insights
          </h2>
        </div>

        <Carousel
          className="relative"
          opts={{ align: "start", loop: true }}
        >
          <CarouselPrevious className="left-0 -translate-x-1/2 top-1/2 -translate-y-1/2 z-999" />
          <CarouselNext className="right-0 translate-x-1/2 top-1/2 -translate-y-1/2 z-999" />

          <CarouselContent className="-ml-6 sm:-ml-8">
            {articles.map((article) => (
              <CarouselItem
                key={article.id}
                className="pl-6 sm:pl-8 basis-full sm:basis-1/2 lg:basis-1/3"
              >
                <Link
                  // IMPORTANT: This requires 'slug' to exist in your lib/articles.ts file
                  href={`/insights/${article.slug}`}
                  className="group block bg-card border border-border transition-colors hover:border-accent"
                >
                  <div className="aspect-[3/2] relative overflow-hidden bg-muted">
                    <Image
                      src={article.image || "/placeholder.svg"}
                      alt={article.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>

                  <div className="p-5 sm:p-6">
                    <div className="text-xs sm:text-sm font-sans text-accent mb-3">
                      {article.category}
                    </div>

                    <h3 className="font-serif text-lg sm:text-xl text-primary mb-3 leading-tight group-hover:text-accent transition-colors line-clamp-3 h-20">
                      {article.title}
                    </h3>

                    <p className="font-sans text-xs sm:text-sm text-muted-foreground leading-relaxed mb-4 line-clamp-3">
                      {article.excerpt}
                    </p>

                    <div className="flex items-center gap-3 sm:gap-4 text-xs font-sans text-muted-foreground pt-4 border-t border-border">
                      <div className="flex items-center gap-1.5">
                        <Calendar className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                        <span>{article.date}</span>
                      </div>
                    </div>
                  </div>
                </Link>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  )
}