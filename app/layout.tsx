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
  title: "Middle Eastadvisory Group",
  description: "Trusted advisers delivering Big-Four-level expertise across the GCC region",
  generator: "v0.app", 
  icons: {
    icon: [{ url: "/new-logo.png", type: "image/png" }],
    shortcut: "/new-logo.png",
    apple: "/new-logo.png",
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
        <link rel="icon" href="/new-logo.png" type="image/png" />
        <link rel="shortcut icon" href="/new-logo.png" type="image/png" />
        <link rel="apple-touch-icon" href="/new-logo.png" />
        {/* </CHANGE> */}
      </head>
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
