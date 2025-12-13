'use client'

export function BlogPreview() {
  const blogPosts = [
    {
      title: 'AWS CloudWatch Alarms for Node.js Background Jobs: A Practical Setup',
      excerpt: 'A comprehensive guide to setting up CloudWatch alarms for monitoring Node.js background jobs, ensuring reliability and performance in production environments.',
      date: 'Recent',
      readTime: '8 min read',
      url: 'https://rajkhaan.medium.com/aws-cloudwatch-alarms-for-node-js-background-jobs-a-practical-setup-94f59e06a7d7',
      tags: ['AWS', 'Node.js', 'CloudWatch', 'DevOps']
    },
    {
      title: 'Configuring Nginx, PHP, MySQL & phpMyAdmin on Ubuntu 20.04',
      excerpt: 'A complete A-Z guide for configuring Nginx, PHP, MySQL, and phpMyAdmin on Ubuntu 20.04, including project deployment best practices.',
      date: 'Recent',
      readTime: '12 min read',
      url: 'https://rajkhaan.medium.com/configuring-nginx-php-mysql-phpmyadmin-on-ubuntu-20-04-a-to-z-with-project-deployment-cf47bd3d1715',
      tags: ['Nginx', 'PHP', 'MySQL', 'Ubuntu']
    },
    {
      title: 'Nginx & Apache2 Configuration for CodeIgniter',
      excerpt: 'Learn how to properly configure Nginx and Apache2 web servers for CodeIgniter applications with optimization and security best practices.',
      date: 'Recent',
      readTime: '6 min read',
      url: 'https://rajkhaan.medium.com/nginx-apache2-configuration-for-codeigniter-444872ff6ab2',
      tags: ['Nginx', 'Apache', 'CodeIgniter', 'PHP']
    },
    {
      title: 'Export Google Contacts Using Node.js and People API',
      excerpt: 'A step-by-step tutorial on exporting Google Contacts using Node.js and the Google People API, perfect for building contact management features.',
      date: 'Recent',
      readTime: '7 min read',
      url: 'https://rajkhaan.medium.com/export-google-contacts-using-node-js-and-people-api-662039ab6730',
      tags: ['Node.js', 'Google API', 'JavaScript']
    }
  ]

  return (
    <section id="blog" className="py-20 bg-gradient-to-b from-white to-slate-50 dark:from-gray-800 dark:to-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-4">
            Latest Blog Posts
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Thoughts on software development, architecture, and technology
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {blogPosts.map((post, index) => (
            <article
              key={index}
              className="group bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-700 hover:border-purple-200 dark:hover:border-purple-800 hover:-translate-y-2"
            >
              {/* Gradient Header */}
              <div className={`h-2 bg-gradient-to-r ${
                index === 0 ? 'from-purple-500 to-pink-500' :
                index === 1 ? 'from-blue-500 to-cyan-500' :
                index === 2 ? 'from-green-500 to-teal-500' :
                'from-orange-500 to-yellow-500'
              }`}></div>

              <div className="p-6">
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-purple-50 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 text-xs font-semibold rounded-lg"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors line-clamp-2">
                  {post.title}
                </h3>

                {/* Excerpt */}
                <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
                  {post.excerpt}
                </p>

                {/* Meta */}
                <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400 mb-4">
                  <span>{post.date}</span>
                  <span>{post.readTime}</span>
                </div>

                {/* Read More Link */}
                <a
                  href={post.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-purple-600 dark:text-purple-400 font-semibold hover:text-purple-700 dark:hover:text-purple-300 transition-colors group/link"
                >
                  Read on Medium
                  <svg className="w-4 h-4 ml-2 group-hover/link:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </a>
              </div>
            </article>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <a
            href="https://rajkhaan.medium.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-xl font-semibold hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 hover:scale-105"
          >
            <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24">
              <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z"/>
            </svg>
            View All Posts on Medium
          </a>
        </div>
      </div>
    </section>
  )
}
