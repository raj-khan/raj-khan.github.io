type Problem = {
  issue: string
  state: string
  q: string
  a: string
  tags: string[]
}

const PROBLEMS: Problem[] = [
  {
    issue: 'ISSUE-001',
    state: 'open',
    q: 'You have an idea but no technical roadmap.',
    a: 'I turn rough product concepts into clear specs, system architecture, and an MVP plan you can actually ship — without 6 weeks of slideware.',
    tags: ['discovery', 'specs', 'architecture'],
  },
  {
    issue: 'ISSUE-002',
    state: 'open',
    q: 'Your MVP is slow, messy, or hard to extend.',
    a: 'I refactor full-stack codebases, stabilise CI/CD, fix the data model, and bring the system back into a state where adding features is fast again.',
    tags: ['refactor', 'stability', 'speed'],
  },
  {
    issue: 'ISSUE-003',
    state: 'open',
    q: 'You need someone who can own the whole build.',
    a: "Frontend, backend, database, cloud, auth, deploy, monitoring — one technical partner instead of coordinating three contractors who don’t talk to each other.",
    tags: ['full-stack', 'ownership', 'delivery'],
  },
  {
    issue: 'ISSUE-004',
    state: 'open',
    q: 'You want AI leverage without AI chaos.',
    a: "I use Claude, Cursor, and agent CLIs daily — but every output gets reviewed, tested, and architected by a human who’s been shipping for 8 years.",
    tags: ['ai-assisted', 'review', 'judgment'],
  },
]

export function FounderProblems() {
  return (
    <section className="section container reveal" id="work">
      <div className="section-head">
        <div>
          <div className="section-eyebrow">
            <span className="num">01 /</span> <span className="dot"></span>{' '}
            <span>where i help most</span>
          </div>
          <h2 className="section-title">Four problems I genuinely love solving.</h2>
        </div>
        <p className="section-sub">
          These are the engineering challenges I gravitate toward — whether at work, in side projects, or collaborating with builders.
        </p>
      </div>
      <div className="problems-grid">
        {PROBLEMS.map((p, i) => (
          <div className="problem" key={i}>
            <div className="problem-issue">
              <span>{p.issue}</span>
              <span className="badge">{p.state}</span>
              <span style={{ marginLeft: 'auto' }}>· engineer: @meher</span>
            </div>
            <h3 className="problem-q">{p.q}</h3>
            <p className="problem-a">{p.a}</p>
            <div className="problem-tags">
              {p.tags.map((t) => (
                <span className="problem-tag" key={t}>
                  {t}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
