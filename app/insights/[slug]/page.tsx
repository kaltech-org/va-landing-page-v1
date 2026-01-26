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
    image: "/1.JPEG", // Make sure this image exists in your public folder
  }

  // Cleaned up HTML content with proper structure
  const content = `
    <p class="text-justify">

      As global businesses reassess their international structures in light of new tax rules worldwide, 
      the UAE has emerged as an attractive hub for regional and global headquarters. The UAE Corporate 
      Tax Law further facilitates this by recognising “Headquarter services to Related Parties”
      as a Qualifying Activity under the Free Zone Tax Regime offering a potential 0% corporate tax rate
      when all conditions are met.
      For investors and business owners operating group structures across multiple jurisdictions, 
      this activity is central to how a UAE Free Zone entity can legitimately operate as a management 
      and coordination centre for the wider group.
    </p>
     <br/>
    <h3 > <strong>1. What Are “Headquarter Services”?</strong></h3>

    <p class="text-justify">
      A Free Zone entity is considered to be providing headquarter services when it administers, 
      oversees, or manages the business activities of related parties whether UAE-based or foreign.
    </p>

    <p>This can include providing:</p>

<ul style="list-style-type: disc; padding-left: 20px;">
      <li>senior and general management</li>
      <li>strategic decision-making</li>
      <li>business planning and development</li>
      <li>risk management</li>
      <li>group-wide administrative support</li>
      <li>finance, budgeting and treasury coordination</li>
      <li>procurement and vendor management</li>
      <li>HR strategy and group hiring</li>
      <li>IT, technical or operational support</li>
      <li>legal, compliance and governance oversight</li>
      <li>intellectual property administrative management</li>
    </ul>

    <p class="text-justify">
    In essence, a Free Zone headquarter company acts as the central hub for 
    the group (or for a major segment of the group) driving key decisions and 
    coordinating activities across multiple entities.
    </p>
<br>
    <h3> <strong>2. Which Related Parties Qualify?</strong></h3>

    <p>For this specific Qualifying Activity, “Related Parties” include:</p>

    <ul style="list-style-type: disc; padding-left: 20px;">
      <li>juridical persons (companies)</li>
      <li>branches of juridical persons</li>
      <li>foreign permanent establishments</li>
      <li>domestic permanent establishments</li>
    </ul>

    <p class="text-justify">
      This is a broader scope than many businesses expect, and it allows both UAE and non-UAE group 
      entities to be serviced from a regional or global headquarter in a UAE Free Zone.
    </p>
<br>
    <h3><strong>3. Examples </strong></h3>

    <p class="text-justify">A Free Zone entity may fall within this Qualifying Activity if it provides services such as:

    Strategic and Management Functions</p>
    <ul style="list-style-type: disc; padding-left: 20px;">
      <li>approving budgets and business plans</li>
      <li>setting sales or marketing strategies</li>
      <li>deciding on major acquisitions or contracts</li>
      <li>overseeing group-wide KPIs and performance</li>
    </ul>
 <br>
    <p><strong>Group Service Centre Functions</strong></p>
    <ul style="list-style-type: disc; padding-left: 20px;">
      <li>procurement and vendor negotiations</li>
      <li>shared HR services (recruitment, policies, payroll support)</li>
      <li>shared IT services or technical support</li>
      <li>shared finance functions (budgeting, modelling, treasury support)</li>
    </ul>
 <br>
    <p><strong>Risk and Compliance Oversight</strong></p>
    <ul style="list-style-type: disc; padding-left: 20px;">
      <li>group-wide compliance and reporting functions</li>
      <li>legal review and governance support</li>
      <li>enterprise-level risk management</li>
    </ul>
 <br>
    <p><strong>Other Support</strong></p>
    <ul style="list-style-type: disc; padding-left: 20px;">
      <li>centralised training and development</li>
      <li>standardising processes across the group</li>
      <li>ensuring operational consistency between subsidiaries</li>
    </ul>
<br>
    <h3> <strong>4. Why “Headquarter Services” Are Strategically Important</strong></h3>

    <p class="text-justify">
      Establishing a UAE Free Zone entity to act as a group headquarters allows the group to centralise 
      high-value functions in a highly competitive jurisdiction. When the Free Zone company meets all 
      the requirements for the Free Zone Tax Regime, including substance, qualifying income, transfer 
      pricing compliance, de minimis limits, audited financials, it becomes eligible for a 
      0% corporate tax rate to the income derived from these headquarter services.
    

    This creates a legitimate and internationally recognised framework for:</p>

    <ul style="list-style-type: disc; padding-left: 20px;">
      <li>consolidating strategic management functions in the UAE,</li>
      <li>ensuring proper governance and coordination across global operations, and</li>
      <li>aligning group structures with a tax-efficient environment, provided transfer pricing regulations are applied correctly.</li>
    </ul>

    <p class="text-justify">
      Many global groups already operate their regional or international headquarters from Dubai or 
      Abu Dhabi for commercial reasons. The Free Zone Tax Regime reinforces the UAE’s attractiveness 
      for this purpose under the new tax landscape.
    </p>
<br>
    <h3><strong>5. Important Compliance Notes for Headquarter Companies</strong></h3>

    <p>To qualify for the 0% rate, the Free Zone HQ company must ensure:</p>

    <ul style="list-style-type: disc; padding-left: 20px;">
      <li>adequate substance in the Free Zone;</li>
      <li>proper transfer pricing policies and documentation;</li>
      <li>charging arm’s length fees to Related Parties;</li>
      <li>only providing Qualifying Activities or staying within de minimis limits;</li>
      <li>maintaining audited financial statements; and</li>
      <li>being incorporated in a recognised Qualifying Free Zone</li>
    </ul>

    <p class="text-justify">
      If any requirement is breached the entity loses Free Zone Tax Regime eligibility for the current 
      year and the next four years. Careful structuring is therefore essential.
    </p>
<br>
    <h3><strong>6. How Middle East Advisory Group Can Help</strong></h3>

    <p>We assist businesses with:</p>

    <ul style="list-style-type: disc; padding-left: 20px;">
      <li>structuring Free Zone headquarter companies;</li>
      <li>assessing whether planned HQ activities qualify under the regime;</li>
      <li>verifying whether a free zone is recognised as a Qualifying Free Zone;</li>
      <li>designing compliant transfer pricing policies;</li>
      <li>preparing intercompany agreements;</li>
      <li>implementing substance and governance frameworks; and</li>
      <li>navigating the Free Zone Tax Regime and avoiding disqualification</li>
    </ul>

    <p class="text-justify"class="text-justify">
      The UAE is one of the world’s most attractive jurisdictions for establishing a headquarters—provided 
      the tax and compliance framework is understood and respected from the outset.
    </p>
  `

  return (
    <div className="min-h-screen bg-background font-sans">
      <Header />

      <main className="pt-24 pb-16">
        {/* Navigation & Header Area */}
        <div className="max-w-6xl mx-auto px-0 mb-10">
          <Link
            href="/insights"
            className="inline-flex items-center text-sm text-accent hover:text-accent/80 mb-8 transition-colors font-medium"
          >
            <ArrowLeft className="w-6 h-4 mr-2" />
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
        <article className="max-w-3xl mx-auto px-6">
          <div
            className="
              mx-auto 
              text-left 
              prose prose-lg prose-slate 
              prose-headings:font-serif prose-headings:text-primary 
              prose-a:text-accent 
              
              /* 👇 BULLET POINT STYLING 👇 */
              prose-ul:list-disc 
              prose-ul:pl-6
              prose-li:marker:text-accent
              /* 👆 --------------------- 👆 */

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