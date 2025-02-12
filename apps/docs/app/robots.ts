import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: ["/", "/docs/dev", "/blog"],
    },
    sitemap: "https://chiho.zip",
  };
}
