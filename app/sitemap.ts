import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    { url: siteUrl,                  lastModified: now, changeFrequency: "weekly",  priority: 1.0 },
    { url: `${siteUrl}/servicios`,   lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${siteUrl}/contacto`,    lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${siteUrl}/proyectos`,   lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${siteUrl}/agencia`,     lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${siteUrl}/proceso`,     lastModified: now, changeFrequency: "monthly", priority: 0.7 },
  ];
}
