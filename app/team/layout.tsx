import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Our Leadership Team | MEA Group",
  description:
    "Meet the Middle East Advisory Group leadership team advising clients on tax, corporate services, real estate and outsourced CFO across the UAE, KSA and UK.",
}

export default function TeamLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
