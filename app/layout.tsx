import type React from "react"
import type { Metadata } from "next"
import { Poppins } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Corporate Tax & Accounting Advisory in Dubai UAE | MEA Group",
  description:
    "Middle East Advisory Group helps clients relocate to the UAE, Saudi Arabia and GCC with expert cross-border tax, real estate and wealth structuring services.",
  generator: "v0.app",
  icons: {
    icon: [{ url: "/new-logo.png", type: "image/png" }],
    shortcut: "/new-logo.png",
    apple: "/new-logo.png",
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
        <link rel="icon" href="/new-logo.png" type="image/png" />
        <link rel="shortcut icon" href="/new-logo.png" type="image/png" />
        <link rel="apple-touch-icon" href="/new-logo.png" />
      </head>
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
