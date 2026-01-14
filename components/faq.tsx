"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function FAQ() {
  const faqs = [
    {
      question: "What types of organizations do you work with?",
      answer:
        "We partner with a diverse range of organizations including publicly listed companies, private enterprises, family offices, and government entities across the GCC region. Our services are tailored to the specific needs and complexity of each client engagement.",
    },
    {
      question: "How do your fees and engagement models work?",
      answer:
        "We offer flexible engagement structures including project-based, retainer, and success-based fee arrangements. Our commercial terms are discussed during the initial consultation and tailored to align with your specific requirements and project scope.",
    },
    {
      question: "What industries do you specialize in?",
      answer:
        "Our team brings deep expertise across financial services, real estate & development, healthcare, technology, energy, and consumer sectors. We combine sector knowledge with functional excellence in strategy, finance, operations, and risk management.",
    },
    {
      question: "How quickly can you mobilize for an engagement?",
      answer:
        "Depending on the nature and scope of work, we can typically mobilize our advisory team within 1-2 weeks of engagement confirmation. For urgent matters, we can arrange expedited start dates to meet critical timelines.",
    },
    {
      question: "Do you work across all GCC markets?",
      answer:
        "Yes, we maintain active presence and deep expertise across all six GCC markets: UAE, Saudi Arabia, Kuwait, Qatar, Bahrain, and Oman. Our team understands the nuances and regulatory environments of each market.",
    },
  ]

  return (
    <section id="faq" className="bg-background py-20 sm:py-24 md:py-32 lg:py-40">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        <div className="mb-12 sm:mb-16">
          <p className="text-accent font-medium text-xs sm:text-sm uppercase tracking-widest mb-4">FREQUENTLY ASKED</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-foreground leading-tight text-balance">
            Your Questions Answered
          </h2>
        </div>

        <Accordion type="single" collapsible className="space-y-4 sm:space-y-6">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="bg-card border-2 border-border px-6 sm:px-8 py-2 hover:border-accent transition-colors"
            >
              <AccordionTrigger className="text-foreground font-serif font-semibold text-base sm:text-lg hover:text-accent text-left">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground font-light leading-relaxed text-sm sm:text-base pt-4">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
