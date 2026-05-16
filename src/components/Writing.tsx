import { Icon } from '@/components/Icons'

const POSTS = [
  { date: 'Apr 12 · 2026', title: 'Why I let the agent write tests first', meta: ['agentic', '8 min read'] },
  { date: 'Mar 03 · 2026', title: 'Refactoring a 4-year-old NestJS monolith without downtime', meta: ['backend', '12 min read'] },
  { date: 'Feb 14 · 2026', title: 'Specs are the new prompts: what e2spec taught me', meta: ['ai-workflow', '6 min read'] },
  { date: 'Jan 20 · 2026', title: 'Postgres beats your vector DB until it doesn\'t', meta: ['data', '9 min read'] },
  { date: 'Dec 02 · 2025', title: 'A senior engineer\'s case against vibe coding', meta: ['essay', '11 min read'] },
]

export function Writing() {
  return (
    <section className="section container reveal">
      <div className="section-head">
        <div>
          <div className="section-eyebrow">
            <span className="num">09 /</span> <span className="dot"></span>{' '}
            <span>engineering notes</span>
          </div>
          <h2 className="section-title">
            Writing — <em>practical, not promotional.</em>
          </h2>
        </div>
        <p className="section-sub">
          Field notes from production work. Backend, frontend, devops, and what I&apos;m learning
          about agentic engineering.
        </p>
      </div>
      <div className="writing-list">
        {POSTS.map((p, i) => (
          <a className="writing-row" key={i} href="#">
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
