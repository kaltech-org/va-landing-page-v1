import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Calendar, User, Share2 } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function HeadquarterServicesPage() {
  // Static data for this specific page
  const article = {
    title: "UAE Tax Residency for Individuals: A Clear Guide to Getting Your Tax Residency Certificate",
    author: "Middle East Advisory Group",
    date: "January 25, 2026",
    category: "Corporate Tax",
      image: "/5.jpeg",
  }

  // Content with Justified Text and Inline Styles for Bullets
const content = `


<h3><strong>1. Why obtaining a UAE Tax Residency Certificate matters</strong></h3>

<p class="text-justify">
For many individuals living in or relocating to the UAE, proving tax residency has become increasingly important. Banks, foreign tax authorities, investment platforms and financial institutions often ask for formal confirmation of where an individual is resident for tax purposes. In the UAE, this confirmation takes the form of a  <strong>Tax Residency Certificate (TRC)</strong> issued by the Federal Tax Authority.
</p>

<p class="text-justify mt-2">
A TRC is not an immigration document, nor does it affect your visa status. It is strictly a certificate that establishes where you are treated as <strong>tax resident</strong> during a specific 12-month period. It allows you to demonstrate to foreign authorities that your centre of life (whether through presence, home, work or personal ties) is in the UAE.
</p>
<br>
<h3><strong>2. Understanding the different types of TRCs</strong></h3>

<p class="text-justify mt-2">
There are two broad types of TRCs issued to individuals.
</p>

<p class="text-justify mt-2">
A <strong>domestic TRC</strong> confirms that someone is a tax resident under UAE law. Individuals often need this when foreign banks or investment providers ask for proof of residence, or when managing personal tax affairs abroad. The certificate is simply a confirmation that the person meets the domestic residency conditions.
</p>

<p class="text-justify mt-2">
A <strong>treaty TRC</strong>, on the other hand, is used when someone wants to claim benefits under a double tax treaty between the UAE and another country, for example, reduced withholding tax on dividends or relief from tax in the other country. For this type of certificate, the Federal Tax Authority checks not only the UAE’s residency rules, but also the residency article of the relevant tax treaty.
</p>
<br>
<h3><strong>3. UAE tax residency for individuals</strong></h3>

<p class="text-justify">
An individual does not automatically become a UAE tax resident simply by holding a residence visa. Visa status can be a supporting factor, but it is not the determining one. UAE law sets out three separate pathways through which an individual can be treated as a UAE tax resident.
</p>
<br>
<p class="text-justify">
<p class='underline'>183-day presence test</p><br>
The simplest route to UAE tax residency is spending 183 days or more in the UAE during any period of twelve consecutive months. This test looks only at physical presence within the UAE’s borders. This is often the test used by individuals who have fully relocated to the UAE and spend most of the year here.
</p>

<p class="text-justify"> <br>
<p class='underline'>90-day presence test</p><br>
To use this route, the person must have been in the UAE for at least 90 days in a twelve-month period. In addition, they must either be a UAE national, a GCC national, or hold a valid UAE residence permit.
</p>
<p class="my-2">If those conditions are satisfied, one of the following must also apply:</p>

<ul class="ml-3" style="list-style-type: disc; padding-left: 20px; margin-bottom: 20px;">
<li class="mt-2">The person has a permanent place of residence in the UAE, meaning a home (owned or rented), that is continuously available to them; or</li>
<li class="mt-2">The person has employment in the UAE; or</li>
<li class="mt-2">The person carries on a business activity in the UAE.</li>
</ul>

<p class="text-justify"> <br>
<p class="underline mb-2">Primary place of residence or center of interest test</p>
Even without meeting any day-count threshold, a person can still be UAE tax resident if the UAE is both:</p>

<ol class="ml-3" style="list-style-type: decimal; padding-left: 20px; margin-bottom: 20px;">
<li class="mt-2"> Their <strong>usual or primary place of residence,</strong> meaning the country where they ordinarily live and spend most of their time as part of their regular routine); and The centre of their financial and personal interests, meaning that their essential personal life, family connections, work, business affairs, social relationships and community ties are chiefly based in the UAE.
</li>
<li class="mt-2">  The <strong>centre of their financial and personal interests,</strong> meaning that their essential personal life, family connections, work, business affairs, social relationships and community ties are chiefly based in the UAE.
</li>

</ol>
<p class="text-justify">
This test relies on a holistic review of a person’s life, and it is designed to capture situations where individuals have genuinely moved to the UAE, even if they travel frequently and have not yet accumulated many days in the country.
</p>


<br>
<h3><strong>4. Documentary requirements</strong></h3>

<p class="text-justify mt-2">
Depending on which test applies, the applicant may be asked for:
</p>

<ul class="ml-3" style="list-style-type: disc; padding-left: 20px; margin-bottom: 20px;">
<li class="mt-2">Passport and visa details;</li>
<li class="mt-2">Emirates ID;</li>
<li class="mt-2">Entry and exit records issued by UAE authorities;</li>
<li class="mt-2">Tenancy contracts or other evidence of long-term accommodation;</li>
<li class="mt-2">Employment letters, salary certificates or professional licences;</li>
<li class="mt-2">Evidence of business activity;</li>
<li class="mt-2">Bank statements or documents showing economic ties to the UAE;</li>
<li class="mt-2">A written explanation of why the UAE is their main place of residence (if relying on the centre-of-interests test).</li>
</ul>

<p class="text-justify">
The FTA can request additional evidence if needed, and it will only issue a certificate once it is satisfied that the residency requirements have been properly met.
</p>
<br>
<h3 class="my-2"><strong>6. How Middle East Advisory Group can help</strong></h3>

<p class="text-justify">
Understanding UAE tax residency can be complex, especially for individuals with international travel patterns, multiple homes or income streams in several countries.
</p>
<p class="text-justify mt-2"><strong>Middle East Advisory Group</strong> supports clients by analysing their specific circumstances, confirming which residency pathway applies, gathering the right documents, and preparing a clean and robust TRC application. We also advise on structuring personal and financial affairs to align with UAE residency requirements, particularly where individuals need to rely on international tax treaties.
</p>

<p class="text-justify mt-2">
If you need personalised guidance or wish to apply for a UAE Tax Residency Certificate, our team would be pleased to assist confidentially.
</p>
`;





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