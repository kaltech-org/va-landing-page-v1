import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Calendar, User, Share2 } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function HeadquarterServicesPage() {
  // Static data for this specific page
  const article = {
    title: "UAE Corporate Tax: Does Your Business Qualify for Small Business Relief?",
    author: "Middle East Advisory Group",
    date: "January 25, 2026",
    category: "Corporate Tax",
    image: "/6.png", 
  }

  // Content with Justified Text and Inline Styles for Bullets
const content = `


    <p class="text-justify">
      Small Business Relief is one of the most practical features of the UAE Corporate Tax regime 
      for entrepreneurs and smaller enterprises. It allows eligible businesses to be treated as if 
      they have no taxable income for a given tax period, significantly reducing compliance obligations. 
      However, the relief is temporary, subject to strict conditions, and not available to everyone. 
      Below is a clear overview of the rules as they currently stand.
    </p>
<br>
    <h3><strong>1. What Is Small Business Relief?</strong></h3>

    <p class="text-justify">
      Under the UAE Corporate Tax regime, resident taxpayers may elect to apply Small Business Relief 
      and be treated as having zero taxable income for the relevant period. When the relief applies, 
      the business does not calculate its taxable income and does not apply deductions, tax losses, 
      exempt income rules or other corporate tax reliefs. In short, it is a simplified regime intended 
      for small to medium businesses.
    </p>
    
<br>

    <h3><strong>2. Revenue Threshold</strong></h3>

    <p class="text-justify">
      The main condition for Small Business Relief is that the business must have revenue below 
      <strong>AED 3 million</strong> for:
    </p>

    <ul style="list-style-type: disc; padding-left: 20px; margin-bottom: 20px;">
      <li>The current Tax Period, <em>and</em></li>
      <li>All previous Tax Periods ending on or after 1 June 2023.</li>
    </ul>

    <p class="text-justify">
      If revenue exceeds AED 3 million in any period, the relief is no longer available going forward.
    </p>

    <h3><strong>3. Members of Multinational Groups</strong></h3>

    <p class="text-justify">
      Businesses that are part of a Multinational Enterprise (MNE) Group with a total consolidated 
      group revenue of AED 3.15 billion or more cannot apply Small Business Relief, regardless of 
      their revenue. This ensures the relief is used only by small domestic businesses.
    </p>
<br>
    <h3><strong>4. Qualifying Free Zone Persons</strong></h3>

    <p class="text-justify">
      Likewise, Qualifying Free Zone Persons are also not permitted to use Small Business Relief. 
      If an entity wishes to maintain QFZP status (typically to benefit from the 0% Free Zone tax 
      rate on qualifying income), it cannot simultaneously elect Small Business Relief. A business 
      must therefore decide which regime best meets its needs.
    </p>
 <br>
    <h3><strong>5. Temporary Relief</strong></h3>

    <p class="text-justify">
      Small Business Relief applies only to Tax Periods that end on or before 31 December 2026. 
      After that date, the relief is expected to cease to apply unless further extended by legislation.
    </p>

    <p class="text-justify">
      Businesses that rely on the relief should therefore plan for the upcoming transition to 
      normal corporate tax rules.
    </p>
<br>
    <h3><strong>6. How Middle East Advisory Group can assist</strong></h3>

    <p class="text-justify">
      Determining whether Small Business Relief is the right option, and whether your business 
      meets the conditions, requires careful analysis of revenue, group structure, and Free Zone status. 
      Our team can assess your eligibility, review your records for compliance, and guide you through 
      the election process.
    </p>

    <p class="text-justify">
      For tailored advice or assistance with UAE corporate tax filings, you can contact 
      <strong>Middle East Advisory Group</strong>.
    </p>
  `

  return (
    <div className="min-h-screen bg-background font-sans">
      <Header />

      <main className="pt-24 pb-16">
        {/* Navigation & Header Area */}
        <div className="max-w-6xl mx-auto px-6 mb-10">
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
            dangerouslySetInnerHTML={{ __html: content }}
          />
        </article>
      </main>

      <Footer />
    </div>
  )
}