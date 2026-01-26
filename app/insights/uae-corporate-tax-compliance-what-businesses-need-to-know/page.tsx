import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Calendar, User, Share2 } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function HeadquarterServicesPage() {
    // Static data for this specific page
    const article = {
        title: "UAE Corporate Tax Compliance: What Businesses Need to Know",
        author: "Middle East Advisory Group",
        date: "January 25, 2026",
        category: "Corporate Tax",
        image: "/44.png",
    }

    // Content with Justified Text and Inline Styles for Bullets
    const content = `
    <p class="text-justify">
   The introduction of Corporate Tax in the UAE has implemented a 
   number of compliance obligations that apply to both resident and 
   non-resident taxpayers. It is critical for business owners and 
   entrepreneurs to understand these requirements, as the Corporate 
   Tax regime imposes specific timelines for registration, financial 
   reporting, and tax return filing. Below is a detailed overview
    of the core compliance obligations that businesses should be aware of.
    </p>
    <br/>
    
    <h3 class="my-2"><strong>1. Corporate Tax registration </strong></h3>

    <p class="text-justify">
All businesses that fall within the scope of the Corporate Tax Law must
 register with the Federal
 Tax Authority (FTA), even if they do not expect to pay tax.<br/>
Resident taxpayers, including mainland and free zone entities, 
are required to register for corporate tax regardless of whether they 
earn taxable income or expect to claim reliefs or exemptions. This includes 
natural persons carrying on a business or business activity in the
 UAE once their revenue exceeds AED 1 million in a Gregorian calendar year. <br/>
Non-resident taxpayers must also register if they have a Permanent
 Establishment (PE) or nexus in the UAE. A foreign company with no PE or 
 nexus in the UAE does not need to register, even if it derives UAE sourced 
 income which is subject to withholding tax, as the currently rate is set at 0%.<br/>
The FTA has issued separate timelines for when different types of 
taxpayers must complete registration, and late registration penalties may apply. In general,
 newly established businesses must register within three months following their date of 
 incorporation.

    </p>
     <br>
    <p class="my-2"><strong>2. Requirement to maintain Audited Financial Statements</strong></p>
   <p>Under the UAE Corporate Tax framework, certain businesses are required 
   to maintain audited financial statements, namely:</p>
    <ul class="ml-3" style="list-style-type: disc; padding-left: 20px; margin-bottom: 20px;">
      <li class="pt-2">Businesses with revenue exceeding<strong> AED 50 million,</strong> and</li>
      <li class="pt-2"><strong>Qualifying Free Zone Persons</strong> (QFZPs) seeking to benefit from the 0% Free Zone corporate tax regime.</li>
    </ul><p class="text-justify">
    It is worth noting, however, that most UAE companies were already 
    required to prepare and maintain audited financial statements under
     commercial, licensing or regulatory obligations (for example, under
      the Commercial Companies Law, free zone regulations, or sector-specific 
      rules). As a result, the corporate tax audit requirement generally affects
       only those businesses that previously operated without any mandatory audit
        obligations and must now adopt formal audit processes for tax compliance.
For these businesses, the new requirement represents a significant change.
 Preparing audited financial statements requires proper bookkeeping, timely 
 closing processes, and adherence to the applicable accounting standards, and 
 businesses should ensure they have the right systems in place well before their first
  tax filing deadline.
    </p>
    <br>

    <h3 class="my-2"><strong> 3. Standalone Financial Statements </strong></h3>
    <p class="text-justify">For corporate tax purposes, businesses must prepare standalone financial statements for each entity within a group, even if they normally prepare consolidated accounts for other purposes. Taxable income and adjustments are computed based on the standalone results of the individual entity.
Financial statements must be prepared using one of the following accounting frameworks:
</p>

    <ul class="ml-3" style="list-style-type: disc; padding-left: 20px; margin-bottom: 20px;">
      <li class="pt-2">International Financial Reporting Standards (IFRS), or

</li>
      <li class="pt-2">IFRS for SMEs, where applicable based on the size and nature of the entity.</li>
    
    </ul><p class="text-justify">
     This requirement applies to resident taxpayers as well as to 
     non- resident taxpayers that have a Permanent Establishment in the UAE. 
     Proper maintenance of books and records is essential, as the FTA may 
     review underlying ledgers, 
     documentation and supporting schedules during a tax audit.
    </p>
    <br>

    <h3 class="my-2"><strong>4. Corporate Tax Return filing and payment of Corporate Tax</strong></h3>

    <p class="text-justify">Every Taxable Person must file a corporate tax 
    return for each Tax Period. The return must be
     submitted within nine months from the end of the financial year.
For example:
</p>
    
 
    <ul class="ml-3" style="list-style-type: disc; padding-left: 20px; margin-bottom: 20px;">
      <li class="pt-2">Financial year ending 31 December 2024 → return due 30 September 2025
</li>
      <li class="pt-2">Financial year ending 30 June 2025 → return due 31 March 2026</li>
    </ul>
    <p  class="text-justify">The return is filed electronically through the EmaraTax platform. Unlike VAT, there are no quarterly or monthly corporate tax returns. 
The payment of corporate tax (if due) must also be made within the same nine-month deadline.
</p>
<br>
    <p class="my-2"><strong>5. Transfer Pricing Documentation</strong></p>
    <p class="text-justify">The UAE Corporate Tax Law adopts internationally aligned transfer pricing rules, requiring
     businesses to apply the arm’s length principle to all transactions with related parties
     and connected persons. In addition, several formal documentation obligations apply.</p>
    <br><p><strong>Related Party and Connected Person Disclosure Form</strong></p>
    <p  class="text-justify">A disclosure form must be submitted together with the annual 
    corporate tax return. This form lists all transactions and arrangements
     with related parties and connected persons during the year, and provides 
     high-level information about their nature and value.
</p>
   
 <br>
    <p><strong>Master File and Local File</strong></p>
    <p>Businesses must also prepare and maintain detailed transfer pricing documentation, including:</p>
    <ul class="ml-3" style="list-style-type: disc; padding-left: 20px; margin-bottom: 20px;">
      <li class="pt-2">A <strong>Master File</strong> describing the multinational group and its global activities, and
</li>
      <li class="pt-2">A <strong> Local File</strong> providing detailed analysis of the UAE entity’s controlled transactions.</li>
    </ul>
   <p class="text-justify">These documents follow OECD standards and must be prepared if the business 
   meets thresholds set by the Minister of Finance. 
   They must be provided to the FTA upon request, and failure to maintain them may lead to penalties and Transfer
    Pricing adjustments.</p><br>
<p class="my-2"><strong>6. Staying compliant in the UAE's new tax environment</strong><p>
    
    <p class="text-justify">The UAE tax system has transitioned rapidly from a no-corporate-tax environment 
    to a fully developed compliance framework. Even businesses with modest levels of activity
     must register, maintain proper accounting records, prepare financial statements, and file an annual tax return. Transfer pricing documentation, in particular, 
    is an area where many businesses underestimate their obligations.</p> <br>
  <p><strong>Middle East Advisory Group</strong></p>  <p class="text-justify">
       assists clients with corporate tax registration, preparation of standalone and audited financial statements, annual return filing, and transfer pricing documentation. We also advise on group structuring and tax governance to ensure that businesses remain compliant while optimising their tax position.
<br/>If you need support with UAE corporate tax compliance or would like a tailored compliance roadmap, our team is ready to assist.

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