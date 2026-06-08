import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Our Leadership Team | MEA Group",
  description:
    "Meet the Middle East Advisory Group leadership team advising clients on tax, corporate services, real estate and outsourced CFO across the UAE, KSA and UK.",
  alternates: {
    canonical: "/team",
  },
  robots: { index: true, follow: true },
  openGraph: {
    title: "Our Leadership Team | MEA Group",
    description:
      "Meet the Middle East Advisory Group leadership team advising clients on tax, corporate services, real estate and outsourced CFO across the UAE, KSA and UK.",
    url: "/team",
    images: [{ url: "/hero-team-office.jpg", width: 1200, height: 630, alt: "MEA Group Leadership Team" }],
  },
}

export default function TeamLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
