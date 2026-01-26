import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Calendar, User, Share2 } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function HeadquarterServicesPage() {
  // Static data for this specific page
  const article = {
    title: "Place of Effective Management Risk for Foreign Businesses",
    author: "Middle East Advisory Group",
    date: "January 25, 2026",
    category: "Corporate Tax",
      image: "/3.jpeg", 
  }

  // Content with Justified Text and Inline Styles for Bullets
const content = `
   

    <p class="text-justify">
      Many entrepreneurs living in the UAE run businesses through companies incorporated abroad. 
      For years, this was common practice and carried little tax risk. But with the UAE Corporate 
      Tax now in force, those same structures can easily fall within the UAE tax net through a 
      concept called Place of Effective Management (POEM).
    </p>

    <p class="text-justify mt-2 mb-2">
      If your foreign company is effectively “run” from the UAE, you may already be considered 
      a UAE tax resident, regardless of where the entity was registered.
    </p>

    <h3><strong>1. The Risk in Simple Terms</strong></h3>

    <p class="text-justify mt-2">
      Under UAE Corporate Tax Law, a foreign company becomes a UAE tax resident if it is effectively 
      managed and controlled from the UAE. In other words, if strategic decisions are made in the UAE, 
      the UAE may treat the company as resident.
    </p>

    <p class="mt-2">This applies even when:</p>

    <ul class="ml-3 mt-2" style="list-style-type: disc; padding-left: 20px; margin-bottom: 20px;">
      <li>the company is legally incorporated abroad,</li>
      <li class="pt-2">board minutes are drafted offshore, and</li>
      <li class="pt-2">the company has no physical presence in the UAE.</li>
    </ul>

    <p class="text-justify mb-2">What matters is where the real, strategic decision-making happens.</p>

    <h3 class="mb-2"><strong>2. Why foreign companies are at risk</strong></h3>

    <p class="text-justify">
      Over the last decade, many entrepreneurs moved to Dubai or Abu Dhabi while keeping their operating, 
      holding or investment companies abroad. Directors and shareholders often make key decisions from 
      the UAE, approving budgets, signing off investments, engaging clients, negotiating contracts.
    </p>

    <p class="text-justify mt-2 mb-2">
      This was harmless when the UAE had no corporate tax. Today, those same patterns can inadvertently 
      trigger UAE tax residency, exposing the foreign company to UAE tax on its worldwide income.
    </p>

    <h3 class="my-2"><strong>3. Practical Examples</strong></h3>

    <p>A foreign company may be considered effectively managed in the UAE if:</p>

    <ul class="ml-3" style="list-style-type: disc; padding-left: 20px; margin-bottom: 20px;">
      <li class="pt-2">the founder or key decision-maker lives in Dubai and approves strategy from here;</li>
      <li class="pt-2">board meetings “on paper” take place abroad but the real discussions happen in the UAE;</li>
      <li class="pt-2">the operational leadership team is based in the UAE; or</li>
      <li class="pt-2">the offshore company has little genuine substance in its country of incorporation.</li>
    </ul>

    <p class="text-justify">
      In these cases, the FTA may conclude that the company’s “mind and management” is in the UAE.
    </p>

    <h3 class="my-2"><strong>4. Possible Consequences</strong></h3>

    <p class="my-2">If a foreign company is treated as UAE tax resident, it may face:</p>

    <ul class="ml-3" style="list-style-type: disc; padding-left: 20px; margin-bottom: 20px;">
      <li class="pt-2">UAE Corporate Tax on <strong>worldwide income</strong>,</li>
      <li class="pt-2"><strong>dual tax residency</strong> issues,</li>
      <li class="pt-2">disputes over which country has taxing rights, and</li>
      <li class="pt-2">new filing, accounting and compliance obligations in the UAE.</li>
    </ul>

    <p class="text-justify">For many founders, this can come as an unwelcome surprise.</p>

    <h3 class="my-2"><strong>5. What entrepreneurs should do to avoid POEM risk</strong></h3>

    <p>If you live in the UAE and operate a foreign company, it is essential to review:</p>

    <ul class="ml-3" style="list-style-type: disc; padding-left: 20px; margin-bottom: 20px;">
      <li class="pt-2">where strategic decisions are truly made,</li>
      <li class="pt-2">whether offshore governance is genuine, and</li>
      <li class="pt-2">whether the company has real substance in its home jurisdiction.</li>
    </ul>

    <p class="text-justify">A quick POEM review can save significant tax and compliance headaches later.</p>

    <h3 class="my-2"><strong>6. How Middle East Advisory Group can assist</strong></h3>

    <p>We regularly help entrepreneurs:</p>

    <ul class="ml-3" style="list-style-type: disc; padding-left: 20px; margin-bottom: 20px;">
      <li class="pt-2">assess POEM exposure for foreign companies managed from the UAE,</li>
      <li class="pt-2">structure board processes and substance to mitigate risk,</li>
      <li class="pt-2">evaluate whether UAE tax residency is likely, and</li>
      <li class="pt-2">prepare for potential corporate tax registration.</li>
    </ul>

    <p class="text-justify">
      If you would like a confidential assessment of your structure, <strong>Middle East Advisory Group</strong> 
      can guide you through the key risks and next steps.
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
                {/* <p className="text-sm font-semibold text-primary">Written by {article.author}</p> */}
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