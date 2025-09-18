import Link from 'next/link'

export function BlogPreview() {
  // This would typically come from your blog data
  const featuredPosts = [
    {
      title: 'Building Scalable APIs with NestJS and PostgreSQL',
      excerpt: 'Learn how to create enterprise-grade APIs using NestJS framework with PostgreSQL database, including authentication, validation, and performance optimization.',
      date: '2024-08-15',
      readTime: '8 min read',
      slug: 'scalable-apis-nestjs-postgresql',
      tags: ['NestJS', 'PostgreSQL', 'API Design'],
    },
    {
      title: 'Advanced TypeScript Patterns for Better Code',
      excerpt: 'Explore advanced TypeScript patterns including utility types, conditional types, and mapped types to write more maintainable and type-safe code.',
      date: '2024-07-28',
      readTime: '12 min read',
      slug: 'advanced-typescript-patterns',
      tags: ['TypeScript', 'Best Practices', 'Code Quality'],
    },
    {
      title: 'Optimizing React Performance with Hooks',
      excerpt: 'Deep dive into React performance optimization techniques using custom hooks, memoization, and proper state management patterns.',
      date: '2024-07-10',
      readTime: '10 min read',
      slug: 'react-performance-optimization',
      tags: ['React', 'Performance', 'Hooks'],
    },
  ]

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container-max-width section-padding">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Latest Blog Posts
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Sharing my thoughts and experiences on web development, best practices, and new technologies
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {featuredPosts.map((post, index) => (
            <article key={index} className="card p-6 hover:scale-105 transition-transform duration-200">
              <div className="mb-4">
                <div className="flex flex-wrap gap-2 mb-3">
                  {post.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  <Link 
                    href={`/blog/${post.slug}`}
                    className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
                    {post.title}
                  </Link>
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-3">
                  {post.excerpt}
                </p>
              </div>
              
              <div className="flex justify-between items-center text-sm text-gray-500 dark:text-gray-400">
                <time dateTime={post.date}>
                  {new Date(post.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </time>
                <span>{post.readTime}</span>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center">
          <Link href="/blog" className="btn-primary">
            View All Posts
          </Link>
        </div>
      </div>
    </section>
  )
}
