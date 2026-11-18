import type { MetadataRoute } from "next";

const BASE = "https://lamourvoyages.com";
const routes = [
  "", "/about-us", "/services", "/north-america", "/south-america", "/canada",
  "/trending-destination", "/new-york", "/los-angeles", "/miami", "/orlando", "/boston",
  "/contact-us", "/privacy-policy",
];

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((r) => ({
    url: `${BASE}${r}`,
    changeFrequency: "monthly",
    priority: r === "" ? 1 : 0.7,
  }));
}
