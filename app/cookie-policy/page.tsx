import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

export default function CookiePolicyPage() {
  return (
    <main className="min-h-screen bg-white font-sans">
      <Header />

      <section className="py-16 sm:py-20 md:py-24">
        <div className="max-w-5xl mx-auto px-6 md:px-10">
          <div className="space-y-4">
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl text-primary text-center">
              Cookie Policy
            </h1>
            <p className="text-xs sm:text-sm text-foreground/60">
              Last updated: 18th February 2026
            </p>
            <p className="text-sm sm:text-base text-foreground/80">
              This Cookie Policy explains how{" "}
              <strong>MEA Group</strong> ("we", "our", "us") uses cookies and similar
              technologies when you visit our website www.me-advisorygroup.com (the
              "Website"). It explains what these technologies are, why we use
              them, and the choices you have in managing them.
            </p>
          </div>

          <div className="mt-12 space-y-8 text-sm sm:text-base text-foreground/80 leading-relaxed">
            <div className="space-y-4">
              <h2 className="font-serif text-xl sm:text-2xl text-primary font-semibold">
                1. What Are Cookies?
              </h2>
              <p>
                Cookies are small text files that are placed on your device
                when you visit a website. They are widely used to make websites
                work, improve efficiency, and provide reporting information.
                Cookies can be "session cookies" (deleted when you close your
                browser) or "persistent cookies" (stored until they expire or
                are deleted).
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="font-serif text-xl sm:text-2xl text-primary font-semibold">
                2. How We Use Cookies
              </h2>
              <p>We use cookies for the following purposes:</p>
              <ol className="list-decimal pl-10 space-y-3">
                <li>
                  <strong>Essential Cookies</strong>
                  <ul className="list-disc pl-6 mt-2 space-y-2">
                    <li>
                      These are necessary for the Website to function properly.
                      For example, they enable you to use our contact form,
                      book meetings, and navigate the site securely.
                    </li>
                  </ul>
                </li>
                <li>
                  <strong>Performance &amp; Analytics Cookies</strong>
                  <ul className="list-disc pl-6 mt-2 space-y-2">
                    <li>
                      These help us understand how visitors use our Website
                      (e.g., which pages are visited most often, time spent on
                      site). We use this information to improve content,
                      usability, and performance.
                    </li>
                  </ul>
                </li>
                <li>
                  <strong>Functionality Cookies</strong>
                  <ul className="list-disc pl-6 mt-2 space-y-2">
                    <li>
                      These remember your preferences (such as language
                      settings) and make your experience more personalised.
                    </li>
                  </ul>
                </li>
                <li>
                  <strong>Third-Party Cookies</strong>
                  <ul className="list-disc pl-6 mt-2 space-y-2">
                    <li>
                      Our Website may use third-party services such as
                      analytics tools (e.g., Google Analytics) and booking
                      systems. These providers may set their own cookies to
                      deliver their services.
                    </li>
                  </ul>
                </li>
              </ol>
            </div>

            <div className="space-y-4">
              <h2 className="font-serif text-xl sm:text-2xl text-primary font-semibold">
                3. What Types of Cookies Do We Use?
              </h2>
              <ul className="list-disc pl-10 space-y-2">
                <li>
                  <strong>Strictly Necessary Cookies:</strong> Required for
                  security and functionality of contact forms and meeting
                  bookings.
                </li>
                <li>
                  <strong>Analytics Cookies:</strong> Track site usage and
                  visitor trends (e.g., Google Analytics).
                </li>
                <li>
                  <strong>Functional Cookies:</strong> Store user choices such
                  as form details temporarily.
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h2 className="font-serif text-xl sm:text-2xl text-primary font-semibold">
                4. Managing Cookies
              </h2>
              <p>
                You have the right to decide whether to accept or reject
                cookies. Most browsers automatically accept cookies, but you
                can usually modify your browser settings to decline cookies if
                you prefer.
              </p>
              <ul className="list-disc pl-10 space-y-2">
                <li>
                  To manage cookies, check the settings of your browser (e.g.,
                  Chrome, Safari, Firefox, Edge).
                </li>
                <li>
                  Please note that if you disable cookies, some parts of our
                  Website (such as booking forms) may not function properly.
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h2 className="font-serif text-xl sm:text-2xl text-primary font-semibold">
                5. Updates to This Policy
              </h2>
              <p>
                We may update this Cookie Policy from time to time to reflect
                changes in technology, law, or our business practices. We
                encourage you to review this page periodically for the latest
                information.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="font-serif text-xl sm:text-2xl text-primary font-semibold">
                6. Contact Us
              </h2>
              <p>
                If you have any questions about this Cookie Policy or our use
                of cookies, please contact us at:
              </p>
              <ul className="list-disc pl-10 space-y-2">
                <li>
                  <strong>MEA Group</strong>
                </li>
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
