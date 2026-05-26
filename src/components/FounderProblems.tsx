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
    q: 'Requirements exist but no one has turned them into a technical plan.',
    a: 'I take written requirements, user stories, or rough notes and produce a real technical roadmap: data model, API design, infra decisions, milestones, and task breakdown. Something engineers can actually build from.',
    tags: ['roadmap', 'specs', 'architecture'],
  },
  {
    issue: 'ISSUE-002',
    state: 'open',
    q: 'The existing codebase is too slow, brittle, or hard to extend.',
    a: 'I dig into the code, find what is actually causing the problem, and fix it. Query performance, deployment pipeline, flaky data model, tight coupling. I refactor until adding a new feature does not feel like defusing a bomb.',
    tags: ['refactor', 'performance', 'deployment'],
  },
  {
    issue: 'ISSUE-003',
    state: 'open',
    q: 'Something needs to be built from scratch and shipped to production.',
    a: 'I handle the whole thing. Architecture, backend, frontend, auth, database, CI/CD, deployment, monitoring. I have done this enough times to know where projects stall and how to avoid it.',
    tags: ['full-stack', 'build', 'deployment'],
  },
  {
    issue: 'ISSUE-004',
    state: 'open',
    q: 'The team wants to use AI but is not sure how to do it properly.',
    a: 'I work with Claude, Cursor, and agent tooling every day on real production code. I know what AI is good at, where it cuts corners, and how to set up workflows that make the whole team faster without creating a mess.',
    tags: ['ai-tooling', 'workflow', 'code-quality'],
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
          <h2 className="section-title">Four things I do well and do often.</h2>
        </div>
        <p className="section-sub">
          Problems I run into constantly, at work and in side projects. I have good answers for all of them.
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
