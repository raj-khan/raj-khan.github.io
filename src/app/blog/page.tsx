import Link from 'next/link'
import { getAllPosts } from '@/lib/blog'

export const metadata = {
  title: 'Blog',
  description:
    'Notes and tutorials on web development, software architecture, and the tools I work with daily — from Meher Ullah Khan Raj.',
}

export default async function BlogPage() {
  const posts = await getAllPosts()

  return (
    <div className="container">
      <div className="blog-head">
        <div className="eyebrow">Writing</div>
        <h1>Blog</h1>
        <p>
          Notes and tutorials on web development, software architecture, and the
          tools I work with daily.
        </p>
      </div>

      <div className="blog-list">
        {posts.map((post) => (
          <article className="blog-row" key={post.slug}>
            <time className="date" dateTime={post.date}>
              {new Date(post.date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'short',
              })}
            </time>
            <div>
              <h2 className="bt">
                <Link href={`/blog/${post.slug}`}>{post.title}</Link>
              </h2>
              {post.excerpt && <p className="bx">{post.excerpt}</p>}
              <div className="bm">
                {post.tags?.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  )
}
