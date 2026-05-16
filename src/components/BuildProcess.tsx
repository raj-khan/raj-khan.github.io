const PROCESS_STEPS = [
  { idx: '01', name: 'Idea', desc: 'Understand the business goal, users, and constraints.' },
  { idx: '02', name: 'Spec', desc: 'Translate into clear, developer-ready scope and tasks.' },
  { idx: '03', name: 'Architect', desc: 'Data model, API boundaries, auth, infra plan.' },
  { idx: '04', name: 'UI', desc: 'Frontend with React / Next.js. Real interactions, not mockups.' },
  { idx: '05', name: 'Backend', desc: 'Node.js / NestJS. APIs, jobs, integrations, data.' },
  { idx: '06', name: 'Test', desc: 'Jest, Cypress, integration, manual smoke. Real coverage.' },
  { idx: '07', name: 'Ship', desc: 'Docker, AWS, CI/CD. Observability before launch.' },
  { idx: '08', name: 'Iterate', desc: 'Read logs, listen to users, improve what matters.' },
]

const PROCESS_LOG = [
  { ts: '10:24:11', tag: 'info', txt: 'discovery call · 45min · captured 12 user stories' },
  { ts: '10:24:18', tag: 'ok', txt: 'spec.md generated · 6 milestones · 38 tickets' },
  { ts: '10:24:22', tag: 'info', txt: 'architecture: monolith → modular, Postgres, S3, queue worker' },
  { ts: '10:24:31', tag: 'ok', txt: 'ci/cd: github actions → ECS · zero-downtime deploys configured' },
  { ts: '10:24:39', tag: 'warn', txt: 'ai-suggested cache layer rejected · simpler memoization sufficient' },
  { ts: '10:24:44', tag: 'ok', txt: 'production: monitored · 99.8% uptime · ready for users' },
]

export function BuildProcess() {
  return (
    <section className="section container reveal" id="process">
      <div className="section-head">
        <div>
          <div className="section-eyebrow">
            <span className="num">02 /</span> <span className="dot"></span>{' '}
            <span>build process</span>
          </div>
          <h2 className="section-title">
            From idea to shipped product — <em>without skipping steps.</em>
          </h2>
        </div>
        <p className="section-sub">
          Eight stages. None of them get hand-waved away. AI helps; it doesn&apos;t replace any of
          them.
        </p>
      </div>
      <div className="pipeline">
        <div className="pipeline-bar">
          <span className="dot ok"></span>
          <span>pipeline · default-branch</span>
          <span className="path">/ build-process.yml</span>
          <span className="ts">last run: 2m ago · all stages passing</span>
        </div>
        <div className="pipeline-steps">
          {PROCESS_STEPS.map((s) => (
            <div className="pipe-step" key={s.idx}>
              <div className="idx">
                <span className="ind"></span> stage {s.idx}
              </div>
              <h4>{s.name}</h4>
              <p>{s.desc}</p>
              <div className="arrow"></div>
            </div>
          ))}
        </div>
        <div className="pipeline-log">
          {PROCESS_LOG.map((l, i) => (
            <div className="row" key={i}>
              <span className="ts">[{l.ts}]</span>
              <span className={'tag ' + l.tag}>{l.tag.toUpperCase().padEnd(6, ' ')}</span>
              <span className="msg">{l.txt}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
