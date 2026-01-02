import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://meherullah.dev/';

  // Base routes
  const routes = [
    {
      url: siteUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 1.0,
    },
    {
      url: `${siteUrl}/#about`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${siteUrl}/#skills`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${siteUrl}/#projects`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: `${siteUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: `${siteUrl}/#contact`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
  ];

  // TODO: Add dynamic blog posts
  // You can add this later to fetch blog posts dynamically
  // Example:
  // const blogPosts = await getBlogPosts();
  // const blogPostRoutes = blogPosts.map((post) => ({
  //   url: `${siteUrl}/blog/${post.slug}`,
  //   lastModified: new Date(post.date),
  //   changeFrequency: 'monthly' as const,
  //   priority: 0.7,
  // }));

  return routes;
}
