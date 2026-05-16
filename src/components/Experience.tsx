const STATS = [
  { num: '8', small: '+ yrs', label: 'shipping production code' },
]

const MISSIONS = [
  { when: '2022 — now', what: 'Senior Software Engineer', where: 'Snappymob · Kuala Lumpur, Malaysia', status: 'active' },
  { when: '2022', what: 'PHP Developer', where: 'Wipro Bangladesh Limited · Dhaka', status: 'done' },
  { when: '2019 — 2022', what: 'Software Developer', where: 'SCT-Bangla Limited · Dhaka', status: 'done' },
  { when: '2017 — 2019', what: 'Full-Stack Web Developer', where: 'Bangladesh Software Development (BSD) · Dhaka', status: 'done' },
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
          Enterprise systems, SaaS products, and internal tools — owned end-to-end across frontend,
          backend, and infrastructure.
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
