import { MetadataRoute } from "next"

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/admin/", "/search/", "/assets/", "/brand-assets"],
      },
    ],
    sitemap: "https://www.me-advisorygroup.com/sitemap.xml",
  }
}
