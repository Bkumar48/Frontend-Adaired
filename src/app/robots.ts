import { MetadataRoute } from "next";

const robots = async () => {
  const siteUrl: string | undefined = process.env.NEXT_PUBLIC_DOMAIN_NAME;

  const metaRobots: MetadataRoute.Robots = {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: [
        "/_next/",    // Disallow Next.js internal resources
        "/dashboard"   // Disallow the dashboard path
      ],
    },
    sitemap: `${siteUrl}/sitemap.xml`,
  };

  return metaRobots;
};

export default robots;
