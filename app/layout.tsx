import type React from "react"
import type { Metadata } from "next"
import { Shippori_Mincho, Poppins } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const shipporiMincho = Shippori_Mincho({
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
  variable: "--font-serif",
})

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-sans",
})

export const metadata: Metadata = {
  title: "Tax Consulting Group | Premium Corporate Advisory Services",
  description: "Trusted advisers delivering Big-Four-level expertise across the GCC region",
  generator: "v0.app",
  icons: {
    icon: [{ url: "/tcg-logo.png", type: "image/png" }],
    shortcut: "/tcg-logo.png",
    apple: "/tcg-logo.png",
  },
  // </CHANGE>
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${shipporiMincho.variable} ${poppins.variable}`}>
      <head>
        <link rel="icon" href="/tcg-logo.png" type="image/png" />
        <link rel="shortcut icon" href="/tcg-logo.png" type="image/png" />
        <link rel="apple-touch-icon" href="/tcg-logo.png" />
        {/* </CHANGE> */}
      </head>
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
