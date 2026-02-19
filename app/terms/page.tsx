import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-white font-sans">
      <Header />

      <section className="py-16 sm:py-20 md:py-24">
        <div className="max-w-5xl mx-auto px-6 md:px-10">
          <div className="space-y-4">
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl text-primary text-center">
              MEA Group Terms &amp; Conditions
            </h1>
            <p className="text-sm sm:text-base text-foreground/70">
              Please read these terms and conditions carefully before engaging
              our services.
            </p>
            <p className="text-xs sm:text-sm text-foreground/60">
              Last updated: 18th February 2026
            </p>
          </div>

          <div className="mt-12 space-y-8 text-sm sm:text-base text-foreground/80 leading-relaxed">
            <div className="space-y-4">
              <h2 className="font-serif text-xl sm:text-2xl text-primary font-semibold">
                1. DEFINITIONS &amp; INTERPRETATION
              </h2>
              <p>
                In these Terms and Conditions of Business ("T&amp;Cs"), the
                following definitions apply:
              </p>
              <ul className="space-y-2">
                <li>
                  <strong>"Agreement"</strong> means the contract between MEA Group and
                  the Client to which these T&amp;Cs form an integral part.
                </li>
                <li>
                  <strong>"Client"</strong> refers to the individual or entity
                  whose name and address are set out in the relevant instruction
                  form.
                </li>
                <li>
                  <strong>"Company"</strong> means any corporate entity for which
                  MEA Group provides Services at the Client's request.
                </li>
                <li>
                  <strong>"Entity"</strong> encompasses any incorporated or
                  unincorporated body, trust, or legal arrangement, with or
                  without legal personality, for which MEA Group renders Services.
                </li>
                <li>
                  <strong>"Services"</strong> includes any work performed by
                  MEA Group on behalf of the Client or any Entity, including company
                  formation, corporate administration, management, secretarial,
                  accounting, nominee and trustee services.
                </li>
                <li>
                  <strong>"MEA Group"</strong> refers to the company named on the
                  cover page of these T&amp;Cs and includes any of its affiliated
                  entities, directors, employees, agents, or representatives.
                </li>
              </ul>
              <p>
                Words in the singular shall include the plural and vice versa.
                Terms not defined herein but defined in any Agreement shall
                carry the same meaning.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="font-serif text-xl sm:text-2xl text-primary font-semibold">
                2. FEES AND SERVICES
              </h2>
              <p>
                2.1. The Client agrees to pay MEA Group's fees for Services,
                including recurring annual fees charged at prevailing rates. Fee
                increases will be notified with at least 30 days' written
                notice.
              </p>
              <p>
                2.2. Invoices are payable immediately upon issue. Outstanding
                invoices beyond 30 days may incur interest at 4% per annum above
                the applicable base lending rate.
              </p>
              <p>
                2.3. If payment is not received, the Client and Company authorise
                MEA Group to deduct owed amounts from any assets or funds held under
                MEA Group's control. MEA Group may retain a lien over documentation and
                property until full settlement.
              </p>
              <p>
                2.4. The Client acknowledges that failure to pay for services
                may result in the Company being struck off. Liability for fees
                and disbursements continues until formal termination or
                dissolution.
              </p>
              <p>
                2.5. The Client must notify MEA Group in writing within 30 days of
                an annual invoice if Services are no longer required. Failure to
                do so confirms acceptance of the invoice.
              </p>
              <p>
                2.6. Services are provided on an annual basis unless agreed
                otherwise in writing. No refund or reduction will be made for
                partial periods.
              </p>
              <p>
                2.7. MEA Group shall not pay interest on client-held funds unless
                specifically agreed in writing.
              </p>
              <p>
                2.8. A termination fee of no less than AED 2,500 is payable upon
                discontinuation of Services, in addition to charges for document
                handling and external disbursements.
              </p>
              <p>
                2.9. MEA Group may refuse instructions or cease Services at its
                discretion, with or without cause.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="font-serif text-xl sm:text-2xl text-primary font-semibold">
                3. OFFICERS
              </h2>
              <p>
                3.1. Where MEA Group provides nominee / professional directors,
                officers, secretaries, council members, signatories, or other
                representative roles ("Officers"):
              </p>
                <ul className="list-disc pl-10 space-y-2">
                <li>
                  Officers may consider Client input but shall act according to
                  legal obligations and professional discretion.
                </li>
                <li>
                  Resignation and replacement of Officers will occur upon
                  written instruction by a majority of shareholders or
                  beneficial owners.
                </li>
                <li>
                  Officers may serve other companies, including those with
                  competing interests. Confidentiality is maintained, and this
                  does not constitute a conflict of interest.
                </li>
                <li>
                  The Client shall indemnify Officers for all claims or losses
                  incurred in good faith performance of duties, except in cases
                  of dishonesty.
                </li>
                <li>
                  Officers may resign if the Client fails to meet legal or
                  payment obligations. In such a case, the Client appoints
                  MEA Group as attorney to designate a replacement.
                </li>
                <li>
                  A nominee role holder Agreement must be executed for each
                  Officer appointment.
                </li>
                </ul>
            </div>

            <div className="space-y-4">
              <h2 className="font-serif text-xl sm:text-2xl text-primary font-semibold">
                4. REGISTERED OFFICE
              </h2>
              <p>4.1. Where MEA Group provides a registered office address or mailing box:</p>
              <ul className="list-disc pl-10 space-y-2">
                <li>
                  The address may not be used in public materials without
                  written consent.
                </li>
                <li>
                  The facility is licensed and may be revoked by MEA Group. Clients
                  must change the address upon request.
                </li>
                <li>
                  If the Client does not comply within 10 days, MEA Group may change
                  the address unilaterally.
                </li>
                <li>
                  If MEA Group relocates its offices, the Company's registered
                  office may change accordingly. Clients will be notified in
                  advance, but MEA Group is not liable for resulting costs.
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h2 className="font-serif text-xl sm:text-2xl text-primary font-semibold">
                5. GENERAL PROVISION
              </h2>
              <p>5.1. MEA Group may act as sponsoring entity for purposes where applicable.</p>
              <p>
                5.2. Clients must keep their contact information current and
                notify MEA Group of any changes.
              </p>
              <p>
                5.3. All instructions should be in writing. If accepted orally,
                MEA Group shall not be liable for misinterpretations.
              </p>
              <p>
                5.4. Communications are deemed delivered if sent to the last
                known address or email. MEA Group is not required to prove delivery.
              </p>
              <p>
                5.5. MEA Group and its Officers are not liable for failure to act on
                instructions due to missing or incomplete information unless
                gross negligence or fraud is proven.
              </p>
              <p>
                5.6. MEA Group may disclose Client data to affiliates, regulators,
                or banks for compliance or operational purposes.
              </p>
              <p>
                5.7. MEA Group may retain any commissions or rebates received from
                third parties without offsetting Client charges.
              </p>
              <p>
                5.8. The Client agrees to indemnify MEA Group against claims arising
                from its good faith performance of Services.
              </p>
              <p>
                5.9. Clients should seek independent legal advice. MEA Group's
                materials or communications do not constitute professional
                advice.
              </p>
              <p>5.10. MEA Group may amend these T&amp;Cs with reasonable notice.</p>
              <p>
                5.11. These T&amp;Cs are governed by the laws of the jurisdiction
                in which MEA Group is incorporated. Disputes may be brought in the
                DIFC, ADGM or another relevant common law court.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="font-serif text-xl sm:text-2xl text-primary font-semibold">
                6. DATA PROTECTION &amp; ANTI MONEY LAUNDERING (AML)
              </h2>
              <p>
                6.1. MEA Group complies with data protection laws and may be
                registered as a data controller.
              </p>
              <p>
                6.2. Personal data may be shared with processors or authorities
                where required.
              </p>
              <p>
                6.3. Confidential data may be disclosed to the Company registrar,
                authority, regulators or insurers if necessary to protect
                Client interests.
              </p>
              <p>
                6.4. Data may be transferred in the event of sale or
                restructuring, subject to privacy safeguards.
              </p>
              <p>
                6.5. MEA Group complies with AML obligations and may request KYC
                documents, source of funds, and background checks.
              </p>
              <p>
                6.6. MEA Group may refuse to act if identity verification or due
                diligence is incomplete.
              </p>
              <p>
                6.7. MEA Group may report suspicious activity without informing the
                Client.
              </p>
              <p>
                6.8. Certifications must be performed by qualified professionals
                and dated with proper contact details.
              </p>
              <p>
                6.9. Individual clients must submit certified ID and address
                documents.
              </p>
              <p>
                6.10. Corporate clients must provide constitutional documents,
                shareholder registers, KYC for officers, and financial
                statements.
              </p>
              <p>
                6.11. Additional documents may be requested at MEA Group's discretion
                based on regulatory requirements.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
