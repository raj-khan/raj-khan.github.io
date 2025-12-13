import { MetadataRoute } from 'next';

export async function GET() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://meherullah.dev/';

  const robotsTxt = `# https://www.robotstxt.org/robotstxt.html
User-agent: *
Allow: /

# Sitemaps
Sitemap: ${siteUrl}/sitemap.xml

# Crawl-delay (optional, remove if not needed)
# Crawl-delay: 10

# Block specific paths if needed
# Disallow: /admin/
# Disallow: /api/

# Block specific user agents if needed
# User-agent: BadBot
# Disallow: /
`;

  return new Response(robotsTxt, {
    headers: {
      'Content-Type': 'text/plain',
    },
  });
}
