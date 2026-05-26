import { Icon } from '@/components/Icons'

type Post = { date: string; title: string; href: string; meta: [string, string] }

const POSTS: Post[] = []

export function Writing() {
  if (POSTS.length === 0) return null

  return (
    <section className="section container reveal">
      <div className="section-head">
        <div>
          <div className="section-eyebrow">
            <span className="num">09 /</span> <span className="dot"></span>{' '}
            <span>engineering notes</span>
          </div>
          <h2 className="section-title">
            Writing. <em>Practical, not promotional.</em>
          </h2>
        </div>
        <p className="section-sub">
          Field notes from production work. Backend, frontend, devops, and what I&apos;m learning
          about agentic engineering.
        </p>
      </div>
      <div className="writing-list">
        {POSTS.map((p, i) => (
          <a className="writing-row" key={i} href={p.href}>
            <div className="date">{p.date}</div>
            <div>
              <div className="title">{p.title}</div>
              <div className="meta">
                <span className="tag">#{p.meta[0]}</span>
                <span>{p.meta[1]}</span>
              </div>
            </div>
            <div className="arrow">
              <Icon.arrowRight />
            </div>
          </a>
        ))}
      </div>
    </section>
  )
}
