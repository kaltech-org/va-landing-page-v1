import { MetadataRoute } from "next"

const BASE_URL = "https://www.me-advisorygroup.com"

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: BASE_URL,
      lastModified: new Date("2026-06-05"),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${BASE_URL}/about`,
      lastModified: new Date("2026-06-05"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/contact`,
      lastModified: new Date("2026-06-05"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/team`,
      lastModified: new Date("2026-06-05"),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/insights`,
      lastModified: new Date("2026-06-05"),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/services/tax-advisory`,
      lastModified: new Date("2026-06-05"),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/services/accounting-compliance`,
      lastModified: new Date("2026-06-05"),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/services/uae-ksa-relocation`,
      lastModified: new Date("2026-06-05"),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/services/real-estate-advisory`,
      lastModified: new Date("2026-06-05"),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/services/family-governance`,
      lastModified: new Date("2026-06-05"),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/insights/headquarter-services-uae-free-zone-tax-regime`,
      lastModified: new Date("2026-01-25"),
      changeFrequency: "yearly",
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/insights/place-of-effective-management-risk-for-foreign-businesses`,
      lastModified: new Date("2026-01-25"),
      changeFrequency: "yearly",
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/insights/uae-corporate-tax-compliance-what-businesses-need-to-know`,
      lastModified: new Date("2026-01-25"),
      changeFrequency: "yearly",
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/insights/uae-corporate-tax-small-business-relief-eligibility`,
      lastModified: new Date("2026-01-25"),
      changeFrequency: "yearly",
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/insights/uae-free-zones-vs-mainland-investors-guide`,
      lastModified: new Date("2026-01-25"),
      changeFrequency: "yearly",
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/insights/uae-tax-residency-for-individuals-tax-residency-certificate-guide`,
      lastModified: new Date("2026-01-25"),
      changeFrequency: "yearly",
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/insights/why-real-uae-substance-depends-on-who-runs-your-company`,
      lastModified: new Date("2026-05-12"),
      changeFrequency: "yearly",
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/insights/dubai-removes-minimum-property-value-investor-visas`,
      lastModified: new Date("2026-05-12"),
      changeFrequency: "yearly",
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/privacy-policy`,
      lastModified: new Date("2026-02-18"),
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${BASE_URL}/terms`,
      lastModified: new Date("2026-02-18"),
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${BASE_URL}/cookie-policy`,
      lastModified: new Date("2026-02-18"),
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ]
}
