import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Calendar, User, Share2 } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function HeadquarterServicesPage() {
  // Static data for this specific page
  const article = {
    title: "Headquarter Services: A Key Qualifying Activity under the UAE Free Zone Tax Regime",
    author: "Middle East Advisory Group",
    date: "January 25, 2026",
    category: "Corporate Tax",
    image: "/updatedHead.png", 
  }

  // Content with Justified Text and Inline Styles for Bullets
  const content = `
    <p class="text-justify">
      As global businesses reassess their international structures in light of new tax rules worldwide, 
      the UAE has emerged as an attractive hub for regional and global headquarters. The UAE Corporate 
      Tax Law further facilitates this by recognising “Headquarter services to Related Parties”
      as a Qualifying Activity under the Free Zone Tax Regime offering a potential 0% corporate tax rate
      when all conditions are met.
    </p>
     <p class="text-justify mt-3">
     
      For investors and business owners operating group structures across multiple jurisdictions, 
      this activity is central to how a UAE Free Zone entity can legitimately operate as a management 
      and coordination centre for the wider group.
    </p>
    <br/>
    
    <h3 class="my-3"><strong>1. What Are “Headquarter Services”?</strong></h3>

    <p class="text-justify">
      A Free Zone entity is considered to be providing headquarter services when it administers, 
      oversees, or manages the business activities of related parties whether UAE-based or foreign.
    </p>

    <p class="my-3">This can include providing:</p>

    <ul class="ml-3"  class="ml-3"  style="list-style-type: disc; padding-left: 20px; margin-bottom: 20px;">
      <li class="pt-2" >Senior and general management</li>
      <li class="pt-2" >Strategic decision-making</li>
      <li class="pt-2" >Business planning and development</li>
      <li class="pt-2" >Risk management</li>
      <li class="pt-2" >Group-wide administrative support</li>
      <li class="pt-2" >Finance, budgeting and treasury coordination</li>
      <li class="pt-2" >Procurement and vendor management</li>
      <li class="pt-2" >HR strategy and group hiring</li>
      <li class="pt-2" >IT, technical or operational support</li>
      <li class="pt-2" >Legal, compliance and governance oversight</li>
      <li class="pt-2" >Intellectual property administrative management</li>
    </ul>

    <p class="text-justify">
      In essence, a Free Zone headquarter company acts as the central hub for 
      the group (or for a major segment of the group) driving key decisions and 
      coordinating activities across multiple entities.
    </p>
    <br>

    <h3 class="my-2"><strong>2. Which Related Parties Qualify?</strong></h3>

    <p>For this specific Qualifying Activity, “Related Parties” include:</p>

    <ul class="ml-3"  style="list-style-type: disc; padding-left: 20px; margin-bottom: 20px;">
      <li class="pt-2" >Juridical persons (companies)</li>
      <li class="pt-2" >Branches of juridical persons</li>
      <li class="pt-2" >Foreign permanent establishments</li>
      <li class="pt-2" >Domestic permanent establishments</li>
    </ul>

    <p class="text-justify">
      This is a broader scope than many businesses expect, and it allows both UAE and non-UAE group 
      entities to be serviced from a regional or global headquarter in a UAE Free Zone.
    </p>
    <br>

    <h3 class="my-2"><strong>3. Examples</strong></h3>

    <p class="text-justify">A Free Zone entity may fall within this Qualifying Activity if it provides services such as:</p>
    
    <p class="my-2 mt-3">  Strategic and Management Functions</p>
    <ul class="ml-3"  style="list-style-type: disc; padding-left: 20px; margin-bottom: 20px;">
      <li class="pt-2" >Approving budgets and business plans</li>
      <li class="pt-2" >Setting sales or marketing strategies</li>
      <li class="pt-2" >Deciding on major acquisitions or contracts</li>
      <li class="pt-2" >Overseeing group-wide KPIs and performance</li>
    </ul>

    <p class="my-2">Group Service Centre Functions</p>
    <ul class="ml-3"  style="list-style-type: disc; padding-left: 20px; margin-bottom: 20px;">
      <li class="pt-2" >Procurement and vendor negotiations</li>
      <li class="pt-2" >Shared HR services (recruitment, policies, payroll support)</li>
      <li class="pt-2" >Shared IT services or technical support</li>
      <li class="pt-2" >Shared finance functions (budgeting, modelling, treasury support)</li>
    </ul>

    <p class="my-2">Risk and Compliance Oversight</p>
    <ul class="ml-3"  style="list-style-type: disc; padding-left: 20px; margin-bottom: 20px;">
      <li class="pt-2" >Group-wide compliance and reporting functions</li>
      <li class="pt-2" >Legal review and governance support</li>
      <li class="pt-2" >Enterprise-level risk management</li>
    </ul>

    <p class="my-2">Other Support</p>
    <ul class="ml-3"  style="list-style-type: disc; padding-left: 20px; margin-bottom: 20px;">
      <li class="pt-2" >Centralised training and development</li>
      <li class="pt-2" >Standardising processes across the group</li>
      <li class="pt-2" >Ensuring operational consistency between subsidiaries</li>
    </ul>
    <br>

    <h3 class="my-2"><strong>4. Why “Headquarter Services” Are Strategically Important</strong></h3>

    <p class="text-justify">
      Establishing a UAE Free Zone entity to act as a group headquarters allows the group to centralise 
      high-value functions in a highly competitive jurisdiction. When the Free Zone company meets all 
      the requirements for the Free Zone Tax Regime, including substance, qualifying income, transfer 
      pricing compliance, de minimis limits, audited financials, it becomes eligible for a 
      0% corporate tax rate to the income derived from these headquarter services.
    </p>

    <p class="text-justify my-3">This creates a legitimate and internationally recognised framework for:</p>

    <ul class="ml-3"  style="list-style-type: disc; padding-left: 20px; margin-bottom: 20px;">
      <li class="pt-2" >Consolidating strategic management functions in the UAE,</li>
      <li class="pt-2" >Ensuring proper governance and coordination across global operations, and</li>
      <li class="pt-2" >Aligning group structures with a tax-efficient environment, provided transfer pricing regulations are applied correctly.</li>
    </ul>

    <p class="text-justify">
      Many global groups already operate their regional or international headquarters from Dubai or 
      Abu Dhabi for commercial reasons. The Free Zone Tax Regime reinforces the UAE’s attractiveness 
      for this purpose under the new tax landscape.
    </p>
    <br>

    <h3 class="my-2"><strong>5. Important Compliance Notes for Headquarter Companies</strong></h3>

    <p>To qualify for the 0% rate, the Free Zone HQ company must ensure:</p>

    <ul class="ml-3"  style="list-style-type: disc; padding-left: 20px; margin-bottom: 20px;">
      <li class="pt-2" >Adequate substance in the Free Zone;</li>
      <li class="pt-2" >Proper transfer pricing policies and documentation;</li>
      <li class="pt-2" >Charging arm’s length fees to Related Parties;</li>
      <li class="pt-2" >Only providing Qualifying Activities or staying within de minimis limits;</li>
      <li class="pt-2" >Maintaining audited financial statements; and</li>
      <li class="pt-2" >Being incorporated in a recognised Qualifying Free Zone</li>
    </ul>

    <p class="text-justify">
      If any requirement is breached the entity loses Free Zone Tax Regime eligibility for the current 
      year and the next four years. Careful structuring is therefore essential.
    </p>
    <br>

    <h3 class="my-2"><strong>6. How Middle East Advisory Group Can Help</strong></h3>

    <p>We assist businesses with:</p>

    <ul class="ml-3"  style="list-style-type: disc; padding-left: 20px; margin-bottom: 20px;">
      <li class="pt-2" >Structuring Free Zone headquarter companies;</li>
      <li class="pt-2" >Assessing whether planned HQ activities qualify under the regime;</li>
      <li class="pt-2" >Verifying whether a free zone is recognised as a Qualifying Free Zone;</li>
      <li class="pt-2" >Designing compliant transfer pricing policies;</li>
      <li class="pt-2" >Preparing intercompany agreements;</li>
      <li class="pt-2" >Implementing substance and governance frameworks; and</li>
      <li class="pt-2" >Navigating the Free Zone Tax Regime and avoiding disqualification</li>
    </ul>

    <p class="text-justify">
      The UAE is one of the world’s most attractive jurisdictions for establishing a headquarters—provided 
      the tax and compliance framework is understood and respected from the outset.
    </p>
    
  `

  return (
    <div className="min-h-screen bg-background font-sans">
      <Header />

      <main className="pt-24 pb-16">
        {/* Navigation & Header Area */}
        <div className="max-w-5xl mx-auto px-6 mb-10">
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

          {/* <div className="flex items-center justify-between border-t border-b border-gray-200 py-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white">
                <User className="w-5 h-5" />
              </div>
              <div>
                 <p className="text-sm font-semibold text-primary">Written by {article.author}</p> 
                 <p className="text-xs text-muted-foreground">Middle East Advisory Group</p> 
              </div>
            </div>
          </div> */}
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