const STATS = [
  { num: '8', small: '+ yrs', label: 'shipping production code' },
  { num: '30', small: '+', label: 'products & features in production' },
  { num: '12', small: '', label: 'enterprise & client teams' },
  { num: '5', small: '+', label: 'open-source projects maintained' },
]

const MISSIONS = [
  { when: '2023 — now', what: 'Full-stack engineer', where: 'Snappymob · Kuala Lumpur', status: 'active' },
  { when: '2020 — 2023', what: 'Senior software engineer', where: 'Enterprise SaaS & financial systems', status: 'done' },
  { when: '2018 — 2020', what: 'Full-stack engineer', where: 'Product & client work, MVPs & dashboards', status: 'done' },
  { when: '2017 — 2018', what: 'Software engineer', where: 'Backend services & integrations', status: 'done' },
  { when: 'Ongoing', what: 'Independent / open-source', where: 'aiagentflow, e2spec, dev-workflow tooling', status: 'active' },
]

export function Experience() {
  return (
    <section className="section container reveal">
      <div className="section-head">
        <div>
          <div className="section-eyebrow">
            <span className="num">06 /</span> <span className="dot"></span>{' '}
            <span>mission log</span>
          </div>
          <h2 className="section-title">
            Eight years. <em>Real production. Real users.</em>
          </h2>
        </div>
        <p className="section-sub">
          No bootcamps, no buzzword resumes. Just shipped systems that customers paid for or relied
          on.
        </p>
      </div>
      <div className="experience-grid">
        <div>
          <div className="stats-grid">
            {STATS.map((s, i) => (
              <div className="stat" key={i}>
                <div className="stat-num">
                  {s.num}
                  <span className="small">{s.small}</span>
                </div>
                <div className="stat-label">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="mission-log">
          {MISSIONS.map((m, i) => (
            <div className="mission-row" key={i}>
              <div className="when">{m.when}</div>
              <div className="what">
                <strong>{m.what}</strong>
                <span className="where">{m.where}</span>
              </div>
              <div className={'status status-' + m.status}>
                {m.status === 'active' ? '● active' : '○ shipped'}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
