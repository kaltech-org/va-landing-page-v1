import type React from "react"
import type { Metadata } from "next"
import { Poppins } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"

declare module "*.css"

// import "./globals.css"
import "./globals.css"
const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
})

export const metadata: Metadata = {
  metadataBase: new URL("https://www.me-advisorygroup.com"),
  title: "Corporate Tax & Accounting Advisory in Dubai UAE | MEA Group",
  description:
    "Middle East Advisory Group helps clients relocate to the UAE, Saudi Arabia and GCC with expert cross-border tax, real estate and wealth structuring services.",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_GB",
    siteName: "MEA Group",
    title: "Corporate Tax & Accounting Advisory in Dubai UAE | MEA Group",
    description:
      "Middle East Advisory Group helps clients relocate to the UAE, Saudi Arabia and GCC with expert cross-border tax, real estate and wealth structuring services.",
    images: [
      {
        url: "/modern-dubai-skyline-business-district.jpg",
        width: 1200,
        height: 630,
        alt: "MEA Group – UAE Advisory Services",
      },
    ],
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "32x32" },
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
  themeColor: "#2B4247",
}

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "MEA Group",
  alternateName: "Middle East Advisory Group",
  url: "https://www.me-advisorygroup.com",
  logo: "https://www.me-advisorygroup.com/new-logo.png",
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer service",
    areaServed: ["AE", "SA", "GB"],
    availableLanguage: "English",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={poppins.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
