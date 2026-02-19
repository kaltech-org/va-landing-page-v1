import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-white font-sans">
      <Header />

      <section className="py-16 sm:py-20 md:py-24">
        <div className="max-w-5xl mx-auto px-6 md:px-10">
          <div className="space-y-4 ">
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl text-primary text-center">
              Privacy Policy
            </h1>
            <p className="text-sm sm:text-base text-foreground/70">
              MEA Group
            </p>
            <p className="text-xs sm:text-sm text-foreground/60">
              Last updated: 18th February 2026
            </p>
          </div>

          <div className="mt-12 space-y-8 text-sm sm:text-base text-foreground/80 leading-relaxed">
            <p>
              This Privacy Policy explains how{" "}
              <strong>MEA Group ("we", "our", "us")</strong>{" "}
              collects, uses, discloses, and protects{" "}
              <strong>Personal Data</strong> when you:
              <ol className="mt-3 pl-10" style={{ listStyleType: "decimal" }}>
                <li className="pt-2">
                  {" "}
                  Visit or use{" "}
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 underline"
                    href="https://www.me-advisorygroup.com"
                  >
                    www.me-advisorygroup.com
                  </a>{" "}
                  (the "Website"), and/or
                </li>
                <li className="pt-2">
                  {" "}
                  Contact us, request information, or engage our professional
                  and administrative services (the "Services").
                </li>
              </ol>
            </p>
            <p>
              We process Personal Data in a lawful, fair, and transparent manner
              and in line with applicable UAE data protection requirements,
              including (where applicable){" "}
              <strong>
                UAE Federal Decree-Law No. 45 of 2021 Regarding the Protection
                of Personal Data (PDPL)
              </strong>{" "}
              and its implementing regulations, as may be amended from time to
              time.
            </p>

            <div className="space-y-4">
              <h2 className="font-serif text-xl sm:text-2xl text-primary font-semibold">
                1. WHO WE ARE
              </h2>
              <ul className="space-y-2">
                <li>
                  <strong>Data Controller:</strong> MEA Group
                </li>
                <li>
                  <strong>Location:</strong> Dubai, United Arab Emirates
                </li>
                <li>
                  <strong>Contact (Privacy): enquiries@me-advisorygroup.com</strong>
                </li>
              </ul>
              <p>
                Where we act as a "controller", we determine how and why your
                Personal Data is processed. In limited cases, we may process
                certain information as a "processor" on behalf of a client
                entity (for example, where a corporate client shares
                employee/shareholder information for a defined purpose). In
                those cases, the client entity may be the controller.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="font-serif text-xl sm:text-2xl text-primary font-semibold">
                2. DEFINITIONS
              </h2>
              <ul className="space-y-2">
                <li>
                  <strong>"Personal Data"</strong> means information relating to
                  an identified or identifiable natural person.
                </li>
                <li>
                  <strong>"Sensitive Personal Data"</strong> (where applicable)
                  includes categories such as biometric data, health data, and
                  any other categories designated as sensitive under applicable
                  law.
                </li>
                <li>
                  <strong>"Processing"</strong> means any operation performed on
                  Personal Data (collection, storage, use, disclosure, deletion,
                  etc.).
                </li>
                <li>
                  <strong>"Third Parties"</strong> means external entities such
                  as authorities, banks, free zones, partners, and service
                  providers.
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h2 className="font-serif text-xl sm:text-2xl text-primary font-semibold">
                3. PERSONAL DATA WE COLLECT
              </h2>
              <p>
                We collect Personal Data in three main ways: (A) data you
                provide, (B) data collected automatically, and (C)
                compliance-related data required for regulatory or risk
                purposes.
              </p>

              <div className="space-y-3">
                <p className="font-medium">
                  A) Information you provide directly
                </p>
                <p>Depending on your relationship with us, we may collect:</p>
                <ul className="list-disc space-y-2 pl-10">
                  <li>
                    <strong> Identity and contact details:</strong> full name,
                    email address, phone number, nationality, date of birth
                    (where relevant), and communication preferences
                  </li>
                  <li>
                    <strong>Professional details:</strong> company name,
                    position/title, business activity, corporate structure
                    summary
                  </li>
                  <li>
                    <strong>Addresses:</strong> residential address and/or
                    business address
                  </li>
                  <li>
                    <strong>
                      Client onboarding and service delivery details:
                    </strong>{" "}
                    information needed to understand your requirements and
                    provide Services
                  </li>
                  <li>
                    <strong>Identification documents:</strong> passport copy,
                    Emirates ID, visas, photographs (where required for
                    applications)
                  </li>
                  <li>
                    <strong>Corporate documentation:</strong> trade licenses,
                    incorporation documents, shareholder registers, board
                    resolutions, beneficial ownership details
                  </li>
                  <li>
                    <strong> Financial and billing details:</strong> invoicing
                    details, payment references, bank details (where required
                    for payment processing), and related correspondence
                  </li>
                  <li>
                    <strong>Communications:</strong> information contained in
                    emails, calls, WhatsApp messages, meeting notes, and other
                    communications with us
                  </li>
                </ul>
              </div>

              <div className="space-y-3">
                <p className="font-medium">
                  B) Automatically collected information (Website usage data)
                </p>
                <p>When you use the Website, we may automatically collect:</p>
                <ul className="list-disc space-y-2 pl-10">
                  <li>
                    IP address and approximate location (city/country level)
                  </li>
                  <li>
                    Browser type, device type, operating system, and language
                    settings
                  </li>
                  <li>
                    Pages viewed, time spent, clicks, referral URLs, and site
                    interactions
                  </li>
                  <li>Date/time logs and diagnostic data</li>
                </ul>
                <p>
                  This data is typically collected through cookies, pixels,
                  analytics tools, and server logs.
                </p>
              </div>

              <div className="space-y-3">
                <p className="font-medium">
                  C) Compliance and risk information (KYC/AML/sanctions)
                </p>
                <p>
                  Where Services require compliance checks (or where we
                  reasonably deem it necessary), we may collect:
                </p>
                <ul className="space-y-2">
                  <li>source of funds / source of wealth evidence</li>
                  <li>
                    corporate registry extracts and verification documents
                  </li>
                  <li>Ultimate Beneficial Owner (UBO) information</li>
                  <li>
                    sanctions, PEP (politically exposed person) screening
                    results, adverse media checks
                  </li>
                  <li>due diligence notes and risk assessments</li>
                </ul>
                <p>
                  Refusal to provide required compliance information may prevent
                  us from onboarding you or continuing Services.
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <h2 className="font-serif text-xl sm:text-2xl text-primary font-semibold">
                4. HOW WE USE PERSONAL DATA
              </h2>
              <p>We may use Personal Data for the following purposes:</p>
              <div className="space-y-3">
                <p className="font-medium">
                  4.1 Service delivery and operations
                </p>
                <ul className="list-disc pl-10 space-y-2 ">
                  <li>
                    Responding to enquiries and providing requested information
                  </li>
                  <li>Onboarding clients and managing engagements</li>
                  <li>
                    Preparing documents, submissions, applications, and service
                    coordination
                  </li>
                  <li>
                    Communicating with you about your matter, timelines, and
                    requirements
                  </li>
                  <li>
                    Maintaining internal records, project notes, and service
                    history
                  </li>
                </ul>
              </div>
              <div className="space-y-3">
                <p className="font-medium">
                  4.2 Compliance, legal, and risk management
                </p>
                <ul className="list-disc pl-10 space-y-2">
                  <li>
                    Conducting KYC/AML due diligence and sanctions screening
                  </li>
                  <li>Preventing fraud, misuse, or unlawful activity</li>
                  <li>
                    Meeting legal obligations, responding to lawful requests
                    from authorities
                  </li>
                  <li>Maintaining audit trails and compliance logs</li>
                </ul>
              </div>
              <div className="space-y-3">
                <p className="font-medium">4.3 Billing and administration</p>
                <ul className="list-disc pl-10 space-y-2">
                  <li>
                    Issuing proposals, engagement letters, contracts, and
                    invoices
                  </li>
                  <li>Processing payments and maintaining financial records</li>
                  <li>Managing disputes, collections, and confirmations</li>
                </ul>
              </div>
              <div className="space-y-3">
                <p className="font-medium">
                  4.4 Website and service improvement
                </p>
                <ul className="list-disc pl-10 space-y-2">
                  <li>
                    Understanding how the Website is used, improving performance
                    and content
                  </li>
                  <li>
                    Security monitoring and protecting against cyber threats
                  </li>
                  <li>
                    Analytics and aggregated reporting (where possible,
                    de-identified)
                  </li>
                </ul>
              </div>
              <div className="space-y-3">
                <p className="font-medium">4.5 Marketing (where permitted)</p>
                <ul className="list-disc pl-10 space-y-2">
                  <li>
                    Sending updates, insights, or service announcements (only
                    where you have consented or where lawful under applicable
                    rules)
                  </li>
                  <li>Managing opt-outs and preferences</li>
                </ul>
              </div>
            </div>

            <div className="space-y-4">
              <h2 className="font-serif text-xl sm:text-2xl text-primary font-semibold">
                5. LEGAL BASIS FOR PROCESSING
              </h2>
              <p>
                We process Personal Data on one or more of the following bases
                (as applicable and permitted under law):
              </p>
              <ul className="list-disc pl-10 space-y-2">
                <li>
                  <strong> Contractual necessity:</strong> to provide Services
                  or take steps at your request before entering into an
                  engagement
                </li>
                <li>
                  <strong>Legal obligation:</strong> including AML/KYC,
                  sanctions compliance, regulatory requirements, record
                  retention
                </li>
                <li>
                  <strong>Legitimate interests:</strong> to operate our
                  business, secure systems, improve services, prevent fraud, and
                  manage relationships (balanced against your rights)
                </li>
                <li>
                  <strong>Consent:</strong> for specific activities such as
                  certain marketing communications and non-essential cookies
                  (where required)
                </li>
              </ul>
              <p>
                Where we rely on consent, you may withdraw it at any time (see
                Section 11).
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="font-serif text-xl sm:text-2xl text-primary font-semibold">
                6. HOW AND WHEN WE SHARE PERSONAL DATA
              </h2>
              <p>We do not sell your Personal Data.</p>
              <p>
                We may share Personal Data where necessary for the purposes
                described above, including with:
              </p>
              <div className="space-y-3">
                <p className="font-medium">
                  6.1 Authorities and official bodies
                </p>
                <ul className=" list-disc pl-10 space-y-2">
                  <li>Immigration and residency authorities</li>
                  <li>
                    Corporate registries, free zone authorities, and licensing
                    bodies
                  </li>
                  <li>Tax authorities (where relevant to your matter)</li>
                  <li>
                    Courts, regulators, and law enforcement (where legally
                    required)
                  </li>
                </ul>
              </div>
              <div className="space-y-3">
                <p className="font-medium">
                  6.2 Banks and financial institutions
                </p>
                <ul className=" list-disc pl-10 space-y-2">
                  <li>
                    For account opening coordination, compliance checks, payment
                    confirmations, and related processes
                  </li>
                </ul>
              </div>
              <div className="space-y-3">
                <p className="font-medium">
                  6.3 Real estate and related parties (where you request real
                  estate support)
                </p>
                <ul className="list-disc pl-10 space-y-2">
                  <li>
                    Developers, brokers/agents, landlords, property managers,
                    and related onboarding teams
                  </li>
                </ul>
              </div>
              <div className="space-y-3">
                <p className="font-medium">
                  6.4 Professional advisors and compliance providers
                </p>
                <ul className="list-disc pl-10 space-y-2">
                  <li>
                    External legal counsel, tax advisors, auditors, and
                    corporate service partners
                  </li>
                  <li>
                    Screening and verification service providers
                    (sanctions/PEP/adverse media)
                  </li>
                  <li>
                    Translators, attestation providers, couriers, typing
                    centres, medical centres (where required)
                  </li>
                </ul>
              </div>
              <div className="space-y-3">
                <p className="font-medium">6.5 Technology providers</p>
                <ul className="list-disc pl-10 space-y-2">
                  <li>
                    Website hosting providers, email platforms, cloud storage,
                    CRM systems, analytics providers, and cybersecurity vendors
                  </li>
                </ul>
              </div>
              <p>
                We only share what is reasonably necessary and, where
                appropriate, require confidentiality and security obligations.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="font-serif text-xl sm:text-2xl text-primary font-semibold">
                7. INTERNATIONAL TRANSFERS
              </h2>
              <p>
                Your Personal Data may be processed in the UAE and, where
                necessary for service execution or operational support, in other
                countries (for example, where cloud servers or third-party
                professional advisors are located).
              </p>
              <p>
                Where cross-border transfers occur, we implement appropriate
                safeguards consistent with applicable UAE requirements. These
                may include contractual protections, vendor security
                assessments, access controls, and data minimisation.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="font-serif text-xl sm:text-2xl text-primary font-semibold">
                8. DATA SECURITY
              </h2>
              <p>
                We use reasonable technical and organisational measures designed
                to protect Personal Data, including (as appropriate):
              </p>
              <ul className="list-disc pl-10 space-y-2">
                <li>Access controls and role-based permissions</li>
                <li>
                  Secure storage and encrypted transmission where feasible
                </li>
                <li>Confidentiality obligations for staff and contractors</li>
                <li>Vendor due diligence and security controls</li>
                <li>
                  Monitoring for suspicious activity and security incidents
                </li>
              </ul>
              <p>
                No system is completely secure. You acknowledge that we cannot
                guarantee absolute security of information transmitted to us
                online.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="font-serif text-xl sm:text-2xl text-primary font-semibold">
                9. DATA RETENTION
              </h2>
              <p>
                We retain Personal Data only for as long as necessary for the
                purposes set out in this Policy, including:
              </p>
              <ul className="list-disc pl-10 space-y-2">
                <li>Providing Services and maintaining operational records</li>
                <li>
                  Complying with legal and regulatory obligations (including
                  AML/KYC retention)
                </li>
                <li>Resolving disputes and enforcing agreements</li>
                <li>Maintaining audit trails and business continuity</li>
              </ul>
              <p>
                Retention periods vary by context and may typically range from 5
                to 10 years (or longer where required by law, regulatory
                guidance, or ongoing disputes). We may retain limited records
                beyond these periods where necessary to establish, exercise, or
                defend legal claims.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="font-serif text-xl sm:text-2xl text-primary font-semibold">
                10. YOUR RIGHTS
              </h2>
              <p>
                Subject to applicable UAE law and certain exemptions (especially
                for compliance obligations), you may request:
              </p>
              <ul className="list-disc pl-10 space-y-2">
                <li>Access to your Personal Data</li>
                <li>Correction of inaccurate or incomplete data</li>
                <li>
                  Deletion where legally permissible (note: we may need to
                  retain certain records for compliance/legal reasons)
                </li>
                <li>
                  Restriction or objection to certain processing in some
                  circumstances
                </li>
                <li>
                  Withdrawal of consent where processing is based on consent
                </li>
                <li>
                  Data portability where applicable and feasible under law
                </li>
              </ul>
              <p>
                To exercise your rights, email enquiries@me-advisorygroup.com. We
                may need to verify your identity before responding. If you are
                acting on behalf of another person/entity, we may require proof
                of authority.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="font-serif text-xl sm:text-2xl text-primary font-semibold">
                11. MARKETING COMMUNICATIONS
              </h2>
              <p>
                We may send marketing communications only where we have a lawful
                basis to do so (for example, your consent, or as otherwise
                permitted). You can opt out at any time by:
              </p>
              <ul className="list-disc pl-10 space-y-2">
                <li>Using the unsubscribe link (where included), or</li>
                <li>Emailing enquiries@me-advisorygroup.com with your request</li>
              </ul>
              <p>
                Opting out of marketing does not affect service-related
                communications.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="font-serif text-xl sm:text-2xl text-primary font-semibold">
                12. COOKIES AND ANALYTICS
              </h2>
              <p>We may use cookies and similar technologies to:</p>
              <ul className="list-disc pl-10 space-y-2">
                <li>Ensure Website functionality and security</li>
                <li>Understand Website usage and performance</li>
                <li>Improve user experience and content</li>
              </ul>
              <p>
                You can control cookies through your browser settings and, where
                implemented, via our cookie preference tools. Disabling cookies
                may affect Website functionality.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="font-serif text-xl sm:text-2xl text-primary font-semibold">
                13. CHILDREN
              </h2>
              <p>
                The Website and Services are not intended for children. We do
                not knowingly collect Personal Data from individuals under the
                age where parental consent would be required under applicable
                law. If you believe a child has provided data to us, contact
                enquiries@me-advisorygroup.com.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="font-serif text-xl sm:text-2xl text-primary font-semibold">
                14. THIRD-PARTY WEBSITES
              </h2>
              <p>
                The Website may contain links to third-party sites. We are not
                responsible for their privacy practices or content. You should
                review the privacy policies of any third-party sites you visit.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="font-serif text-xl sm:text-2xl text-primary font-semibold">
                15. CHANGES TO THIS PRIVACY POLICY
              </h2>
              <p>
                We may update this Privacy Policy from time to time to reflect
                legal, regulatory, or operational changes. The updated version
                will be posted on the Website with a revised "Last Updated"
                date. Continued use of the Website or Services after updates
                constitutes acceptance of the updated Policy, to the extent
                permitted by law.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="font-serif text-xl sm:text-2xl text-primary font-semibold">
                16. CONTACT US
              </h2>
              <p>For privacy-related questions, requests, or complaints:</p>
              <ul className="list-disc pl-10 space-y-2">
                <li>
                  <strong>Email:</strong> enquiries@me-advisorygroup.com
                </li>
                <li>
                  <strong>Website:</strong>{" "}
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 underline"
                    href="https://www.me-advisorygroup.com"
                  >
                    www.me-advisorygroup.com
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
